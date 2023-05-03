from flask import Blueprint, request, jsonify
from app.models import Calendar, User, db
from sqlalchemy import desc, or_
import os;

calendar_routes = Blueprint("calendar", __name__)

# GET ALL CALENDARS WITH IMAGES AND USERS
@calendar_routes.route("/")
def view_calendars():
    calendars = (Calendar.query.join(User, User.id == Calendar.userId)
    .add_columns(User.username).order_by(desc(Calendar.created_at)).all()
    )
    returnList = []
    for calendar in calendars:
        newDict = calendar[0].to_dict()
        newDict["User"] = calendar[1]
        returnList.append(newDict)
    return jsonify(returnList)


# POST NEW CALENDAR
@calendar_routes.route("/", methods=["POST"])
def new_calendar_post():
    new_calendar = Calendar(
        userId=request.json["userId"],
        calOne=request.json["calOne"],
        calTwo=request.json["calTwo"],
        calThree=request.json["calThree"],
        calFour=request.json["calFour"],
        calFive=request.json["calFive"],
        calSix=request.json["calSix"],
        calSeven=request.json["calSeven"],
        calEight=request.json["calEight"],
        calNine=request.json["calNine"],
        calTen=request.json["calTen"],
        calEleven=request.json["calEleven"],
        calTwelve=request.json["calTwelve"],
        calThirteen=request.json["calThirteen"],
        calFourteen=request.json["calFourteen"],
        calFifteen=request.json["calFifteen"],
        calSixteen=request.json["calSixteen"],
        calSeventeen=request.json["calSeventeen"],
        calEighteen=request.json["calEighteen"],
        calNineteen=request.json["calNineteen"],
        calTwenty=request.json["calTwenty"],
        calTwentyOne=request.json["calTwentyOne"],
        calTwentyTwo=request.json["calTwentyTwo"],
        calTwentyThree=request.json["calTwentyThree"],
        calTwentyFour=request.json["calTwentyFour"],
        calTwentyFive=request.json["calTwentyFive"],
        calTwentySix=request.json["calTwentySix"],
        calTwentySeven=request.json["calTwentySeven"],
        calTwentyEight=request.json["calTwentyEight"],
        calTwentyNine=request.json["calTwentyNine"],
        calThirty=request.json["calThirty"],
        calThirtyOne=request.json["calThirtyOne"],
        calThirtyTwo=request.json["calThirtyTwo"],
        calThirtyThree=request.json["calThirtyThree"],
        calThirtyFour=request.json["calThirtyFour"],
        calThirtyFive=request.json["calThirtyFive"],
        calThirtySix=request.json["calThirtySix"],
        calThirtySeven=request.json["calThirtySeven"],
        calThirtyEight=request.json["calThirtyEight"],
        calThirtyNine=request.json["calThirtyNine"],
        calFourty=request.json["calFourty"],
        calFourtyOne=request.json["calFourtyOne"],
        calFourtyTwo=request.json["calFourtyTwo"],
        calFourtyThree=request.json["calFourtyThree"],
        calFourtyFour=request.json["calFourtyFour"],
        calFourtyFive=request.json["calFourtyFive"],
        calFourtySix=request.json["calFourtySix"],
        calFourtySeven=request.json["calFourtySeven"],
        calFourtyEight=request.json["calFourtyEight"],
        calFourtyNine=request.json["calFourtyNine"],
        calFifty=request.json["calFifty"],
        calFiftyOne=request.json["calFiftyOne"],
        calFiftyTwo=request.json["calFiftyTwo"],
        calFiftyThree=request.json["calFiftyThree"],
        calFiftyFour=request.json["calFiftyFour"],
        calFiftyFive=request.json["calFiftyFive"],
        calFiftySix=request.json["calFiftySix"],
        calFiftySeven=request.json["calFiftySeven"],
        calFiftyEight=request.json["calFiftyEight"],
        calFiftyNine=request.json["calFiftyNine"],
        calSixty=request.json["calSixty"],
        calSixtyOne=request.json["calSixtyOne"],
        calSixtyTwo=request.json["calSixtyTwo"],
        calSixtyThree=request.json["calSixtyThree"],
        calSixtyFour=request.json["calSixtyFour"],
        calSixtyFive=request.json["calSixtyFive"],
        calSixtySix=request.json["calSixtySix"],
        calSixtySeven=request.json["calSixtySeven"],
        calSixtyEight=request.json["calSixtyEight"],
        calSixtyNine=request.json["calSixtyNine"],
        calSeventy=request.json["calSeventy"],
        calSeventyOne=request.json["calSeventyOne"],
        calSeventyTwo=request.json["calSeventyTwo"],
        calSeventyThree=request.json["calSeventyThree"],
        calSeventyFour=request.json["calSeventyFour"],
        calSeventyFive=request.json["calSeventyFive"],
        calSeventySix=request.json["calSeventySix"],
        calSeventySeven=request.json["calSeventySeven"],
        calSeventyEight=request.json["calSeventyEight"],
        calSeventyNine=request.json["calSeventyNine"],
        calEighty=request.json["calEighty"],
        calEightyOne=request.json["calEightyOne"],
        calEightyTwo=request.json["calEightyTwo"],
        calEightyThree=request.json["calEightyThree"],
        calEightyFour=request.json["calEightyFour"],
        calEightyFive=request.json["calEightyFive"],
        calEightySix=request.json["calEightySix"],
        calEightySeven=request.json["calEightySeven"],
        calEightyEight=request.json["calEightyEight"],
        calEightyNine=request.json["calEightyNine"],
        calNinety=request.json["calNinety"],
        calNinetyOne=request.json["calNinetyOne"],
        calNinetyTwo=request.json["calNinetyTwo"],
        calNinetyThree=request.json["calNinetyThree"],
        calNinetyFour=request.json["calNinetyFour"],
        calNinetyFive=request.json["calNinetyFive"],
        calNinetySix=request.json["calNinetySix"],
        calNinetySeven=request.json["calNinetySeven"],
        calNinetyEight=request.json["calNinetyEight"],
        calNinetyNine=request.json["calNinetyNine"],
        calOneHundred=request.json["calOneHundred"],
        calOneHundredOne=request.json["calOneHundredOne"],
        calOneHundredTwo=request.json["calOneHundredTwo"],
        calOneHundredThree=request.json["calOneHundredThree"],
        calOneHundredFour=request.json["calOneHundredFour"],
        calOneHundredFive=request.json["calOneHundredFive"],
        calOneHundredSix=request.json["calOneHundredSix"],
        calOneHundredSeven=request.json["calOneHundredSeven"],
        calOneHundredEight=request.json["calOneHundredEight"],
        calOneHundredNine=request.json["calOneHundredNine"],
        calOneHundredTen=request.json["calOneHundredTen"],
        calOneHundredEleven=request.json["calOneHundredEleven"],
        calOneHundredTwelve=request.json["calOneHundredTwelve"],
        calOneHundredThirteen=request.json["calOneHundredThirteen"],
        calOneHundredFourteen=request.json["calOneHundredFourteen"],
        calOneHundredFifteen=request.json["calOneHundredFifteen"],
        calOneHundredSixteen=request.json["calOneHundredSixteen"],
        calOneHundredSeventeen=request.json["calOneHundredSeventeen"],
        calOneHundredEighteen=request.json["calOneHundredEighteen"],
        calOneHundredNineteen=request.json["calOneHundredNineteen"],
        calOneHundredTwenty=request.json["calOneHundredTwenty"],
        calOneHundredTwentyOne=request.json["calOneHundredTwentyOne"],
        calOneHundredTwentyTwo=request.json["calOneHundredTwentyTwo"],
        calOneHundredTwentyThree=request.json["calOneHundredTwentyThree"],
        calOneHundredTwentyFour=request.json["calOneHundredTwentyFour"],
        calOneHundredTwentyFive=request.json["calOneHundredTwentyFive"],
        calOneHundredTwentySix=request.json["calOneHundredTwentySix"],
        calOneHundredTwentySeven=request.json["calOneHundredTwentySeven"],
        calOneHundredTwentyEight=request.json["calOneHundredTwentyEight"],
        calOneHundredTwentyNine=request.json["calOneHundredTwentyNine"],
        calOneHundredThirty=request.json["calOneHundredThirty"],
        calOneHundredThirtyOne=request.json["calOneHundredThirtyOne"],
        calOneHundredThirtyTwo=request.json["calOneHundredThirtyTwo"],
        calOneHundredThirtyThree=request.json["calOneHundredThirtyThree"],
        calOneHundredThirtyFour=request.json["calOneHundredThirtyFour"],
        calOneHundredThirtyFive=request.json["calOneHundredThirtyFive"],
        calOneHundredThirtySix=request.json["calOneHundredThirtySix"],
        calOneHundredThirtySeven=request.json["calOneHundredThirtySeven"],
        calOneHundredThirtyEight=request.json["calOneHundredThirtyEight"],
        calOneHundredThirtyNine=request.json["calOneHundredThirtyNine"],
        calOneHundredFourty=request.json["calOneHundredFourty"],
        calOneHundredFourtyOne=request.json["calOneHundredFourtyOne"],
        calOneHundredFourtyTwo=request.json["calOneHundredFourtyTwo"],
        calOneHundredFourtyThree=request.json["calOneHundredFourtyThree"],
        calOneHundredFourtyFour=request.json["calOneHundredFourtyFour"],
        calOneHundredFourtyFive=request.json["calOneHundredFourtyFive"],
        calOneHundredFourtySix=request.json["calOneHundredFourtySix"],
        calOneHundredFourtySeven=request.json["calOneHundredFourtySeven"],
        calOneHundredFourtyEight=request.json["calOneHundredFourtyEight"],
        calOneHundredFourtyNine=request.json["calOneHundredFourtyNine"],
        calOneHundredFifty=request.json["calOneHundredFifty"],
        calOneHundredFiftyOne=request.json["calOneHundredFiftyOne"],


    )

    db.session.add(new_calendar)
    db.session.commit()


    return new_calendar.to_dict()

#Get spot by ID
@calendar_routes.route("/<int:id>")
def one_calendar(id):
    oneCalendar = Calendar.query.get(id).to_dict()
    user = User.query.filter(User.id == oneCalendar["userId"])
    oneCalendar["user"] = [one.to_dict() for one in user]
    return oneCalendar

#Update Post
@calendar_routes.route("/<int:id>/edit", methods=["POST"])
def updateCalendar(id):
    calendarToUpdate = Calendar.query.get(id)
    calendarToUpdate.start = request.json["start"]
    calendarToUpdate.end = request.json["end"]

    db.session.commit()
    updatedCalendar = Calendar.query.get(id)
    return jsonify(updatedCalendar.to_dict())

#DELETE /posts/:id/
@calendar_routes.route("/<int:id>", methods=["GET", "DELETE"])
def deletePost(id):
    calendarToDelete = Calendar.query.get(id)

    db.session.delete(calendarToDelete)
    db.session.commit()
    return jsonify(calendarToDelete.to_dict())
