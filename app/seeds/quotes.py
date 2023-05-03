from app.models import db, Quote


# Adds a demo user, you can add other users here if you want
def seed_quotes():

    demoQuote = Quote(
        firstName='Beach House',
        lastName='Cool',
        phone=954-512-7474,
        passengers=4,
        orgin='ny',
        destination='fl',
        userId=1
        )




    db.session.add(demoQuote)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_quotes():
    db.session.execute('TRUNCATE QUOTES RESTART IDENTITY CASCADE;')
    db.session.commit()
