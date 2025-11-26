from flask import Flask, render_template
import json  # NEW

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html", active_page="home")

@app.route("/chatbot")
def chatbot():
    return render_template("chatbot.html", active_page="chatbot")

@app.route("/diseases")
def diseases():
    # Load JSON data for diseases
    with open("static/data/symptoms.json", "r") as file:
        disease_data = json.load(file)
    
    return render_template("diseases.html", active_page="diseases", data=disease_data)

@app.route("/tips")
def tips():
    return render_template("tips.html", active_page="tips")

@app.route("/emergency")
def emergency():
    return render_template("emergency.html", active_page="emergency")

@app.route("/tools")
def tools():
    return render_template("tools.html", active_page="tools")

@app.route("/about")
def about():
    return render_template("about.html", active_page="about")

if __name__ == "__main__":
    app.run(debug=True)
