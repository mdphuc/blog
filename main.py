from flask import Flask, render_template, url_for, send_file
app = Flask(__name__)

@app.route("/", methods=['GET'])
def main():
    return render_template("index.html")

@app.route("/project/<ProjectName>", methods=['GET'])
def project(ProjectName):
    return render_template(f"{ProjectName}.html")

@app.route("/uhp", methods=['GET'])
def uhp():
    return render_template("uhp.html")

@app.route("/showcase/<id>", methods=['GET'])
def showcase(id):
    if id == "0":
        return render_template("showcase.html")
    elif id == "1":
        return render_template("showcase1.html")
    else:
        return render_template("showcase.html")

@app.route("/yearinreview/<id>", methods=['GET'])
def yearinreview(id):
    if id == "0":
        return render_template("yearinreview.html")
    elif id == "2023-2024":
        return render_template("2023-2024.html")
    else:
        return render_template("yearinreview.html")

@app.route("/blog/<BlogName>", methods=['GET'])
def blog(BlogName):
    return render_template(f"{BlogName}")

@app.route('/resume')
def resume():
    path = './static/file/PhucMai_resume.pdf'
    return send_file(path, as_attachment=True)

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5500, debug=True)

