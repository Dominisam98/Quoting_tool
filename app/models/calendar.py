from .db import db
from sqlalchemy import DateTime, ARRAY
import datetime

class Calendar(db.Model):
    __tablename__ = 'calendars'

    id = db.Column(db.Integer, primary_key=True)
    calOne = db.Column(db.Boolean, nullable=False, default=False)
    calTwo = db.Column(db.Boolean, nullable=False, default=False)
    calThree = db.Column(db.Boolean, nullable=False, default=False)
    calFour = db.Column(db.Boolean, nullable=False, default=False)
    calFive = db.Column(db.Boolean, nullable=False, default=False)
    calSix = db.Column(db.Boolean, nullable=False, default=False)
    calSeven = db.Column(db.Boolean, nullable=False, default=False)
    calEight = db.Column(db.Boolean, nullable=False, default=False)
    calNine = db.Column(db.Boolean, nullable=False, default=False)
    calTen = db.Column(db.Boolean, nullable=False, default=False)
    calEleven = db.Column(db.Boolean, nullable=False, default=False)
    calTwelve = db.Column(db.Boolean, nullable=False, default=False)
    calThirteen = db.Column(db.Boolean, nullable=False, default=False)
    calFourteen = db.Column(db.Boolean, nullable=False, default=False)
    calFifteen = db.Column(db.Boolean, nullable=False, default=False)
    calSixteen = db.Column(db.Boolean, nullable=False, default=False)
    calSeventeen = db.Column(db.Boolean, nullable=False, default=False)
    calEighteen = db.Column(db.Boolean, nullable=False, default=False)
    calNineteen = db.Column(db.Boolean, nullable=False, default=False)
    calTwenty = db.Column(db.Boolean, nullable=False, default=False)
    calTwentyOne = db.Column(db.Boolean, nullable=False, default=False)
    calTwentyTwo = db.Column(db.Boolean, nullable=False, default=False)
    calTwentyThree = db.Column(db.Boolean, nullable=False, default=False)
    calTwentyFour = db.Column(db.Boolean, nullable=False, default=False)
    calTwentyFive = db.Column(db.Boolean, nullable=False, default=False)
    calTwentySix = db.Column(db.Boolean, nullable=False, default=False)
    calTwentySeven = db.Column(db.Boolean, nullable=False, default=False)
    calTwentyEight = db.Column(db.Boolean, nullable=False, default=False)
    calTwentyNine = db.Column(db.Boolean, nullable=False, default=False)
    calThirty = db.Column(db.Boolean, nullable=False, default=False)
    calThirtyOne = db.Column(db.Boolean, nullable=False, default=False)
    calThirtyTwo = db.Column(db.Boolean, nullable=False, default=False)
    calThirtyThree = db.Column(db.Boolean, nullable=False, default=False)
    calThirtyFour = db.Column(db.Boolean, nullable=False, default=False)
    calThirtyFive = db.Column(db.Boolean, nullable=False, default=False)
    calThirtySix = db.Column(db.Boolean, nullable=False, default=False)
    calThirtySeven = db.Column(db.Boolean, nullable=False, default=False)
    calThirtyEight = db.Column(db.Boolean, nullable=False, default=False)
    calThirtyNine = db.Column(db.Boolean, nullable=False, default=False)
    calFourty = db.Column(db.Boolean, nullable=False, default=False)
    calFourtyOne = db.Column(db.Boolean, nullable=False, default=False)
    calFourtyTwo = db.Column(db.Boolean, nullable=False, default=False)
    calFourtyThree = db.Column(db.Boolean, nullable=False, default=False)
    calFourtyFour = db.Column(db.Boolean, nullable=False, default=False)
    calFourtyFive = db.Column(db.Boolean, nullable=False, default=False)
    calFourtySix = db.Column(db.Boolean, nullable=False, default=False)
    calFourtySeven = db.Column(db.Boolean, nullable=False, default=False)
    calFourtyEight = db.Column(db.Boolean, nullable=False, default=False)
    calFourtyNine = db.Column(db.Boolean, nullable=False, default=False)
    calFifty = db.Column(db.Boolean, nullable=False, default=False)
    calFiftyOne = db.Column(db.Boolean, nullable=False, default=False)
    calFiftyTwo = db.Column(db.Boolean, nullable=False, default=False)
    calFiftyThree = db.Column(db.Boolean, nullable=False, default=False)
    calFiftyFour = db.Column(db.Boolean, nullable=False, default=False)
    calFiftyFive = db.Column(db.Boolean, nullable=False, default=False)
    calFiftySix = db.Column(db.Boolean, nullable=False, default=False)
    calFiftySeven = db.Column(db.Boolean, nullable=False, default=False)
    calFiftyEight = db.Column(db.Boolean, nullable=False, default=False)
    calFiftyNine = db.Column(db.Boolean, nullable=False, default=False)
    calSixty = db.Column(db.Boolean, nullable=False, default=False)
    calSixtyOne = db.Column(db.Boolean, nullable=False, default=False)
    calSixtyTwo = db.Column(db.Boolean, nullable=False, default=False)
    calSixtyThree = db.Column(db.Boolean, nullable=False, default=False)
    calSixtyFour = db.Column(db.Boolean, nullable=False, default=False)
    calSixtyFive = db.Column(db.Boolean, nullable=False, default=False)
    calSixtySix = db.Column(db.Boolean, nullable=False, default=False)
    calSixtySeven = db.Column(db.Boolean, nullable=False, default=False)
    calSixtyEight = db.Column(db.Boolean, nullable=False, default=False)
    calSixtyNine = db.Column(db.Boolean, nullable=False, default=False)
    calSeventy = db.Column(db.Boolean, nullable=False, default=False)
    calSeventyOne = db.Column(db.Boolean, nullable=False, default=False)
    calSeventyTwo = db.Column(db.Boolean, nullable=False, default=False)
    calSeventyThree = db.Column(db.Boolean, nullable=False, default=False)
    calSeventyFour = db.Column(db.Boolean, nullable=False, default=False)
    calSeventyFive = db.Column(db.Boolean, nullable=False, default=False)
    calSeventySix = db.Column(db.Boolean, nullable=False, default=False)
    calSeventySeven = db.Column(db.Boolean, nullable=False, default=False)
    calSeventyEight = db.Column(db.Boolean, nullable=False, default=False)
    calSeventyNine = db.Column(db.Boolean, nullable=False, default=False)
    calEighty = db.Column(db.Boolean, nullable=False, default=False)
    calEightyOne = db.Column(db.Boolean, nullable=False, default=False)
    calEightyTwo = db.Column(db.Boolean, nullable=False, default=False)
    calEightyThree = db.Column(db.Boolean, nullable=False, default=False)
    calEightyFour = db.Column(db.Boolean, nullable=False, default=False)
    calEightyFive = db.Column(db.Boolean, nullable=False, default=False)
    calEightySix = db.Column(db.Boolean, nullable=False, default=False)
    calEightySeven = db.Column(db.Boolean, nullable=False, default=False)
    calEightyEight = db.Column(db.Boolean, nullable=False, default=False)
    calEightyNine = db.Column(db.Boolean, nullable=False, default=False)
    calNinety = db.Column(db.Boolean, nullable=False, default=False)
    calNinetyOne = db.Column(db.Boolean, nullable=False, default=False)
    calNinetyTwo = db.Column(db.Boolean, nullable=False, default=False)
    calNinetyThree = db.Column(db.Boolean, nullable=False, default=False)
    calNinetyFour = db.Column(db.Boolean, nullable=False, default=False)
    calNinetyFive = db.Column(db.Boolean, nullable=False, default=False)
    calNinetySix = db.Column(db.Boolean, nullable=False, default=False)
    calNinetySeven = db.Column(db.Boolean, nullable=False, default=False)
    calNinetyEight = db.Column(db.Boolean, nullable=False, default=False)
    calNinetyNine = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundred = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredOne = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredTwo = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredThree = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredFour = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredFive = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredSix = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredSeven = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredEight = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredNine = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredTen = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredEleven = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredTwelve = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredThirteen = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredFourteen = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredFifteen = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredSixteen = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredSeventeen = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredEighteen = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredNineteen = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredTwenty = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredTwentyOne = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredTwentyTwo = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredTwentyThree = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredTwentyFour = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredTwentyFive = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredTwentySix = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredTwentySeven = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredTwentyEight = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredTwentyNine = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredThirty = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredThirtyOne = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredThirtyTwo = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredThirtyThree = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredThirtyFour = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredThirtyFive = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredThirtySix = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredThirtySeven = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredThirtyEight = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredThirtyNine = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredFourty = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredFourtyOne = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredFourtyTwo = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredFourtyThree = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredFourtyFour = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredFourtyFive = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredFourtySix = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredFourtySeven = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredFourtyEight = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredFourtyNine = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredFifty = db.Column(db.Boolean, nullable=False, default=False)
    calOneHundredFiftyOne = db.Column(db.ARRAY(db.String(120)))







    userId = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship("User", back_populates="calendars")


    created_at = db.Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = db.Column(DateTime, default=datetime.datetime.utcnow)

    def to_dict(self):
        return {
            "id": self.id,
             "calOne" : self.calOne,
            "calTwo" : self.calTwo,
            "calThree" : self.calThree,
            "calFour" : self.calFour,
            "calFive" : self.calFive,
            "calSix" : self.calSix,
            "calSeven" : self.calSeven,
            "calEight" : self.calEight,
            "calNine" : self.calNine,
            "calTen" : self.calTen,
            "calEleven" : self.calEleven,
            "calTwelve" : self.calTwelve,
            "calThirteen" : self.calThirteen,
            "calFourteen" : self.calFourteen,
            "calFifteen" : self.calFifteen,
            "calSixteen" : self.calSixteen,
            "calSeventeen" : self.calSeventeen,
            "calEighteen" : self.calEighteen,
            "calNineteen" : self.calNineteen,
            "calTwenty" : self.calTwenty,
            "calTwentyOne" : self.calTwentyOne,
            "calTwentyTwo" : self.calTwentyTwo,
            "calTwentyThree" : self.calTwentyThree,
            "calTwentyFour" : self.calTwentyFour,
            "calTwentyFive" : self.calTwentyFive,
            "calTwentySix" : self.calTwentySix,
            "calTwentySeven" : self.calTwentySeven,
            "calTwentyEight" : self.calTwentyEight,
            "calTwentyNine" : self.calTwentyNine,
            "calThirty" : self.calThirty,
            "calThirtyOne" : self.calThirtyOne,
            "calThirtyTwo" : self.calThirtyTwo,
            "calThirtyThree" : self.calThirtyThree,
            "calThirtyFour" : self.calThirtyFour,
            "calThirtyFive" : self.calThirtyFive,
            "calThirtySix" : self.calThirtySix,
            "calThirtySeven" : self.calThirtySeven,
            "calThirtyEight" : self.calThirtyEight,
            "calThirtyNine" : self.calThirtyNine,
            "calFourty" : self.calFourty,
            "calFourtyOne" : self.calFourtyOne,
            "calFourtyTwo" : self.calFourtyTwo,
            "calFourtyThree" : self.calFourtyThree,
            "calFourtyFour" : self.calFourtyFour,
            "calFourtyFive" : self.calFourtyFive,
            "calFourtySix" : self.calFourtySix,
            "calFourtySeven" : self.calFourtySeven,
            "calFourtyEight" : self.calFourtyEight,
            "calFourtyNine" : self.calFourtyNine,
            "calFifty" : self.calFifty,
            "calFiftyOne" : self.calFiftyOne,
            "calFiftyTwo" : self.calFiftyTwo,
            "calFiftyThree" : self.calFiftyThree,
            "calFiftyFour" : self.calFiftyFour,
            "calFiftyFive" : self.calFiftyFive,
            "calFiftySix" : self.calFiftySix,
            "calFiftySeven" : self.calFiftySeven,
            "calFiftyEight" : self.calFiftyEight,
            "calFiftyNine" : self.calFiftyNine,
            "calSixty" : self.calSixty,
            "calSixtyOne" : self.calSixtyOne,
            "calSixtyTwo" : self.calSixtyTwo,
            "calSixtyThree" : self.calSixtyThree,
            "calSixtyFour" : self.calSixtyFour,
            "calSixtyFive" : self.calSixtyFive,
            "calSixtySix" : self.calSixtySix,
            "calSixtySeven" : self.calSixtySeven,
            "calSixtyEight" : self.calSixtyEight,
            "calSixtyNine" : self.calSixtyNine,
            "calSeventy" : self.calSeventy,
            "calSeventyOne" : self.calSeventyOne,
            "calSeventyTwo" : self.calSeventyTwo,
            "calSeventyThree" : self.calSeventyThree,
            "calSeventyFour" : self.calSeventyFour,
            "calSeventyFive" : self.calSeventyFive,
            "calSeventySix" : self.calSeventySix,
            "calSeventySeven" : self.calSeventySeven,
            "calSeventyEight" : self.calSeventyEight,
            "calSeventyNine" : self.calSeventyNine,
            "calEighty" : self.calEighty,
            "calEightyOne" : self.calEightyOne,
            "calEightyTwo" : self.calEightyTwo,
            "calEightyThree" : self.calEightyThree,
            "calEightyFour" : self.calEightyFour,
            "calEightyFive" : self.calEightyFive,
            "calEightySix" : self.calEightySix,
            "calEightySeven" : self.calEightySeven,
            "calEightyEight" : self.calEightyEight,
            "calEightyNine" : self.calEightyNine,
            "calNinety" : self.calNinety,
            "calNinetyOne" : self.calNinetyOne,
            "calNinetyTwo" : self.calNinetyTwo,
            "calNinetyThree" : self.calNinetyThree,
            "calNinetyFour" : self.calNinetyFour,
            "calNinetyFive" : self.calNinetyFive,
            "calNinetySix" : self.calNinetySix,
            "calNinetySeven" : self.calNinetySeven,
            "calNinetyEight" : self.calNinetyEight,
            "calNinetyNine" : self.calNinetyNine,
            "calOneHundred" : self.calOneHundred,
            "calOneHundredOne" : self.calOneHundredOne,
            "calOneHundredTwo" : self.calOneHundredTwo,
            "calOneHundredThree" : self.calOneHundredThree,
            "calOneHundredFour" : self.calOneHundredFour,
            "calOneHundredFive" : self.calOneHundredFive,
            "calOneHundredSix" : self.calOneHundredSix,
            "calOneHundredSeven" : self.calOneHundredSeven,
            "calOneHundredEight" : self.calOneHundredEight,
            "calOneHundredNine" : self.calOneHundredNine,
            "calOneHundredTen" : self.calOneHundredTen,
            "calOneHundredEleven" : self.calOneHundredEleven,
            "calOneHundredTwelve" : self.calOneHundredTwelve,
            "calOneHundredThirteen" : self.calOneHundredThirteen,
            "calOneHundredFourteen" : self.calOneHundredFourteen,
            "calOneHundredFifteen" : self.calOneHundredFifteen,
            "calOneHundredSixteen" : self.calOneHundredSixteen,
            "calOneHundredSeventeen" : self.calOneHundredSeventeen,
            "calOneHundredEighteen" : self.calOneHundredEighteen,
            "calOneHundredNineteen" : self.calOneHundredNineteen,
            "calOneHundredTwenty" : self.calOneHundredTwenty,
            "calOneHundredTwentyOne" : self.calOneHundredTwentyOne,
            "calOneHundredTwentyTwo" : self.calOneHundredTwentyTwo,
            "calOneHundredTwentyThree" : self.calOneHundredTwentyThree,
            "calOneHundredTwentyFour" : self.calOneHundredTwentyFour,
            "calOneHundredTwentyFive" : self.calOneHundredTwentyFive,
            "calOneHundredTwentySix" : self.calOneHundredTwentySix,
            "calOneHundredTwentySeven" : self.calOneHundredTwentySeven,
            "calOneHundredTwentyEight" : self.calOneHundredTwentyEight,
            "calOneHundredTwentyNine" : self.calOneHundredTwentyNine,
            "calOneHundredThirty" : self.calOneHundredThirty,
            "calOneHundredThirtyOne" : self.calOneHundredThirtyOne,
            "calOneHundredThirtyTwo" : self.calOneHundredThirtyTwo,
            "calOneHundredThirtyThree" : self.calOneHundredThirtyThree,
            "calOneHundredThirtyFour" : self.calOneHundredThirtyFour,
            "calOneHundredThirtyFive" : self.calOneHundredThirtyFive,
            "calOneHundredThirtySix" : self.calOneHundredThirtySix,
            "calOneHundredThirtySeven" : self.calOneHundredThirtySeven,
            "calOneHundredThirtyEight" : self.calOneHundredThirtyEight,
            "calOneHundredThirtyNine" : self.calOneHundredThirtyNine,
            "calOneHundredFourty" : self.calOneHundredFourty,
            "calOneHundredFourtyOne" : self.calOneHundredFourtyOne,
            "calOneHundredFourtyTwo" : self.calOneHundredFourtyTwo,
            "calOneHundredFourtyThree" : self.calOneHundredFourtyThree,
            "calOneHundredFourtyFour" : self.calOneHundredFourtyFour,
            "calOneHundredFourtyFive" : self.calOneHundredFourtyFive,
            "calOneHundredFourtySix" : self.calOneHundredFourtySix,
            "calOneHundredFourtySeven" : self.calOneHundredFourtySeven,
            "calOneHundredFourtyEight" : self.calOneHundredFourtyEight,
            "calOneHundredFourtyNine" : self.calOneHundredFourtyNine,
            "calOneHundredFifty" : self.calOneHundredFifty,
            "calOneHundredFiftyOne" : self.calOneHundredFiftyOne,
        }
