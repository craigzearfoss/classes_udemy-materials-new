import cherrypy
import sqlite3 as sql
import os

dbname = "test.db"
if (os.path.isfile(dbname)):
    os.remove(dbname)

def db_connect(instance):
    cherrypy.thread_data.db = sql.connect(dbname)
    db_cur = cherrypy.thread_data.db.cursor()
    db_cur.execute('''CREATE TABLE MESSAGE(ID INTEGER PRIMARY KEY, MDATA TEXT)''')
    cherrypy.thread_data.db.commit()

def db_add(message):
    db_cur = cherrypy.thread_data.db.cursor()
    db_cur.execute('''INSERT INTO MESSAGE(MDATA) VALUES(?)''', [message])
    cherrypy.thread_data.db.commit()

def db_show():
    db_cur = cherrypy.thread_data.db.cursor()
    db_cur.execute('''SELECT MDATA FROM MESSAGE''')
    return db_cur.fetchall()

class SQLData:
    def addDataWeb(self, data=None):
        db_add(data)
        return """<meta http-equiv="refresh" content="0; url=/" />"""
    addDataWeb.exposed = True

    def index(self):
        webform = '''<h1>ADD DATA</h1>
                    <form action="addDataWeb" method="post">
                    <input type="text" name="data">
                    <input type="submit">
                    </form>'''

        HTMLString = ""

        data = db_show()
        for x in data:
            HTMLString = HTMLString+"<p>"+x[0]+"</p>"
        return webform+HTMLString
    index.exposed = True

cherrypy.engine.subscribe('start_thread', db_connect)

cherrypy.quickstart(SQLData())
