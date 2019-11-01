import numpy as np
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from flask_jwt_extended import (create_access_token, create_refresh_token,
                                jwt_required, jwt_refresh_token_required, get_jwt_identity, get_raw_jwt)
from flask_jwt_extended import JWTManager

app = Flask(__name__)

app.config['JWT_SECRET_KEY'] = 'jwt-secret-string'

CORS(app)
jwt = JWTManager(app)


@app.route('/login', methods=['POST'])
def login():
    email = request.form['email']
    print(email)
    password = request.form['password']
    print(password)
    access_token = create_access_token(identity=email)
    refresh_token = create_refresh_token(identity=email)
    res = {
        'token': access_token
    }
    return jsonify(res)


if __name__ == "__main__":
    app.run(debug=True)
