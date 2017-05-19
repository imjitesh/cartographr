from flask import Flask, redirect, url_for, session, request, jsonify, render_template
from flask_oauthlib.client import OAuth
import json, random, string, sqlite3, re, os


app = Flask(__name__)
app.config['GOOGLE_ID'] = "627189221895-524oaf1b12lmnrfdagqboo7f284fvc1q.apps.googleusercontent.com"
app.config['GOOGLE_SECRET'] = "Ze1a3AfMKHrHoQ6mKeXYulFV"
app.debug = True
app.secret_key = 'development_'+str(os.urandom(26))
oauth = OAuth(app)
src_page = ""

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
    cursor = sqlite3.connect("data/database/charts.db").cursor()
    query = cursor.execute("SELECT * FROM CHARTS LIMIT 20")
    data = [ dict(zip([d[0] for d in query.description], r)) for r in query.fetchall() ]
    cursor.close()
    cursor.connection.close()
    if 'google_token' in session:
        return render_template("index.html", charts=data,logged_in=True, user=google.get('userinfo').data)
        print google.get('userinfo').data
    else:
        return render_template("index.html", charts=data,logged_in=False)

@app.route('/help')
def help():
    return render_template("about.html")

@app.route('/stats')
def stats():
    if 'google_token' in session:
        return render_template("stats.html",logged_in=True, user=google.get('userinfo').data)
        print google.get('userinfo').data
    else:
        return render_template("index.html", charts=data,logged_in=False)

@app.route("/bookmarked-charts")
def bookmarked():
    cursor =  sqlite3.connect("data/database/charts.db").cursor()
    query = cursor.execute("SELECT * FROM CHARTS LIMIT 20")
    colname = [ d[0] for d in query.description ]
    data = [ dict(zip(colname, r)) for r in query.fetchall() ]
    cursor.close()
    cursor.connection.close()

    if 'google_token' in session:
        me = google.get('userinfo')
        return render_template("bookmarked.html", charts=data,logged_in=True, user=me.data)
    else:
        return render_template("login.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/internal_hfUtRuUxevzSOXelOGPr")
def internal():
    content = []
    with sqlite3.connect("data/database/charts.db") as connection:
        cursor = connection.cursor()
        query = cursor.execute("SELECT * FROM USER")
        colname = [d[0] for d in query.description]
        content = [ dict(zip(colname, r)) for r in query.fetchall() ]
    return render_template("chart_dump_hfUtRuUxevzSOXelOGPr.html",data=content)

@app.route("/topic/<topic_id>")
def topic(topic_id):
    cursor =  sqlite3.connect("data/database/charts.db").cursor()
    query = cursor.execute("SELECT * FROM CHARTS LIMIT 20")
    colname = [ d[0] for d in query.description ]
    data = [ dict(zip(colname, r)) for r in query.fetchall() ]
    cursor.close()
    cursor.connection.close()

    if 'google_token' in session:
        me = google.get('userinfo')
        return render_template("index.html", charts=data,logged_in=True, user=me.data)
    else:
        return render_template("index.html", charts=data,logged_in=False)

@app.route("/<chart_id>")
def make(chart_id):
    cursor =  sqlite3.connect("data/database/charts.db").cursor()
    query1 = cursor.execute("SELECT chart_data FROM CHARTS_DUMP WHERE chart_title_trunc = '" + chart_id + "'")
    content = query1.fetchall()
    query2 =  cursor.execute("SELECT * FROM CHARTS LIMIT 10")
    colname = [ d[0] for d in query2.description ]
    data = [ dict(zip(colname, r)) for r in query2.fetchall()]
    cursor.close()
    cursor.connection.close()
    if 'google_token' in session:
        me = google.get('userinfo')
        return render_template("make.html", chart=content, relChart=data, logged_in=True, user=me.data)
    else:
        return render_template("make.html", chart=content, relChart=data, logged_in=False)

@app.route("/test")
def test():
    return render_template("test.html")

@app.route('/chart')
def createchart():
    if 'google_token' in session:
        me = google.get('userinfo')
        if 'error' in me.data:
            return render_template("chart.html",logged_in=False)
        else:    
            return render_template("chart.html",logged_in=True, user=me.data)
    else:
        return render_template("chart.html",logged_in=False)

