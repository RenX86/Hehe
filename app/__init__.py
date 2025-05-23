from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager
from flask_bcrypt import Bcrypt
from flask_mail import Mail
from config import Config

db = SQLAlchemy()
migrate = Migrate()
login_manager = LoginManager()
login_manager.login_view = 'auth.login'  # Redirects unauthenticated users to login page
bcrypt = Bcrypt()
mail = Mail()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    migrate.init_app(app, db)
    login_manager.init_app(app)
    bcrypt.init_app(app)
    mail.init_app(app)

    from app.models.user import User  # Move import here
    from app.routes import auth, main  # Import blueprints
    app.register_blueprint(auth.bp, url_prefix='/auth')
    app.register_blueprint(main.bp)

    return app
