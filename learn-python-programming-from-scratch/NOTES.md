# Learn Python Programming from Scratch

- Udemy
- Instructor: Eduonix Learning Solutions
- Completed Apr 25, 2020

---

- This course uses Python 2.7. The basic syntax in 3.x+ has very few changes. However, the syntax changes may have broken many third party plugins.
## Python 3.x
- print function now requires parentheses.
```
2.7: print "Hello world!"
3.x: print("Hello world!")
```
---
---
# Section 1: Writing the first Python program

### Advantages
- Free, powerful and dynamic
- Simple to learn
- Open source
- Web servers
    - Desktop applications
    - Database access
    - Game programming
    - Network programming
    - Mobile developement
- Cross platform (applications will run on Linux, Windows and Mac)
- Extensive collection of third party libraries
- Dynamic data typing (You don't have to declare a variable's type.)
- Clear, simple syntax
- Interactive interpreter
- Complete documentation ([https://docs.python.org/](https://docs.python.org/))

### Available versions
- **Python 2.7**
    - Current industry standard
    - More third party support
- **Python 3.x+**
    - Updated syntax
    - Less third party support

### This course uses the **IDLE** Python editor.
To install it. 
```
sudo apt-get install idle
```

- Comments are denoted by the pound symbol, #.

---
# Section 2: Basic Python Syntax
- A **variable** is data structure that can hold information for later use in your program.
- Syntax to create a variable:
```
num_objects = 15
```
- Variable naming conventions:
    - Can't contain spaces
    - Can't start with a number
    - Can't contain special characters except the underscore
    - Can't contain Python keywords

### Data Types
- **Integer** (int)
    - Any positive or negative whole number.
    - Commonly abbreviated as **int**.
    - Example
```
>>> velocity = 50
>>> type(velocity)
<type 'int'>    
```
- **Floating Point** (float) numbers
    - Any positive or negative real number.
    - Example
```
>>> velocity = 50.8
>>> type(velocity)
<type 'float'>    
```
- **Strings**
    - A section of text denoted by quotes.
    - Example
```
phrase = "Learning Python Programming!"
>>> type(phrase)
<class 'str'>
```
### Data Operations
```
+ = Add
- = Subtract
* = Multiply
/ = Add
```
 When dealing with string the add operator, +, simply concatenates the two strings.

### input
- Variable = input(prompt text)
- Prompt text must be a string
- Variable will be whatever type the input was.
    - Make sure to specify the type of data to the user to avoid errors.
```
number = input("Enter a number value")
```

### raw_input
- Variable = raw_input(prompt)
- Variable will be data type string regardless of the input type.
- The user won't have to type quotes to input a string.

#### Persistent Data
- Data that persists between program runs.
    - The data will need to be stored somewhere, like a file.

#### Objects are data structures with attributes and functions.    
- Objects are instances of **classes**
- **Classes** are predefined set of instructions for attributes and functions for a specific object.

### File Object
- Use the open function to create an object and assign it a name.
    - open(filename, mode)
        - **filename** is a string specifying the name of the file you want to open.
        - **mode** is a string specifying what you want to do with the file
            - **w** = write data
            - **r** = read data
            - **a** = append data
- If the file doesn't already exist then Python will create the file.
- You must close a file when you are done with it.
- Example of writing to a file:
```
file_object = open("file1.txt", "w")
phrase = "This will be written to the file."
file_object.write(phrase)
file_object.close()
```
- Example of reading from a file:
```
file_object = open("file1.txt", "r")
phrase = file_object.read()
file_object.close()
print(phrase)
```
# Section 3: Python programming constructs

## Functions
- All functions begin with the keyword **def**.
- Example statement:
    - def function1():
- After the function statement you must use tabbed indentation.
- Parameters are ways to send input to your functions
    - Example:
        - def avg(num1, num2)

## Scope
- Indentation will help mark which variables exist where.
- Variables declared in functions **only** exist inside those functions.
- Variables declared inside a function are known as **local variables**.

## Conditional Statements
- Statements that execute a specific piece of code when a condition is met.
- Require a Boolean expression to know when to execute.

## If Statements
- Core aspect of conditional statements in Python.
- Example:
```
if (condition == True):
    # Execute this
```
- **Else clauses**
    - Execute when the if part of an (if/else) statement is not met.
    - Example:
```
if (condition == True):
    # Do this
else: 
    # Do something else
```

## Loops

- Loops can be used to repeat operations until a certain condition is met.
- Some tasks in programming will require repeat operations.

## **While** Loops
- While loops repeat until a boolean condition is met.
- Example
```
while(condition==True):
    - Perform these actions
```
- While loops sometimes have more flexibility than for loops.

## **For** Loops
- For loops also repeat tasks, but generally are more useful for repeating operations on lists.
- Example
```
for x in range(0, 10):
    print(x)
```
- For loops can be more efficient than while loops and use less lines of code.
- For loops work efficiently with lists.

# Section 4: Python Data Structures

## Lists
- Lists are data structures in Python that holds a collection of objects.
- Lists can be declared with names like variables.
- Example
```
values = []
# values is now an empty list
```
- Each item in the list is given a specific index based on when it was added to the list.
    - The first item added to a list always has the index 0.
    - You can also use negative numbers to go from the right of the list. 
        - The last object in the collection will have the index -1
- **List Object Methods**
    - **Listname.appendix(x)**
        - Add an element to a list.
    - **Listname.pop(z)**
        - Remove an element number z from the list.
    - **len(listname)**
        - Returns the number of objects in the list.

## Dictionaries
- Way to store collections of linked pieces of data.
- Can be very similar to lists.
- Example
```
# Create a linked collection of username and password information.
users = { "User 1": "password", "User 2": "password" }

# Return the dictionary that is linked with a particular username.
users["User 1"]
```
- For loops can iterate over dictionary keys in the same way that they iterate over objects in a list.

## Modules
- External pieces of code that generally define specific functions or classes for work to solve specific problems.
- An **import** statement is needed to use modules in your code.
- Modules generally contain function definitions and class definitions.
- You can...
    1. Import anything from a module
        - import random as rnd
        - rnd.randint(0, 10)
    2. Import the module as an object in your program
        - from random import randint
        - randint(0, 10)
    3. Import a specific function from a given module
        - from random import *
        - randint(0, 10)
        
### Built-in modules

- **Math**: for dealing with intense mathematical operations such as factorials, logs, powers, trigonometry functions, etc.
- **Time**: for dealing with date/time calculations
- **Urllib**: for performing operations involving web/HTTP operations

### Creating your own modules
- You can create your own modules to extend your program's functionality.
- To create your own module:
    1. Save whatever functions or class definitions you want to a file.
    2. Use an **import(filename)** statement to import the code into your program.

# Section 5: OOPS in Python

## Classes
- A class definition is a set of functions and variable values which will be given to a created object.
- Classes are definitions of objects.
    - Classes can be thought of as objects that are blueprints of objects created from them.
- Classes make it easier to organize code.
- **Inheritence** is when classes draw attributes from larger classes.
    - Classes inherit attributes from **superclasses**/**parent** classes.
    - Example:
        *Classname(superclass)*
     
### Class Structure
- Every class needs to have a constructor function to initialize the class's values.
- The **\_\_init\_\_** function needs at least one parameter to reference the object itself.
    - It's easiest to call this **self**, **me**, etc.
- **The constructor function must always be called \_\_init\_\_.**

## Exception Handling
- Exceptions are errors your program encounters while running.
- Exceptions are caused by faulty code.
- A **SyntaxError** stop your code from running completely.
- Code can be written to handle an **Exception**.
_ Exceptions are named like **ZeroDivisionError** which can be used to handle them.

### Try - Except Statements
- A **try/except** statement tests a piece of code for errors, and then handles whatever errors are found as specified.
```
try:
    # code to test for exceptions
except:
    # what to do if code fails
```
### Raising Excepctions
- You can raise your own exceptions and handle them in Python.
```
raise ZeroDivisionError
```
- Creating exceptions can be done by creating a new exception class.

## GUI Programming

### GUI Applications
- Many applications need a GUI frontend to streamline user input.
- **GUI** - Graphical User Interface

## Building GUIs
- GUIs can be build by importing the **tkinter** GUI module and then creating a window object and widget objects to continue
```
+--------------+
|  GUI Module  |
+--------------+
       |
       V
+--------------+
|   Window     |
+--------------+
       |
       V
+--------------+
|   Widgets    |
+--------------+

```

### GUI Application Structure
- All Python GUI applications should have a set, simple structure to work properly.
- Structure:
    - **Setup**
    - **Main loop**
    - **Shutdown**

### **tkinter** classes
- There area a number of built in widgets that you can add to your window after import **tkinter**.
- Widget classes:
    - **Entry**
        - Important Functions:
            - **Entry.get()** - gets the current text from the widget.
            - **Entry.delete()** - delete text from the widget.
        - Important Parameters:
            - **font**
            - **width**
    - **Button**
        - Important Parameters:
            - **text**
            - **width**
            - **command**
    - **Label**

# Section 6: Advance Python programming concepts

### Database Systems
- Ways to effectively manage large quantities of data.
- This course uses the SQLLite database system.

### Understanding SQL Databases
- SQL uses tables to organize data.
- **sqlite3** is the built in module for working with databases.
```
+----------+
|  Fields  |
+----------+
     ^      
     |
+----------+
|  Values  |
+----------+
```

### urllib
- Built in module for interacting with web data.
- Usage:
```
string1 = urllib.request.urlopen("www.example.com")
```
- **urllib.request.urlopen can be used to open specific web page.
- **urllib.request.retrieve can be used to download a specific web resource.

### Sending Emails

### smptlib
- Contains functions to send email using an existing SMTP server.
- Defines the SMTP object for email related operations.
- **smptlib** allows Python to connect to an SMTP mail server, supply credentials as needed, and send them.
```
+-------------+
|   Python    |
+-------------+
      |      
      V
+-------------+
| Mail Server |
+-------------+
```

### SMTP Object Functions
- **Obj.sendmail()** 
    - Sends an email message.
    - Takes three parameters:
        1. The message sender's email
        2. The recipient email
        3. The message itself
    - In order to add things like **Subject**, etc. we will have to add headers to the message.
    - In order to send html we have to add **Content-type** and **MIME-Version:1.0** to the header.
        - **MIME-Version:1.0** allows your email to have multiple content types, like images, etc.
                
- **Obj.SMTP()**
    - Establishes a connection to a given SMTP server.
    - Takes one parameter:
        1. The server address

### XML Parsing

### THe XML Library
- **Objname.fromstring** creates an XML object to manipulate from a string of XML data.
- **Objname.find finds a specific data tag.

# Section 7: Web programming in Python

### Web Servers
- HTTP Server - handles client requests
    - **GET Request**
        - The server responds to a request for data.
        - Data is send from the server to the client.
    - **POST Request**
        - Allows server to accept data from the client.

### To start a Python HTTP server from the command line:
```
python -m SimpleHTTPServer

# Note that in Ubuntu you will get the message No module named SimpleHTTPServer
# This is because it is merged with http.server module. 
# You can use the command below to run python http server in Python 3:
python3 -m http.server 9000
Serving HTTP on 0.0.0.0 port 9000 (http://0.0.0.0:9000/) ...
```
- If you go to the webage localhost:9000 in your web browser you will see the request in you terminal window.
```
127.0.0.1 - - [18/Apr/2020 23:55:15] "GET / HTTP/1.1" 200 -
127.0.0.1 - - [18/Apr/2020 23:55:16] code 404, message File not found
127.0.0.1 - - [18/Apr/2020 23:55:16] "GET /favicon.ico HTTP/1.1" 404 -
127.0.0.1 - - [18/Apr/2020 23:55:40] "GET /python3.6_installed HTTP/1.1" 200 -
```

### Web Frameworks
- Web frameworks allow you to work with HTTP servers in Python and write more complicated web apps.
    - **Django**
    - **CherryPy**
 
### CherryPy
- [https://docs.cherrypy.org/en/latest/install.html](https://docs.cherrypy.org/en/latest/install.html)
- Installation:
```
pip install cherrypy
```
- Test installation:
```
python -m cherrypy.tutorial.tut01_helloworld

# In your web browser go to: http://127.0.0.1:8080 
```

# Section 8: Django framework

### What is Django?
- Web framework (similar to CherryPy)
- **Django ORM** (object relational mapper)
    - Allows you to create classes and objects in Python that are directly mapped to a SQL database.
        - You don't need to write direct SQL code.
    - Example (The following will create a Musician table and an Album table.):
```
import django.db import models

class Musician(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    instrument = models.CharField(max_length=100)

class Album(models.Model):
    artist = models.ForeignKey(Musician)
    name = models.CharField(max_length=100)
    relase_date = models.DateField()
    num_stars = models.IntegerField()
```
- **Django Templates**
    - Allows you to write HTML and Python code alongside each other.
        - You have access to your Python code and variables in HTML.
    - Use of external frameworks and JavaScript in your web application won't interfere with your Python code. 
    - Example:
```
{% extends "base_generic.html %}

{$ block title %}{{ section.title }}{% endblock %}

{% block content %}
<h1>{{ section.title }}</h1>

{% for story in story_list %}
<h2>
    <a href="{{ story.get_absolute_url }}>
        {{ story.headline|upper }}
    </a>
</h2>
<p>{{ story.tease|truncatewords:"100" }}</p>
{% endfor %}
{% endblock %}
```

### Installing Django
- [https://www.djangoproject.com/](https://www.djangoproject.com/)
- Installation:
```
pip install Django==3.0.5
```

### Setting up a Django project
- Navigate to the directory where you want to create the directory and run the following command.
```
django-admin.py startproject learnpython
```
- Run the simple Django server to make sure everything is setup properly.
```
cd learnpython
./manage.py runserver

# Navigate the the url shown in your browser to confirm that it is working.
```
- You can stop the server.
- Use manage.py startapp to start an actual Django application.
- A Django project is a place to house your Django applications.
    - Within one Django project you can have multiple Django applications.
```
./manage.py startapp msg
```
- This creates a directory based on the name that you specified.
- Add your new app to the list of installed apps for the project.
- In *learnpython/settings.py* add it to the **INSTALLED_APPS** section.
```
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'msg'
]
```
- Start syncing the SQL database (which is automatically created by the amount of apps and code in our project).
```
./manage.py migrate
# Note that the command used to be ./manage.py syncdb but that was deprecated in Django 1.7
```
- Create a database super user.
```
./manage.py createsuperuser
# username=craig
# password=rocket88
```

- Define data models in *learnpython/msg/models.py*
    - Example:
```
from django.db import models

# Create your models here.
class Message(models.Model):
    message = models.CharField(max_length=400)
    username = models.CharField(max_length=100)
```
- Update the database with the models that you have just defined.
```
./manage.py makemigrations
./manage.py migrate
# Note before Python 1.7 the command was ./manage.py syncdb
```
- Create some Message data using the interactive interpreter.
```
./manage.py shell
>>> from msg.models import Message
>>> Message.objects.all()
>>> testmessage = Message(message="test message", username="Test User")
>>> testmessage.save()
>>> testmessage2 = Message(message="test message 2", username="testusr2")
>>> testmessage2.save()
>>> testmessage3 = Message(message="test message 3", username="testusr3")
>>> testmessage3.save()

# Loop through and display all usernames
>>> msgobjects = Message.objects.all()
>>> for x in msgobjects:
...    print(x.username)
...

# Loop through filtered usernames and display
>>> msgobjects2 = Message.objects.filter(username__startswith="testusr")
>>> for x in msgobjects2:
...    print(x.username)
...

# Loop through ordered usernames and display
>>> msgobjects3 = Message.objects.all()
>>> msgobjects3.order_by("username")
>>> for x in msgobjects3:
...    print(x.username)
...

```

### Django Admin Interface
- In order to access the data models interactively we need to register them in the file *learnpython/msg/admin.py*.
```
from django.contrib import admin
from msg.models import Message

# Register your models here.
admin.site.register(Message)
```
- Run the server.
```
./manage.py runserver
```
- Navigate to the admin url in your browser - http://127.0.0.1:8000/admin
    - Log in using the super suer credentials that you created earlier.
- We can control how the Message object is displayed in the admin console by adding some changes to the *learnpython/msg/models.py* file.
    - Do this by adding a **__str__** method. 
        - Note in Python2 there was the **_unicode__** method that would then fallback to the **__str__** method.
```
from django.db import models

# Create your models here.
class Message(models.Model):
    message = models.CharField(max_length=400)
    username = models.CharField(max_length=100)
    def __str__(self):
        return self.message
```

### What are **Views**
- Ways to display content.
- Used to display data they we've been adding to the database.
- Allows us to combine the HTML with the Django code.
- In Django we need to set up a url dispatcher.
    - The **url dispatcher** is a way to match up the url to the view.

---

### Simple Django routing example
- */learnpython/urls.py*
```
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('msg/', include('msg.urls')),
]
```
- */msg/urls.py*
```
from django.urls import path
from msg import views

urlpatterns = [
    path('', views.index, name='index')
]
```
- * /msg/views.py*
```
from django.http import HttpResponse
from msg.models import Message

# Create your views here.
def index(request):
    output = ""
    msgobjects = Message.objects.all()
    for x in msgobjects:
        output = output+x.message+"<br>"
    return HttpResponse(output)
```

### Simple Django templating example
- We add the template file */msg/templates/index.html*
- We use a context which basically maps the msgobjects array to the HTML code.
    - We do this by creating a simple dictionary object **context**.

- */learnpython/urls.py*
```
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('msg/', include('msg.urls')),
]
```

- */msg/urls.py*
```
from django.urls import path
from msg import views

urlpatterns = [
    path('', views.index, name='index')
]
```

- * /msg/views.py*
```
from django.shortcuts import render
from msg.models import Message

# Create your views here.
def index(request):
    msgobjects = Message.objects.all()
    context = {'msgobjects':msgobjects}
    return render(request, 'index.html', context)
```

- * /msg/templates/index.html*
```
<html>
<body>
<h1>Messages</h1>
<ul>
    {% for x in msgobjects %}
        <li>Username: {{x.username}} Message: {{x.message}}</li>
    {% endfor %}
</ul>
</body>
</html>
```

### Use the **global** keyword to access a variable that is outside of a function.
- Example
```
def handleInput(in_var):
    if (in_var == "X"):
        global done
        done = True
...

while (done == False):
    input_var = input("Choose an input item to buy (type the id)")
    handleInput(input_var)
```

### Mutlthreading
- Running mutliple tasks at one time with one Python program.
- An object called **thread_data** allows us to set up SQLite and CherryPy to run within the same thread.
```
def db_connect():
    cherrypy.thread_data.data_base = sql.connect("test.db")
        db_cur = cherrypy.thread_data.data_base.cursor()
```

- The following line allows you to keep the SQL thread and the CherryPy thread together. 
```
cherrypy.engine.subscribe('start_thead', db_connect)
```

- To check of the database already exists and remove it:
```
import os

dbname = "test.db"
if (os.path.isfile(dbname)):
    os.remove(dbname)
```
