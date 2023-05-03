# Start with the python:3.9 image
FROM node:12 AS build-stage

WORKDIR /react-app
COPY react-app/. .

# Set the following enviroment variables
#
# REACT_APP_BASE_URL -> Your deployment URL
# FLASK_APP -> entry point to your flask app
# FLASK_ENV -> Tell flask to use the production server
# SQLALCHEMY_ECHO -> Just set it to true
RUN npm install
RUN npm run build

FROM python:3.9

# Set the directory for upcoming commands to /var/www

# Copy all the files from your repo to the working directory
ENV REACT_APP_BASE_URL=https://craft-charter-prototype.herokuapp.com/

# Copy the built react app (it's built for us) from the
# /react-app/build/ directory into your flasks app/static directory
ENV FLASK_APP=app
ENV FLASK_ENV=production
ENV SQLALCHEMY_ECHO=True

EXPOSE 8000

WORKDIR /var/www
COPY . .
COPY --from=build-stage /react-app/build/* app/static/

# Run the next two python install commands with PIP
# install -r requirements.txt
# install psycopg2
RUN pip install -r requirements.txt
RUN pip install psycopg2


# Start the flask environment by setting our
# closing command to gunicorn app:app
CMD gunicorn app:app
