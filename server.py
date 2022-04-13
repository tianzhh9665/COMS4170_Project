from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
app = Flask(__name__)

data = {}

# ROUTES
@app.route('/')
def welcome():
   pass

@app.route('/view/<id>')
def view(id=None):
    pass

@app.route('/search_result', methods=['GET'])
def search_result():
    pass

if __name__ == '__main__':
   app.run(debug = True)




