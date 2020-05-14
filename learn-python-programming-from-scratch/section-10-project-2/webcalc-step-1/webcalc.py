import cherrypy

class Calculator:
    def index(self):
        fx = open("webcalc.html", "r")
        webform = fx.read()
        return webform
    index.exposed = True
    def doCalc(self, num1=None, num2=None):
        inum1 = int(num1)
        inum2 = int(num2)
        return str(inum1+inum2)
    doCalc.exposed = True


cherrypy.quickstart(Calculator())
