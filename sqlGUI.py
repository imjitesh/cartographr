import sqlite3

with sqlite3.connect("data/database/charts.db") as connection:
	c = connection.cursor()
	c.execute("""SELECT * FROM CHARTS LIMIT 10""")
data = c.fetchall()
print data