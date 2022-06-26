from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(250), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.user}>'

    def serialize(self):
        return {
            "id": self.id,
            "user": self.user,
            # do not serialize the password, its a security breach
        }

class Dish(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    price = db.Column(db.Float(4), nullable=False)
    name = db.Column(db.String(120), unique=True, nullable=False)
    ingredients = db.Column(db.String(240), unique=True, nullable=False)
    vegetarian = db.Column(db.Boolean)
    vegan = db.Column(db.Boolean)
    special = db.Column(db.Boolean)
    img_url = db.Column(db.String(220), unique=False, nullable=True)

    
    def serialize(self):   
        return{
        "id": self.id,
        "price": self.price,
        "name": self.name,
        "ingredients": self.ingredients,
        "vegetarian": self.vegetarian,
        "vegan": self.vegan,
        "special": self.special,
        "img_url": self.img_url,
        }
