from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from config import Config
from extensions import db, cache  # Import from extensions
import os
app = Flask(__name__)
app.config.from_object(Config)

# Initialize extensions with app
db.init_app(app)
cache.init_app(app, config={'CACHE_TYPE': 'simple'})  # Simple in-memory cache
jwt = JWTManager(app)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

# Import routes after app is fully initialized
from routes import api
app.register_blueprint(api, url_prefix='/api')

if __name__ == '__main__':
    app.run(debug=True)