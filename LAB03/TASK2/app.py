from flask import Flask, request
app = Flask(__name__)
 @app.route("/", methods=['POST'])
 def hello_world():
 return "I received email:" + request.form['email'] + (' and content: ') + request.form['content']