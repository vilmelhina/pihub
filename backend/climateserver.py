import os
from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS, cross_origin
from climate import Climate

app = Flask(__name__, static_folder='../PiHubWeb/build')
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

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')