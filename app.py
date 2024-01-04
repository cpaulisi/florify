import sys
import logging
import secrets
from flask import Flask, session, send_from_directory
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__, static_folder="florify/dist")
app.secret_key = secrets.token_hex(16)
app.logger.addHandler(logging.StreamHandler(sys.stdout))
app.logger.setLevel(logging.INFO)


# Static Files
@app.route("/")
def index():
    session.clear()
    return app.send_static_file("index.html")
 
@app.route("/favicon.ico")

def favicon():
    return app.send_static_file('favicon.ico')

@app.route("/assets/<path:path>")
def assets(path):
    return send_from_directory("florify/dist/assets", path)

@app.route("/<path:path>")
def root(path):
    return send_from_directory("florify/dist", path)