"""create every  table

Revision ID: 15d2b703eaf4
Revises:
Create Date: 2023-01-24 12:48:58.411380

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '15d2b703eaf4'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('prices',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('varOne', sa.Integer(), nullable=True),
    sa.Column('varTwo', sa.Integer(), nullable=True),
    sa.Column('varThree', sa.Integer(), nullable=True),
    sa.Column('varFour', sa.Integer(), nullable=True),
    sa.Column('varFive', sa.Integer(), nullable=True),
    sa.Column('varSix', sa.Integer(), nullable=True),
    sa.Column('varSeven', sa.Integer(), nullable=True),
    sa.Column('varEight', sa.Integer(), nullable=True),
    sa.Column('varNine', sa.Integer(), nullable=True),
    sa.Column('varTen', sa.Integer(), nullable=True),
    sa.Column('varEleven', sa.Integer(), nullable=True),
    sa.Column('varTwelve', sa.Integer(), nullable=True),
    sa.Column('varThirteen', sa.Integer(), nullable=True),
    sa.Column('varFourteen', sa.Integer(), nullable=True),
    sa.Column('varFifteen', sa.Integer(), nullable=True),
    sa.Column('varSixteen', sa.Integer(), nullable=True),
    sa.Column('varSeventeen', sa.Integer(), nullable=True),
    sa.Column('varEighteen', sa.Integer(), nullable=True),
    sa.Column('varNinteen', sa.Integer(), nullable=True),
    sa.Column('varTwenty', sa.Integer(), nullable=True),
    sa.Column('varTwentyOne', sa.Integer(), nullable=True),
    sa.Column('varTwentyTwo', sa.Integer(), nullable=True),
    sa.Column('varTwentyThree', sa.Integer(), nullable=True),
    sa.Column('varTwentyFour', sa.Integer(), nullable=True),
    sa.Column('varTwentyFive', sa.Integer(), nullable=True),
    sa.Column('varTwentySix', sa.Integer(), nullable=True),
    sa.Column('varTwentySeven', sa.Integer(), nullable=True),
    sa.Column('varTwentyEight', sa.Integer(), nullable=True),
    sa.Column('varTwentyNine', sa.Integer(), nullable=True),
    sa.Column('varThirty', sa.Integer(), nullable=True),
    sa.Column('varThirtyOne', sa.Integer(), nullable=True),
    sa.Column('varThirtyTwo', sa.Integer(), nullable=True),
    sa.Column('varThirtyThree', sa.Integer(), nullable=True),
    sa.Column('varThirtyFour', sa.Integer(), nullable=True),
    sa.Column('varThirtyFive', sa.Integer(), nullable=True),
    sa.Column('varThirtySix', sa.Integer(), nullable=True),
    sa.Column('varThirtySeven', sa.Integer(), nullable=True),
    sa.Column('varThirtyEigh', sa.Integer(), nullable=True),
    sa.Column('varThirtyNine', sa.Integer(), nullable=True),
    sa.Column('varFourty', sa.Integer(), nullable=True),
    sa.Column('varFourtyOne', sa.Integer(), nullable=True),
    sa.Column('varFourtyTwo', sa.Integer(), nullable=True),
    sa.Column('varFourtyThree', sa.Integer(), nullable=True),
    sa.Column('varFourtyFour', sa.Integer(), nullable=True),
    sa.Column('varFourtyFive', sa.Integer(), nullable=True),
    sa.Column('varFourtySix', sa.Integer(), nullable=True),
    sa.Column('varFourtySeven', sa.Integer(), nullable=True),
    sa.Column('varFourtyEight', sa.Integer(), nullable=True),
    sa.Column('varFourtyNine', sa.Integer(), nullable=True),
    sa.Column('varFifty', sa.Integer(), nullable=True),
    sa.Column('varFiftyOne', sa.Integer(), nullable=True),
    sa.Column('varFiftyTwo', sa.Integer(), nullable=True),
    sa.Column('varFiftyThree', sa.Integer(), nullable=True),
    sa.Column('varFiftyFour', sa.Integer(), nullable=True),
    sa.Column('varFiftyFive', sa.Integer(), nullable=True),
    sa.Column('varFiftySix', sa.Integer(), nullable=True),
    sa.Column('varFiftySeven', sa.Integer(), nullable=True),
    sa.Column('varFiftyEight', sa.Integer(), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.Column('userId', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('quotes',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('firstName', sa.String(length=40), nullable=False),
    sa.Column('lastName', sa.String(length=40), nullable=False),
    sa.Column('phone', sa.Integer(), nullable=False),
    sa.Column('passengers', sa.Integer(), nullable=False),
    sa.Column('orgin', sa.String(length=255), nullable=False),
    sa.Column('destination', sa.String(length=255), nullable=True),
    sa.Column('date', sa.DateTime(), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.Column('userId', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('spots',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=40), nullable=False),
    sa.Column('price', sa.Integer(), nullable=False),
    sa.Column('address', sa.String(length=255), nullable=False),
    sa.Column('city', sa.String(length=255), nullable=False),
    sa.Column('state', sa.String(length=255), nullable=False),
    sa.Column('country', sa.String(length=255), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.Column('userId', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('spots')
    op.drop_table('quotes')
    op.drop_table('prices')
    op.drop_table('users')
    # ### end Alembic commands ###
