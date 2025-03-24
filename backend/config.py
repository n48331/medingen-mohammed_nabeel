# Configuration for Flask app
class Config:
    SECRET_KEY = "your-secret-key"
    SQLALCHEMY_DATABASE_URI = "mysql+mysqlconnector://root:@localhost/medingen_db"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY = "your-jwt-secret-key"