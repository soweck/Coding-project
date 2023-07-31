import random
import smtplib
import ssl
from email.message import EmailMessage

#sending email
def sendingEmail():
    email_sender = 'andrewmatthew137@gmail.com'
    email_password = 'xrlzogdkolrqxmfk'
    email_reciever = 'soulwreckersss@gmail.com'

    subject = 'SECRET SANTA'
    body = 'YOUR SECRET SANTA is ' + andrew 
    em = EmailMessage()
    em['From'] = email_sender
    em['To'] = email_reciever
    em['Subject'] = subject
    em.set_content(body)
    context = ssl.create_default_context()
    with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
        smtp.login(email_sender, email_password)
        smtp.sendmail(email_sender, email_reciever, em.as_string())


participants = ['Andrew','Mercedes','Evelynn','Jolin','Marvel']
CAndrew = True

while CAndrew == True:
    andrew = random.choice(participants)
    if andrew != 'Andrew': 
     CMercy = True
     CAndrew = False
     participants.remove(andrew)
    else:
        CAndrew = True


while CMercy == True:
    mercedes = random.choice(participants)
    if mercedes != 'Mercedes': 
        CMercy = False
        CEve = True
        participants.remove(mercedes)
    else:
        CMercy = True

while CEve == True:
    evelynn = random.choice(participants)
    if evelynn != 'Evelynn': 
        CEve = False
        CMarv = True
        participants.remove(evelynn)
    else:
        CEve = True

while CMarv == True:
    marvel = random.choice(participants)
    if marvel != 'Marvel': 
        CMarv = False
        CJolin = True
        participants.remove(marvel)
    else:
        CMarv = True


while CJolin == True:
    if participants[0] == 'Jolin':
        print("RESTART JOLIN LASTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT")
        exit()
    else:
        jolin = random.choice(participants)
        if jolin != 'Jolin': 
            CJolin = False
            participants.remove(jolin)
            print("Andrew is giving to " + andrew)
            print("Mercedes is giving to " + mercedes)
            print("Evelynn is giving to " + evelynn)
            print("Marvel is giving to " + marvel)
            print("Jolin is giving to " + jolin)
            sendingEmail()
        else:
            CJolin = True


