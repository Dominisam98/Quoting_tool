from app.models import db, Price


# Adds a demo user, you can add other users here if you want
def seed_prices():
    demoPrice = Price(

        varOne=100,
        varTwo=200,
        varThree=300,
        varFour=400,
        varFive=500,
        varSix=600,
        varSeven=700,
        varEight=800,
        varNine=900,
        varTen=3900,

        userId=1
        )



    db.session.add(demoPrice)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_prices():
    db.session.execute('TRUNCATE prices RESTART IDENTITY CASCADE;')
    db.session.commit()
