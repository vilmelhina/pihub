from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
from climate import Climate

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

climate = Climate()

@app.route('/temperature', methods=["GET"])
@cross_origin()
def get_temperature():
    return jsonify(climate.get_temperature())

@app.route('/pressure', methods=["GET"])
@cross_origin()
def get_pressure():
    return jsonify(climate.get_pressure())

@app.route('/humidity', methods=["GET"])
@cross_origin()
def get_humidity():
    return jsonify(climate.get_humidity())