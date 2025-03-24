from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, jwt_required
from werkzeug.security import generate_password_hash, check_password_hash
from models import db, User, Product, SaltContent, Review

api = Blueprint('api', __name__)

# Login endpoint
@api.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    user = User.query.filter_by(username=username).first()
    if user and check_password_hash(user.password, password):
        access_token = create_access_token(identity=str(user.id))  # Convert user.id to string
        return jsonify({'token': access_token}), 200
    return jsonify({'message': 'Invalid credentials'}), 401

# Get product details
@api.route('/products/<int:product_id>', methods=['GET'])
@jwt_required()
def get_product(product_id):
    product = Product.query.get_or_404(product_id)
    return jsonify({
        'id': product.id,
        'name': product.name,
        'price': product.price,
        'image_url': product.image_url,
        'description': product.description
    })

# Get salt content for a product
@api.route('/products/<int:product_id>/salt-content', methods=['GET'])
@jwt_required()
def get_salt_content(product_id):
    salt_content = SaltContent.query.filter_by(product_id=product_id).all()
    return jsonify([{'id': s.id, 'salt_name': s.salt_name} for s in salt_content])

# Get reviews for a product
@api.route('/products/<int:product_id>/reviews', methods=['GET'])
@jwt_required()
def get_reviews(product_id):
    reviews = Review.query.filter_by(product_id=product_id).all()
    return jsonify([{'id': r.id, 'rating': r.rating, 'comment': r.comment} for r in reviews])