from flask import Blueprint, jsonify, request
from models import Product, ProductUse, ProductSideEffect, ProductWorkings, Review, Faq
from flask_jwt_extended import jwt_required
from extensions import db, cache  # Import from extensions
from models import User  # Import User model
from werkzeug.security import check_password_hash  # Import password hash checker
from flask_jwt_extended import create_access_token  # Import JWT token creator

api = Blueprint('api', __name__)

# login route
# Login endpoint
@api.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    user = User.query.filter_by(username=username).first()
    if user and check_password_hash(user.password, password):
        access_token = create_access_token(identity=str(user.id))
        return jsonify({'token': access_token}), 200
    return jsonify({'message': 'Invalid credentials'}), 401


@api.route('/products/<int:product_id>', methods=['GET'])
@jwt_required()
@cache.cached(timeout=300)  # Cache for 5 minutes
def get_product(product_id):
    product = Product.query.get_or_404(product_id)
    product_data = {
        "id": product.id,
        "name": product.name,
        "price": product.price,
        "othername": product.othername,
        "chemicalformula": product.chemicalformula,
        "company": product.company,
        "offerpercent": product.offerpercent,
        "image_url": product.image_url,
        "description": product.description,
        "uses": [{"id": u.id, "use_text": u.use_text} for u in product.uses],
        "side_effects": [{"id": s.id, "side_effect_text": s.side_effect_text} for s in product.side_effects],
        "how_it_works": [{"id": w.id, "working_text": w.working_text} for w in product.workings],
        "reviews": [{"id": r.id, "rating": r.rating, "comment": r.comment} for r in product.reviews],
        "faqs": [{"id": f.id, "question": f.question, "answer": f.answer} for f in product.faqs]
    }
    return jsonify(product_data)

@api.route('/products', methods=['GET'])
@jwt_required()
@cache.cached(timeout=300)  # Cache for 5 minutes
def get_all_products():
    products = Product.query.all()
    products_data = [{
        "id": p.id,
        "name": p.name,
        "price": p.price,
        "othername": p.othername,
        "chemicalformula": p.chemicalformula,
        "company": p.company,
        "offerpercent": p.offerpercent,
        "image_url": p.image_url,
        "description": p.description,
        "uses": [{"id": u.id, "use_text": u.use_text} for u in p.uses],
        "side_effects": [{"id": s.id, "side_effect_text": s.side_effect_text} for s in p.side_effects],
        "how_it_works": [{"id": w.id, "working_text": w.working_text} for w in p.workings],
        "reviews": [{"id": r.id, "rating": r.rating, "comment": r.comment} for r in p.reviews],
        "faqs": [{"id": f.id, "question": f.question, "answer": f.answer} for f in p.faqs]
    } for p in products]
    return jsonify(products_data)