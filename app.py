# app.py
from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

# Load trek data from JSON file
def load_treks():
    try:
        with open('treks.json', 'r') as file:
            return json.load(file)
    except:
        return {"treks": []}

# Routes
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/treks', methods=['GET'])
def get_treks():
    data = load_treks()
    return jsonify(data['treks'])

@app.route('/api/treks/<int:trek_id>', methods=['GET'])
def get_trek(trek_id):
    data = load_treks()
    trek = next((trek for trek in data['treks'] if trek['id'] == trek_id), None)
    if trek:
        return jsonify(trek)
    return jsonify({'error': 'Trek not found'}), 404

@app.route('/api/treks/search', methods=['GET'])
def search_treks():
    query = request.args.get('q', '').lower()
    data = load_treks()
    filtered_treks = [
        trek for trek in data['treks']
        if query in trek['name'].lower() or query in trek['location'].lower()
    ]
    return jsonify(filtered_treks)

if __name__ == '__main__':
    app.run(debug=True)