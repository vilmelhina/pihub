from flask import Flask, jsonify
from climate import Climate

app = Flask(__name__)
climate = Climate()

@app.route('/temperature', methods=["GET"])
def get_temperature():
    return jsonify(climate.get_temperature())

@app.route('/pressure', methods=["GET"])
def get_pressure():
    return jsonify(climate.get_pressure())

@app.route('/humidity', methods=["GET"])
def get_humidity():
    return jsonify(climate.get_humidity())