import sqlite3 as sql

# if the database does not already exist then Python will create it
database1 = sql.connect('test1.db')

# need to create a cursor so we can perform actions on the databae
db1_cursor = database1.cursor()

# SQL command to create a table
cmd = "CREATE TABLE users(username TEXT, password TEXT)"

# SQL command to insert some data into the table
cmd2 = "INSERT INTO users(username, password) VALUES('testuser', 'testpassword')"

# SQL command to retrieve data from the database
cmd3 = "SELECT username, password FROM users"

# execute the SQL commands
db1_cursor.execute(cmd)
db1_cursor.execute(cmd2)
db1_cursor.execute(cmd3)

# commit the changes to the database
database1.commit()

# print the data that is stored in the cursor
for x in db1_cursor:
    print(x)


