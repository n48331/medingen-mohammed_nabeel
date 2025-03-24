from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# User model for authentication
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)

# Product model
class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Float, nullable=False)
    othername = db.Column(db.String(100))
    chemicalformula = db.Column(db.String(100))
    company = db.Column(db.String(100))
    offerpercent = db.Column(db.Integer)
    image_url = db.Column(db.String(255))
    description = db.Column(db.Text)
    uses = db.relationship('ProductUse', backref='product', lazy=True)  # Relationship to ProductUse
    side_effects = db.relationship('ProductSideEffect', backref='product', lazy=True)  
    workings = db.relationship('ProductWorkings', backref='product', lazy=True)
    reviews = db.relationship('Review', backref='product', lazy=True) 
    faqs = db.relationship('Faq', backref='product', lazy=True)

# ProductUse model (separate table for uses)
class ProductUse(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=False)
    use_text = db.Column(db.Text, nullable=False)  # Store each use as a string

# ProductSideEffect model (separate table for side effects)
class ProductSideEffect(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=False)
    side_effect_text = db.Column(db.Text, nullable=False)  # Store each side effect as a string

class ProductWorkings(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=False)
    working_text = db.Column(db.Text, nullable=False)  
# Review model (unchanged)
class Review(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    comment = db.Column(db.Text)
    
class Faq(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=False)
    question = db.Column(db.String(255), nullable=False)
    answer = db.Column(db.Text, nullable=False)