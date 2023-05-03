
from flask import Blueprint, request, jsonify
from app.models import Spot, User, db
from sqlalchemy import desc, or_
import os;

spot_routes = Blueprint("quotes", __name__)

# GET ALL SPOTS WITH IMAGES AND USERS
@spot_routes.route("/")
def view_spots():
    spots = (Spot.query.join(User, User.id == Spot.userId)
    .add_columns(User.username).order_by(desc(Spot.created_at)).all()
    )
    returnList = []
    for spot in spots:
        newDict = spot[0].to_dict()
        newDict["User"] = spot[1]
        returnList.append(newDict)
    return jsonify(returnList)


# POST NEW SPOT
@spot_routes.route("/new/", methods=["POST"])
def new_spot_post():
    new_spot = Spot(
        userId=request.json["userId"],
        city=request.json["city"],
        country=request.json["country"],
        name=request.json["name"],
        price=request.json["price"],
        state=request.json["state"],
        address=request.json["address"]
    )

    db.session.add(new_spot)
    db.session.commit()


    return new_spot.to_dict()

#Get spot by ID
@spot_routes.route("/<int:id>")
def one_spot(id):
    oneSpot = Spot.query.get(id).to_dict()
    user = User.query.filter(User.id == oneSpot["userId"])
    oneSpot["user"] = [one.to_dict() for one in user]
    return oneSpot

#Update Post
@spot_routes.route("/<int:id>/edit", methods=["POST"])
def updateSpot(id):
    spotToUpdate = Spot.query.get(id)
    spotToUpdate.price = request.json["price"]
    spotToUpdate.name = request.json["name"]

    db.session.commit()
    updatedSpot = Spot.query.get(id)
    return jsonify(updatedSpot.to_dict())

#DELETE /posts/:id/
@spot_routes.route("/<int:id>", methods=["GET", "DELETE"])
def deletePost(id):
    spotToDelete = Spot.query.get(id)

    db.session.delete(spotToDelete)
    db.session.commit()
    return jsonify(spotToDelete.to_dict())
