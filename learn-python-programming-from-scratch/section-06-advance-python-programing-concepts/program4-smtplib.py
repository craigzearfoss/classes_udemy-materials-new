import smtplib as mail
mailserver = mail.SMTP("example.net")
mailserver.login("testuser", "testpassword")

# EXAMPLE 1
# The following line would send a simple message but if we want to add things like
# Subject, etc. we will have to add headers as shown below
mailserver.sendmail("sender@example.net", "recipient@example.net", "Test Message")

# ---------------------------------------------------------------------------------
# EXAMPLE 2
# In order to add things like Subject, etc. we will have to add headers as shown below.
# Note that three quotation marks indicate that we are working with a multiple line string.
msg = """From: Sender Name <sender@example.net>
To: <recipient@example.net>
Subject: A Test Email Message!

This will be the body of your email message."""
mailserver.sendmail("sender@example.net", "recipient@example.net", msg)

# ---------------------------------------------------------------------------------
# EXAMPLE 3
# In order to send html we have to add Content-type and MIME-Version:1.0 to the header.
# MIME-Version:1.0 allows your email to have multiple content types, like images, etc.
msg = """From: Sender Name <sender@example.net>
To: <recipient@example.net>
Subject: A Test Email Message!
Content-type: text\html
MIME-Version:1.0

This will be the body of your email message."""
mailserver.sendmail("sender@example.net", "recipient@example.net", msg)
