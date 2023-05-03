from flask import Blueprint, request, jsonify
from app.forms.new_quote import NewQuoteForm
from app.models import Quote, User, db
from sqlalchemy import desc, or_

import os;

quote_routes = Blueprint("quotes", __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

#Get a list of all the quotes made by the agents
@quote_routes.route("/")
def get_quotes():
    quotes = (Quote.query.join(User, User.id == Quote.userId)
    .add_columns(User.username).order_by(desc(Quote.created_at)).all())
    returnList = []
    for quote in quotes:
        newDict = quote[0].to_dict()
        newDict["User"] = quote[1]
        returnList.append(newDict)
    return jsonify(returnList)

#Route for a sales agent to create a quote
@quote_routes.route("/new/", methods=["POST"])
def new_quote_post():
    form = NewQuoteForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
            userId=form.data['userId'],
            firstName=form.data['firstName'],
            lastName=form.data['lastName'],
            phone=form.data['phone'],
            orgin=form.data['orgin'],
            new_quote = Quote(userId=userId, firstName=firstName, lastName=lastName, phone=phone, orgin=orgin)
            db.session.add(new_quote)
            db.session.commit()
            return {"quote" : new_quote.to_dict()}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

#Route to get a single quote and all of the information that's tied to it so a sales agent can edit or delete it
@quote_routes.route("/<int:id>")
def one_quote(id):
    oneQuote = Quote.query.get(id).to_dict()
    user = User.query.filter(User.id == oneQuote["userId"])
    oneQuote["user"] = [one.to_dict() for one in user]
    return oneQuote

#Sales Agents are able to edit the information of a specific quote that they created
@quote_routes.route("/<int:id>/edit", methods=["PUT"])
def updateQuote(id):
    quoteToUpdate = Quote.query.get(id)
    quoteToUpdate.firstName = request.json["firstName"]
    quoteToUpdate.lastName = request.json["lastName"]
    quoteToUpdate.phone = request.json["phone"]
    quoteToUpdate.date = request.json["date"]
    quoteToUpdate.orgin = request.json["orgin"]
    quoteToUpdate.destination = request.json["destination"]
    db.session.commit()
    updatedQuote = Quote.query.get(id)
    return jsonify(updatedQuote.to_dict())

#Sales agents are able to Delete a quote that was accidentally created or no longer needed
@quote_routes.route("/<int:id>", methods=["GET", "DELETE"])
def deleteQuote(id):
    quoteToDelete = Quote.query.get(id)

    db.session.delete(quoteToDelete)
    db.session.commit()
    return jsonify(quoteToDelete.to_dict())
