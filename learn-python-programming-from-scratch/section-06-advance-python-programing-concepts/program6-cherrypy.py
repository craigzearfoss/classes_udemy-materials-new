import cherrypy

class FirstPage(object):
    def index(self):
        return "Test String"
    index.exposed = True

cherrypy.quickstart(FirstPage())