from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DateTimeField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Quote

class NewQuoteForm(FlaskForm):
    firstName = StringField('firstName', validators=[DataRequired()])
    lastName = StringField('lastName', validators=[DataRequired()])
    phone = IntegerField('phone', validators=[DataRequired()])
    orgin = StringField('orgin', validators=[DataRequired()])
    destination = StringField('destination', validators=[DataRequired()])
    passengers = IntegerField('passengers')
    date = DateTimeField('date', validators=[DataRequired()])
    userId = IntegerField('userId', validators=[DataRequired()])


# //organization  either or first name datetime email autopopulate routing from and