@app.route("/searchfield", methods = ['GET'])
def searchfield():
    a = request.args.get("searchdata",0,type=type("wink"))
    a = a[1:-1]
    data = []
    with sqlite3.connect("data/database/charts.db") as connection:
        data = connection.cursor().execute("""SELECT chart_title_trunc, chart_title FROM CHARTS WHERE chart_title LIKE '%""" + a + """%' LIMIT 5""").fetchall()
    return json.dumps(data)

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

@app.route("/upload", methods = ['POST'])
def upload():
    a = request.json['chdata']
    me = ""
    if 'google_token' in session:
        me = google.get('userinfo')
    else:
        return redirect(url_for('login'))
    rand_num = ''.join(random.choice(string.ascii_uppercase + string.ascii_lowercase + string.digits) for _ in range(11))
    d = [rand_num,a['title'],a['desc'],a['ctype'],me.data['id'],re.sub(r'\W+', '-', a['title']).rstrip("-")]
    with sqlite3.connect("data/database/charts.db") as connection:
        c = connection.cursor()
        c.execute("CREATE TABLE IF NOT EXISTS CHARTS(chart_id VARCHAR(11) PRIMARY KEY, chart_title VARCHAR(100), chart_description VARCHAR(300), chart_type VARCHAR(20),created_by INT(25),chart_title_trunc VARCHAR(100))")
        sub_qry1 = "INSERT INTO CHARTS VALUES('"
        sub_qry2 = "','"
        c.execute(sub_qry1+d[0]+sub_qry2+d[1]+sub_qry2+d[2]+sub_qry2+d[3]+sub_qry2+d[4]+sub_qry2+d[5]+"')")
        c.execute("CREATE TABLE IF NOT EXISTS CHARTS_DUMP(chart_id VARCHAR(11) PRIMARY KEY, chart_data BLOB, chart_title_trunc VARCHAR(100))")
        c.execute("INSERT INTO CHARTS_DUMP VALUES('"+d[0]+"','"+json.dumps(a)+"','"+d[5]+"')")
    return jsonify(d[5])

@app.route("/embed/<chart_id>", methods = ['GET'])
def embed(chart_id):
    cursor =  sqlite3.connect("data/database/charts.db").cursor()
    query1 = cursor.execute("SELECT chart_data FROM CHARTS_DUMP WHERE chart_title_trunc = '" + chart_id + "'")
    content = query1.fetchall()
    cursor.close()
    cursor.connection.close()
    return render_template("embed.html", chart=content)

@app.route("/blog")
def blog():
    return render_template("about.html")

######################################### Login Stuff - Handle with care ################################################
@app.route('/login')
def login():
    return render_template("login.html")

@app.route('/googlelogin/<page_id>')
def glogin(page_id):
    return google.authorize(callback=url_for('authorized', _external=True,src_page=page_id))

@app.route('/logout/<page_id>')
def logout(page_id):
    session.pop('google_token', None)
    if page_id == 'chart':
        return redirect(url_for('createchart'))
    elif page_id == "home":
        return redirect(url_for('index'))

@app.route('/gCallback/<src_page>')
def authorized(src_page):
    resp = google.authorized_response()
    if resp is None:
        return 'Access denied: reason=%s error=%s' % (
            request.args['error_reason'],
            request.args['error_description']
        )
    session['google_token'] = (resp['access_token'], '')
    me = google.get('userinfo')
    user_login = me.data['email'].split("@")[0]
    with sqlite3.connect("data/database/charts.db") as connection:
        cursor = connection.cursor()
        query1 = cursor.execute("SELECT EMAIL FROM USER WHERE EMAIL = '" + me.data['email'] + "'")
        content = query1.fetchall()
        if len(content) == 0:
            cursor.execute("INSERT INTO USER VALUES('"+user_login + "','"+me.data['given_name']+"','"+me.data['family_name']+"','"+me.data['gender'][0]+"',NULL,NULL,'"+me.data['picture']+"','"+me.data['email']+"')")
            print "adding user"
        else:
            print "Already registered user"
    if src_page == 'chart':
        return redirect(url_for('createchart'))
    elif src_page == "home":
        return redirect(url_for('index'))


@google.tokengetter
def get_google_oauth_token():
    return session.get('google_token')

############################################## Login Stuff Ends Here ###################################################

@app.errorhandler(404)
def not_found(error):
    return render_template('404error.html'), 123


if __name__ == '__main__':
    app.run()