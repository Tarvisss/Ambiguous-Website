from flask import Flask, request, render_template
from random import randint, choice, sample
# from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)


app.config['SECRET_KEY'] = "TarvisTarTar"
# debug = DebugToolbarExtension(app)



@app.route("/")
def display_home():

    return render_template('base.html')



@app.route("/about")
def display_about():

    return render_template('about.html')



@app.route("/contact")
def display_contact():

    return render_template('contact.html')



@app.route("/shows")
def display_shows():

    return render_template('shows.html')



@app.route("/shop")
def display_shop():

    return render_template('shop.html')