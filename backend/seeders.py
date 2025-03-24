from app import app, db
from models import User, Product, ProductUse, ProductSideEffect, Review, ProductWorkings, Faq
from werkzeug.security import generate_password_hash

def seed_database():
    with app.app_context():
        # Clear existing data and recreate tables
        db.drop_all()
        db.create_all()

        # Seed users table
        user = User(
            username='admin',
            password=generate_password_hash('password')
        )
        db.session.add(user)
        db.session.commit()
        print("Seeded users table")

        # Seed products table
        products = [
            Product(
            name='Dolo 650',
            price=30.00,
            othername='Acetaminophen 650',
            chemicalformula='C8H9NO2',
            company='Micro Labs',
            offerpercent=10,
            image_url='/assets/dolo-650.png',
            description='Dolo 650 is used to relieve pain and reduce fever.'
            ),
            Product(
            name='Crocin Advance',
            price=25.50,
            othername='Paracetamol 500',
            chemicalformula='C8H9NO2',
            company='GSK',
            offerpercent=15,
            image_url='/assets/crocin-advance.png',
            description='Crocin Advance provides fast relief from fever and mild pain.'
            ),
            Product(
            name='Paracetamol 500',
            price=20.00,
            othername='Generic Paracetamol',
            chemicalformula='C8H9NO2',
            company='Cipla',
            offerpercent=5,
            image_url='/assets/paracetamol-500.png',
            description='Paracetamol 500 is a generic pain reliever and fever reducer.'
            )
        ]
        db.session.add_all(products)
        db.session.commit()
        print(f"Seeded products table with {len(products)} products")

        # Seed product_uses table
        uses_data = {
            1: [
                "Relieves mild to moderate pain.",
                "Reduces fever effectively."
            ],
            2: [
                "Quick relief from fever.",
                "Helps with headache and body ache."
            ],
            3: [
                "General pain relief.",
                "Fever reduction."
            ]
        }
        for product in products:
            for use_text in uses_data[product.id]:
                product_use = ProductUse(
                    product_id=product.id,
                    use_text=use_text
                )
                db.session.add(product_use)
        db.session.commit()
        print("Seeded product_uses table")

        # Seed product_side_effects table
        side_effects_data = {
            1: [
                "Nausea in some cases.",
                "Rare allergic reactions."
            ],
            2: [
                "Upset stomach possible.",
                "Drowsiness in rare cases."
            ],
            3: [
                "Mild stomach irritation.",
                "Skin rash in rare instances."
            ]
        }
        for product in products:
            for side_effect_text in side_effects_data[product.id]:
                product_side_effect = ProductSideEffect(
                    product_id=product.id,
                    side_effect_text=side_effect_text
                )
                db.session.add(product_side_effect)
        db.session.commit()
        print("Seeded product_side_effects table")

        # Seed product_workings table
        workings_data = {
            1: [
                "Blocks pain signals in the brain.",
                "Reduces body temperature by acting on the hypothalamus."
            ],
            2: [
                "Inhibits prostaglandin production.",
                "Lowers fever through central nervous system action."
            ],
            3: [
                "Acts as an analgesic for pain relief.",
                "Regulates body temperature."
            ]
        }
        for product in products:
            for working_text in workings_data[product.id]:
                product_working = ProductWorkings(
                    product_id=product.id,
                    working_text=working_text
                )
                db.session.add(product_working)
        db.session.commit()
        print("Seeded product_workings table")

        # Seed reviews table
        reviews_data = {
            1: [
                Review(product_id=1, rating=4, comment='Works well for fever!'),
                Review(product_id=1, rating=5, comment='Very effective.')
            ],
            2: [
                Review(product_id=2, rating=5, comment='Fast and effective.'),
                Review(product_id=2, rating=4, comment='Good for headaches.')
            ],
            3: [
                Review(product_id=3, rating=3, comment='Good for the price.'),
                Review(product_id=3, rating=4, comment='Decent pain relief.')
            ]
        }
        for product in products:
            for review in reviews_data[product.id]:
                db.session.add(review)
        db.session.commit()
        print("Seeded reviews table")

        # Seed faqs table
        faqs_data = {
            1: [
                Faq(product_id=1, question='Is Dolo 650 safe for children?', answer='Dolo 650 is safe for children above 6 years.'),
                Faq(product_id=1, question='Can I take Dolo 650 on an empty stomach?', answer='It is recommended to take Dolo 650 with food.')
            ],
            2: [
                Faq(product_id=2, question='Is Crocin Advance safe for children?', answer='Crocin Advance is safe for children above 12 years.'),
                Faq(product_id=2, question='Can I take Crocin Advance with other medications?', answer='Consult your doctor before taking Crocin Advance with other medications.')
            ],
            3: [
                Faq(product_id=3, question='Is Paracetamol 500 safe for pregnant women?', answer='Paracetamol 500 is safe for pregnant women.'),
                Faq(product_id=3, question='Can I take Paracetamol 500 with alcohol?', answer='It is not recommended to take Paracetamol 500 with alcohol.')
            ]
        }
        for product in products:
            for faq in faqs_data[product.id]:
                db.session.add(faq)
        db.session.commit()
        print("Seeded faqs table")
                
        print("Database seeding completed successfully!")

if __name__ == '__main__':
    seed_database()