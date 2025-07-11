from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)


PRODUCTS_FILE = 'products.json'

def load_products():
    """Cargar productos desde el archivo JSON"""
    if os.path.exists(PRODUCTS_FILE):
        with open(PRODUCTS_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    return []

def save_products(products):
    """Guardar productos en el archivo JSON"""
    with open(PRODUCTS_FILE, 'w', encoding='utf-8') as f:
        json.dump(products, f, ensure_ascii=False, indent=2)

@app.route('/products', methods=['GET'])
def get_products():
    """Obtener todos los productos"""
    products = load_products()
    return jsonify(products)

@app.route('/products', methods=['POST'])
def create_product():
    """Crear un nuevo producto"""
    data = request.get_json()
    
    if not data or 'name' not in data or 'price' not in data or 'image' not in data:
        return jsonify({'error': 'Faltan datos requeridos: name, price, image'}), 400
    
    products = load_products()
    
    new_id = max([p.get('id', 0) for p in products], default=0) + 1
    
    new_product = {
        'id': new_id,
        'name': data['name'],
        'price': data['price'],
        'image': data['image']
    }
    
    products.append(new_product)
    save_products(products)
    
    return jsonify(new_product), 201

@app.route('/products/<int:product_id>', methods=['DELETE'])
def delete_product(product_id):
    """Eliminar un producto"""
    products = load_products()
    products = [p for p in products if p.get('id') != product_id]
    save_products(products)
    return jsonify({'message': 'Producto eliminado'}), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)