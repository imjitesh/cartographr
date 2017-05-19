from flask import Flask, redirect, url_for, session, request, jsonify, render_template
from flask_oauthlib.client import OAuth
import json, random, string, sqlite3, re


app = Flask(__name__)
app.config['GOOGLE_ID'] = "627189221895-524oaf1b12lmnrfdagqboo7f284fvc1q.apps.googleusercontent.com"
app.config['GOOGLE_SECRET'] = "Ze1a3AfMKHrHoQ6mKeXYulFV"
app.debug = True
app.secret_key = 'development'
oauth = OAuth(app)

google = oauth.remote_app(
    'google',
    consumer_key=app.config.get('GOOGLE_ID'),
    consumer_secret=app.config.get('GOOGLE_SECRET'),
    request_token_params={
        'scope': 'email'
    },
    base_url='https://www.googleapis.com/oauth2/v1/',
    request_token_url=None,
    access_token_method='POST',
    access_token_url='https://accounts.google.com/o/oauth2/token',
    authorize_url='https://accounts.google.com/o/oauth2/auth',
)


@app.route('/')
def index():
    data = []
    with sqlite3.connect("data/database/charts.db") as connection:
        c = connection.cursor()
        c.execute("""SELECT * FROM CHARTS LIMIT 20""")
    data = c.fetchall()

    if 'google_token' in session:
        me = google.get('userinfo')
        return render_template("index.html", charts=data, user=me.data)
    return render_template("index.html", charts=data, user=None)

@app.route("/searchfield", methods = ['GET'])
def searchfield():
    a = request.args.get("searchdata",0,type=type("wink"))
    a = a[1:-1]
    data = []
    with sqlite3.connect("data/database/charts.db") as connection:
        data = connection.cursor().execute("""SELECT chart_title_trunc, chart_title FROM CHARTS WHERE chart_title LIKE '%""" + a + """%' LIMIT 5""").fetchall()
    return json.dumps(data)

@app.route('/chart')
def createchart():
    if 'google_token' in session:
        me = google.get('userinfo')
        return render_template("index.html", user=me.data)
    return render_template("login.html")

@app.route("/search", methods = ['GET'])
def search():
    a = request.args.get("c",0,type=type("wink"))
    data = []
    with sqlite3.connect("data/database/charts.db") as connection:
        data = connection.cursor().execute("""SELECT * FROM CHARTS WHERE chart_title LIKE '%""" + a + """%' LIMIT 5""").fetchall()
    if 'google_token' in session:
        me = google.get('userinfo')
        return render_template("search.html", charts=data, user=me.data)
    return render_template("search.html", charts=data, user=None)

######################################### Login Stuff - Handle with care ################################################
@app.route('/login')
def login():
    return render_template("login.html")

@app.route('/googlelogin')
def glogin():
    return google.authorize(callback=url_for('authorized', _external=True))


@app.route('/logout')
def logout():
    session.pop('google_token', None)
    return redirect(url_for('index'))


@app.route('/gCallback')
def authorized():
    resp = google.authorized_response()
    if resp is None:
        return 'Access denied: reason=%s error=%s' % (
            request.args['error_reason'],
            request.args['error_description']
        )
    session['google_token'] = (resp['access_token'], '')
    me = google.get('userinfo')
    return redirect(url_for('index'))


@google.tokengetter
def get_google_oauth_token():
    return session.get('google_token')

############################################## Login Stuff Ends Here ###################################################

if __name__ == '__main__':
    app.run()