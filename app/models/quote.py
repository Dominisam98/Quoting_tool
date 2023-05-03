from .db import db
from sqlalchemy import DateTime
import datetime

class Quote(db.Model):
    __tablename__ = 'quotes'

    id = db.Column(db.Integer, primary_key=True)
    firstName = db.Column(db.String(40), nullable=False)
    lastName = db.Column(db.String(40), nullable=False)
    phone = db.Column(db.Integer, nullable=False)
    passengers = db.Column(db.Integer, nullable=False)
    orgin = db.Column(db.String(255), nullable=False)
    destination = db.Column(db.String(255), nullable=True)
    date= db.Column(db.DateTime(), nullable=True)
    created_at = db.Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = db.Column(DateTime, default=datetime.datetime.utcnow)




    userId = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship("User", back_populates="quotes")



    def to_dict(self):
        return {
            "id": self.id,
            "firstName": self.firstName,
            "lastName": self.lastName,
            "userId": self.userId,
            "phone": self.phone,
            "passengers": self.passengers,
            "date": self.date,
            "orgin": self.orgin,
            "destination": self.destination,
        }
