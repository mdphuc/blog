from flask import Flask, render_template, url_for, send_file
app = Flask(__name__)

@app.route("/", methods=['GET'])
def main():
    return render_template("index.html")

@app.route("/project/<ProjectName>", methods=['GET'])
def project(ProjectName):
    return render_template(f"{ProjectName}.html")

@app.route("/uc/<category>", methods=['GET'])
def uc(category):
    if category == "uhp":
        return render_template("uhp.html")
    else:
        return render_template("uc.html")

@app.route("/blog/<BlogName>", methods=['GET'])
def blog(BlogName):
    return render_template(f"{BlogName}.html")

@app.route('/resume')
def resume():
    path = './static/file/PhucMai_resume.pdf'
    return send_file(path, as_attachment=True)

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5500, debug=True)

