import flask
from flask_cors import CORS

app = flask.Flask('server')

CORS(app)

app.run()