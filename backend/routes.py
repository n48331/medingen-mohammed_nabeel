from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, jwt_required
from werkzeug.security import generate_password_hash, check_password_hash
from models import db, User, Product, ProductUse, ProductSideEffect, Review, ProductWorkings, Faq

api = Blueprint('api', __name__)

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
# Get all products
@api.route('/products', methods=['GET'])
@jwt_required()
def get_all_products():
    products = Product.query.all()
    return jsonify([{
        'id': p.id,
        'name': p.name,
        'price': p.price,
        'othername': p.othername,
        'chemicalformula': p.chemicalformula,
        'company': p.company,
        'offerpercent': p.offerpercent,
        'image_url': p.image_url,
        'description': p.description,
        'reviews': [{'id': r.id, 'rating': r.rating, 'comment': r.comment} for r in (p.reviews or [])],
        'faqs': [{'id': f.id, 'question': f.question, 'answer': f.answer} for f in (p.faqs or [])]
    } for p in products])
# Get product details
@api.route('/products/<int:product_id>', methods=['GET'])
@jwt_required()
def get_product(product_id):
    product = Product.query.get_or_404(product_id)
    uses = [{'id': u.id, 'use_text': u.use_text} for u in product.uses]
    side_effects = [{'id': s.id, 'side_effect_text': s.side_effect_text} for s in product.side_effects]
    how_it_works = [{'id': w.id, 'working_text': w.working_text} for w in product.workings]
    reviews = [{'id': r.id, 'rating': r.rating, 'comment': r.comment} for r in product.reviews]
    faq = [{'id': f.id, 'question': f.question, 'answer': f.answer} for f in product.faqs]
    return jsonify({
        'id': product.id,
        'name': product.name,
        'price': product.price,
        'othername': product.othername,
        'chemicalformula': product.chemicalformula,
        'company': product.company,
        'offerpercent': product.offerpercent,
        'image_url': product.image_url,
        'description': product.description,
        'uses': uses,
        'side_effects': side_effects,
        'how_it_works': how_it_works,
        'reviews': reviews,
        'faq': faq
    })

# Get uses for a product
@api.route('/products/<int:product_id>/uses', methods=['GET'])
@jwt_required()
def get_product_uses(product_id):
    uses = ProductUse.query.filter_by(product_id=product_id).all()
    return jsonify([{'id': u.id, 'use_text': u.use_text} for u in uses])

# Get side effects for a product
@api.route('/products/<int:product_id>/side-effects', methods=['GET'])
@jwt_required()
def get_product_side_effects(product_id):
    side_effects = ProductSideEffect.query.filter_by(product_id=product_id).all()
    return jsonify([{'id': s.id, 'side_effect_text': s.side_effect_text} for s in side_effects])

# Get how it works for a product
@api.route('/products/<int:product_id>/how-it-works', methods=['GET'])
@jwt_required()
def get_product_workings(product_id):
    workings = ProductWorkings.query.filter_by(product_id=product_id).all()
    return jsonify([{'id': w.id, 'working_text': w.working_text} for w in workings])

# Get reviews for a product
@api.route('/products/<int:product_id>/reviews', methods=['GET'])
@jwt_required()
def get_reviews(product_id):
    reviews = Review.query.filter_by(product_id=product_id).all()
    return jsonify([{'id': r.id, 'rating': r.rating, 'comment': r.comment} for r in reviews])

@api.route('/products/<int:product_id>/faq', methods=['GET'])
@jwt_required()
def get_faq(product_id):
    faq = Faq.query.filter_by(product_id=product_id).all()
    return jsonify([{'id': f.id, 'question': f.question, 'answer': f.answer} for f in faq])