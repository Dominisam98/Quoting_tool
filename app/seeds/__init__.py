from flask.cli import AppGroup
from .users import seed_users, undo_users
from .quotes import seed_quotes, undo_quotes
from .spots import seed_spots, undo_spots
from .prices import seed_prices, undo_prices
from .calendar import seed_calendars, undo_calendars
# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    # Add other seed functions here
    seed_quotes()
    seed_spots()
    seed_prices()
    seed_calendars()


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_quotes()
    undo_spots()
    undo_prices()
    undo_calendars()
    # Add other undo functions here
