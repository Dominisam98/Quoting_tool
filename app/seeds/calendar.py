from app.models import db, Calendar


# Adds a demo user, you can add other users here if you want
def seed_calendars():
    demoCalendar = Calendar(
       calOne=True,
        userId='1'
        )

    demoCalendarTwo = Calendar(
       calTwo=True,
        userId='1'
        )

    demoCalendarThree = Calendar(
      calOne=True,
        userId='1'
        )

    demoCalendarFour = Calendar(
       calFour=True,
        userId='2'
        )

    demoCalendarFive = Calendar(
       calFive=True,
        userId='2'
        )


    db.session.add(demoCalendar)
    db.session.add(demoCalendarTwo)
    db.session.add(demoCalendarThree)
    db.session.add(demoCalendarFour)
    db.session.add(demoCalendarFive)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_calendars():
    db.session.execute('TRUNCATE Calendars RESTART IDENTITY CASCADE;')
    db.session.commit()
