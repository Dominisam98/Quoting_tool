import os
from flask import Flask, render_template, request, session, redirect
from flask_cors import CORS
from flask_migrate import Migrate
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_login import LoginManager
from .models import db, User
from .api.user_routes import user_routes
from .api.auth_routes import auth_routes
from .api.quote_routes import quote_routes
from .api.spot_routes import spot_routes
from .api.price_routes import price_routes
from .api.calendar_routes import calendar_routes
from .seeds import seed_commands

from .config import Config

app = Flask(__name__)
# app.config.update(dict(
#     DEBUG = True,
#     MAIL_SERVER = 'smtp.gmail.com',
#     MAIL_PORT = 587,
#     MAIL_USE_TLS = True,
#     MAIL_USE_SSL = False,
#     MAIL_USERNAME = 'dominique98sam@gmail.com',
#     MAIL_PASSWORD = 'Anthony0318!',
# ))



# Setup login manager
login = LoginManager(app)
login.login_view = 'auth.unauthorized'


@login.user_loader
def load_user(id):
    return User.query.get(int(id))


# Tell flask about our seed commands
app.cli.add_command(seed_commands)

app.config.from_object(Config)

# mail = Mail(app)

#This keeps our website only on HTTPS servers rather than HTTP because it is more secure, it sends information over encrypted
app.config.update(
    SESSION_COOKIE_SECURE=True,
     SESSION_COOKIE_HTTPONLY=True,
    SESSION_COOKIE_SAMESITE='Lax',
)

app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(auth_routes, url_prefix='/api/auth')
# app.register_blueprint(quote_routes, url_prefix='/api/quotes')
app.register_blueprint(spot_routes, url_prefix="/api/quotes")
app.register_blueprint(price_routes, url_prefix="/api/prices")
app.register_blueprint(calendar_routes, url_prefix="/api/calendars")
db.init_app(app)
Migrate(app, db)

# Application Security
CORS(app)

#This protects us from hackers using cookies to get logins from our website and stealing information

csrf = CSRFProtect()

# Since we are deploying with Docker and Flask,
# we won't be using a buildpack when we deploy to Heroku.
# Therefore, we need to make sure that in production any
# request made over http is redirected to https.
# Well.........
@app.before_request
def https_redirect():
    if os.environ.get('FLASK_ENV') == 'production':
        if request.headers.get('X-Forwarded-Proto') == 'http':
            url = request.url.replace('http://', 'https://', 1)
            code = 301
            return redirect(url, code=code)


@app.after_request
def inject_csrf_token(response):
    response.set_cookie(
        'csrf_token',
        generate_csrf(),
        secure=True if os.environ.get('FLASK_ENV') == 'production' else False,
        samesite='Strict' if os.environ.get(
            'FLASK_ENV') == 'production' else None,
        httponly=True)
    return response


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    if path == 'favicon.ico':
        return app.send_static_file('favicon.ico')
    return app.send_static_file('index.html')
