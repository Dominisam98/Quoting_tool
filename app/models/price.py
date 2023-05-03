from .db import db
from sqlalchemy import DateTime
import datetime

class Price(db.Model):
    __tablename__ = 'prices'

    id = db.Column(db.Integer, primary_key=True)
    varOne = db.Column(db.Integer, nullable=True)
    varTwo = db.Column(db.Integer, nullable=True)
    varThree = db.Column(db.Integer, nullable=True)
    varFour = db.Column(db.Integer, nullable=True)
    varFive = db.Column(db.Integer, nullable=True)
    varSix = db.Column(db.Integer, nullable=True)
    varSeven = db.Column(db.Integer, nullable=True)
    varEight = db.Column(db.Integer, nullable=True)
    varNine = db.Column(db.Integer, nullable=True)
    varTen = db.Column(db.Integer, nullable=True)
    varEleven = db.Column(db.Integer, nullable=True)
    varTwelve = db.Column(db.Integer, nullable=True)
    varThirteen = db.Column(db.Integer, nullable=True)
    varFourteen = db.Column(db.Integer, nullable=True)
    varFifteen = db.Column(db.Integer, nullable=True)
    varSixteen = db.Column(db.Integer, nullable=True)
    varSeventeen = db.Column(db.Integer, nullable=True)
    varEighteen = db.Column(db.Integer, nullable=True)
    varNinteen = db.Column(db.Integer, nullable=True)
    varTwenty = db.Column(db.Integer, nullable=True)
    varTwentyOne = db.Column(db.Integer, nullable=True)
    varTwentyTwo = db.Column(db.Integer, nullable=True)
    varTwentyThree = db.Column(db.Integer, nullable=True)
    varTwentyFour = db.Column(db.Integer, nullable=True)
    varTwentyFive = db.Column(db.Integer, nullable=True)
    varTwentySix = db.Column(db.Integer, nullable=True)
    varTwentySeven = db.Column(db.Integer, nullable=True)
    varTwentyEight = db.Column(db.Integer, nullable=True)
    varTwentyNine = db.Column(db.Integer, nullable=True)
    varThirty = db.Column(db.Integer, nullable=True)
    varThirtyOne = db.Column(db.Integer, nullable=True)
    varThirtyTwo = db.Column(db.Integer, nullable=True)
    varThirtyThree = db.Column(db.Integer, nullable=True)
    varThirtyFour = db.Column(db.Integer, nullable=True)
    varThirtyFive = db.Column(db.Integer, nullable=True)
    varThirtySix = db.Column(db.Integer, nullable=True)
    varThirtySeven = db.Column(db.Integer, nullable=True)
    varThirtyEigh = db.Column(db.Integer, nullable=True)
    varThirtyNine = db.Column(db.Integer, nullable=True)
    varFourty = db.Column(db.Integer, nullable=True)
    varFourtyOne = db.Column(db.Integer, nullable=True)
    varFourtyTwo = db.Column(db.Integer, nullable=True)
    varFourtyThree = db.Column(db.Integer, nullable=True)
    varFourtyFour = db.Column(db.Integer, nullable=True)
    varFourtyFive = db.Column(db.Integer, nullable=True)
    varFourtySix = db.Column(db.Integer, nullable=True)
    varFourtySeven = db.Column(db.Integer, nullable=True)
    varFourtyEight = db.Column(db.Integer, nullable=True)
    varFourtyNine = db.Column(db.Integer, nullable=True)
    varFifty = db.Column(db.Integer, nullable=True)
    varFiftyOne = db.Column(db.Integer, nullable=True)
    varFiftyTwo = db.Column(db.Integer, nullable=True)
    varFiftyThree = db.Column(db.Integer, nullable=True)
    varFiftyFour = db.Column(db.Integer, nullable=True)
    varFiftyFive = db.Column(db.Integer, nullable=True)
    varFiftySix = db.Column(db.Integer, nullable=True)
    varFiftySeven = db.Column(db.Integer, nullable=True)
    varFiftyEight = db.Column(db.Integer, nullable=True)
    created_at = db.Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = db.Column(DateTime, default=datetime.datetime.utcnow)




    userId = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship("User", back_populates="prices")



    def to_dict(self):
        return {
            "id": self.id,
            "varOne" : self.varOne,
            "varTwo" : self.varTwo,
            "varThree" : self.varThree,
            "varFour" : self.varFour,
            "varFive" : self.varFive,
            "varSix" : self.varSix,
            "varSeven" : self.varSeven,
            "varEight" : self.varEight,
            "varNine" : self.varNine,
            "varTen" : self.varTen,
            "varEleven" : self.varEleven,
            "varTwelve" : self.varTwelve,
            "varThirteen" : self.varThirteen,
            "varFourteen" : self.varFourteen,
            "varFifteen" : self.varFifteen,
            "varSixteen" : self.varSixteen,
            "varSeventeen" : self.varSeventeen,
            "varEighteen" : self.varEighteen,
            "varNinteen" : self.varNinteen,
            "varTwenty" : self.varTwenty,
            "varTwentyOne" : self.varTwentyOne,
            "varTwentyTwo" : self.varTwentyTwo,
            "varTwentyThree" : self.varTwentyThree,
            "varTwentyFour" : self.varTwentyFour,
            "varTwentyFive" : self.varTwentyFive,
            "varTwentySix" : self.varTwentySix,
            "varTwentySeven" : self.varTwentySeven,
            "varTwentyEight" : self.varTwentyEight,
            "varTwentyNine" : self.varTwentyNine,
            "varThirty" : self.varThirty,
            "varThirtyOne" : self.varThirtyOne,
            "varThirtyTwo" : self.varThirtyTwo,
            "varThirtyThree" : self.varThirtyThree,
            "varThirtyFour" : self.varThirtyFour,
            "varThirtyFive" : self.varThirtyFive,
            "varThirtySix" : self.varThirtySix,
            "varThirtySeven" : self.varThirtySeven,
            "varThirtyEight" : self.varThirtyEigh,
            "varThirtyNine" : self.varThirtyNine,
            "varFourty" : self.varFourty,
            "varFourtyOne" : self.varFourtyOne,
            "varFourtyTwo" : self.varFourtyTwo,
            "varFourtyThree" : self.varFourtyThree,
            "varFourtyFour" : self.varFourtyFour,
            "varFourtyFive" : self.varFourtyFive,
            "varFourtySix" : self.varOne,
            "varFourtySeven" : self.varFourtySeven,
            "varFourtyEight" : self.varFourtyEight,
            "varFourtyNine" : self.varFourtyNine,
            "varFifty" : self.varFifty,
            "varFiftyOne" : self.varFiftyOne,
            "varFiftyTwo" : self.varFiftyTwo,
            "varFiftyThree" : self.varFiftyThree,
            "varFiftyFour" : self.varFiftyFour,
            "varFiftyFive" : self.varFiftyFive,
            "varFiftySix" : self.varFiftySix,
            "varFiftySeven" : self.varFiftySeven,
            "varFiftyEight" : self.varFiftyEight

        }
