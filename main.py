from flask import Flask, render_template, url_for
app = Flask(__name__)

@app.route("/", methods=['GET'])
def main():
    return render_template("index.html")

@app.route("/project/<ProjectName>", methods=['GET'])
def project(ProjectName):
    return render_template(f"{ProjectName}.html")

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5500, debug=True)

