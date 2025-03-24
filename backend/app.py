from flask import Flask
from flask_cors import CORS  # Import CORS
from flask_jwt_extended import JWTManager
from config import Config
from models import db
from routes import api

app = Flask(__name__)
app.config.from_object(Config)

# Enable CORS for the app, allowing requests from http://localhost:3000
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

# Initialize extensions
db.init_app(app)
jwt = JWTManager(app)

# Register blueprints
app.register_blueprint(api, url_prefix='/api')

# Create database tables
with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True, port=5000)