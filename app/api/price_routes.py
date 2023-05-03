from flask import Blueprint, request, jsonify
from app.models import Price, User, db
from sqlalchemy import desc, or_
import os;



price_routes = Blueprint("prices", __name__)

# GET ALL PRICES WITH IMAGES AND USERS
@price_routes.route("/")
def view_prices():
    prices = (Price.query.join(User, User.id == Price.userId)
    .add_columns(User.username).order_by(desc(Price.created_at)).all()
    )
    returnList = []
    for price in prices:
        newDict = price[0].to_dict()
        newDict["User"] = price[1]
        returnList.append(newDict)
    return jsonify(returnList)


# POST NEW PRICE
@price_routes.route("/", methods=["POST"])
def new_price_post():
    new_price = Price(
        userId=request.json["userId"],
        varOne = request.json["varOne"],
        varTwo = request.json["varTwo"],
        varThree = request.json["varThree"],
        varFour = request.json["varFour"],
        varFive = request.json["varFive"],
        varSix = request.json["varSix"],
        varSeven = request.json["varSeven"],
        varEight = request.json["varEight"],
        varNine = request.json["varNine"],
        varTen = request.json["varTen"],
        varEleven = request.json["varEleven"],
        varTwelve = request.json["varTwelve"],
        varThirteen = request.json["varThirteen"],
        varFourteen = request.json["varFourteen"],
        varFifteen = request.json["varFifteen"],
        varSixteen = request.json["varSixteen"],
        varSeventeen = request.json["varSeventeen"],
        varEighteen = request.json["varEighteen"],
        varNinteen = request.json["varNinteen"],
        varTwenty = request.json["varTwenty"],
        varTwentyOne = request.json["varTwentyOne"],
        varTwentyTwo = request.json["varTwentyTwo"],
        varTwentyThree = request.json["varTwentyThree"],
        varTwentyFour = request.json["varTwentyFour"],
        varTwentyFive = request.json["varTwentyFive"],
        varTwentySix = request.json["varTwentySix"],
        varTwentySeven = request.json["varTwentySeven"],
        varTwentyEight = request.json["varTwentyEight"],
        varTwentyNine = request.json["varTwentyNine"],
        varThirty = request.json["varThirty"],
        varThirtyOne = request.json["varThirtyOne"],
        varThirtyTwo = request.json["varThirtyTwo"],
        varThirtyThree = request.json["varThirtyThree"],
        varThirtyFour = request.json["varThirtyFour"],
        varThirtyFive = request.json["varThirtyFive"],
        varThirtySix = request.json["varThirtySix"],
        varThirtySeven = request.json["varThirtySeven"],
        varThirtyEigh = request.json["varThirtyEigh"],
        varThirtyNine = request.json["varThirtyNine"],
        varFourty = request.json["varFourty"],
        varFourtyOne = request.json["varFourtyOne"],
        varFourtyTwo = request.json["varFourtyTwo"],
        varFourtyThree = request.json["varFourtyThree"],
        varFourtyFour = request.json["varFourtyFour"],
        varFourtyFive = request.json["varFourtyFive"],
        varFourtySix = request.json["varFourtySix"],
        varFourtySeven = request.json["varFourtySeven"],
        varFourtyEight = request.json["varFourtyEight"],
        varFourtyNine = request.json["varFourtyNine"],
        varFifty = request.json["varFifty"],
        varFiftyOne = request.json["varFiftyOne"],
        varFiftyTwo = request.json["varFiftyTwo"],
        varFiftyThree = request.json["varFiftyThree"],
        varFiftyFour = request.json["varFiftyFour"],
        varFiftyFive = request.json["varFiftyFive"],
        varFiftySix = request.json["varFiftySix"],
        varFiftySeven = request.json["varFiftySeven"],
        varFiftyEight = request.json["varFiftyEight"],


    )

    db.session.add(new_price)
    db.session.commit()


    return new_price.to_dict()

#Get PRICE by ID
@price_routes.route("/<int:id>")
def one_price(id):
    onePrice = Price.query.get(id).to_dict()
    user = User.query.filter(User.id == onePrice["userId"])
    onePrice["user"] = [one.to_dict() for one in user]
    return onePrice

#Update Post
@price_routes.route("/<int:id>/edit", methods=["POST"])
def updatePrice(id):
    priceToUpdate = Price.query.get(id)
    priceToUpdate.varOne = request.json["varOne"]
    priceToUpdate.varTwo = request.json["varTwo"]
    priceToUpdate.varThree = request.json["varThree"]
    priceToUpdate.varFour = request.json["varFour"]
    priceToUpdate.varFive = request.json["varFive"]
    priceToUpdate.varSix = request.json["varSix"]
    priceToUpdate.varSeven = request.json["varSeven"]
    priceToUpdate.varEight = request.json["varEight"]
    priceToUpdate.varNine = request.json["varNine"]
    priceToUpdate.varTen = request.json["varTen"]


    db.session.commit()
    updatedPrice = Price.query.get(id)
    return jsonify(updatedPrice.to_dict())

#DELETE /posts/:id/
@price_routes.route("/<int:id>", methods=["GET", "DELETE"])
def deletePost(id):
    priceToDelete = Price.query.get(id)

    db.session.delete(priceToDelete)
    db.session.commit()
    return jsonify(priceToDelete.to_dict())
