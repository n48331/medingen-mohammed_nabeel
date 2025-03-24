from app import app, db
from models import User, Product, SaltContent, Review
from werkzeug.security import generate_password_hash

try:
    with app.app_context():
        # Clear existing data (optional, for testing purposes)
        db.drop_all()
        db.create_all()

        # Add a user
        user = User(username='admin', password=generate_password_hash('password'))
        db.session.add(user)
        db.session.commit()
        print("User added successfully")

        # Add a product
        product = Product(
            name='Dolo 650',
            price=30.00,
            image_url='/assets/dolo-650.png',
            description='Dolo 650 is used to relieve pain and reduce fever.'
        )
        db.session.add(product)
        db.session.commit()
        print(f"Product added successfully with ID: {product.id}")

        # Add salt content
        salt = SaltContent(product_id=product.id, salt_name='Paracetamol 650mg')
        db.session.add(salt)
        print("Salt content added to session")

        # Add a review
        review = Review(product_id=product.id, rating=4, comment='Works well for fever!')
        db.session.add(review)
        print("Review added to session")

        # Final commit
        db.session.commit()
        print("Final commit successful")

    print("Database seeded successfully!")
except Exception as e:
    print(f"An error occurred: {str(e)}")
    db.session.rollback()