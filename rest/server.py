from flask import Flask
from flask_restful import Resource, Api
from api.note import Note

from db.tables import rebuild_tables

app = Flask(__name__)
api = Api(app)

api.add_resource(Note, '/note') # reserve book endpoint

if __name__ == '__main__':
    rebuild_tables()
    app.run(debug=True)