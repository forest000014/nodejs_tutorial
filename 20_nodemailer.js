var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'csmochi321@gmail.com',
        pass: 'ahwlahwl1'
    }
});

var mailOptions = {
    from: 'csmochi321@gmail.com',
    to: 'big72pie@gmail.com, big72pie@gmail.com',
    subject: 'receive this mail',
    html: '<h1>Welcome</h1><p>hurry up!</p>'
    //text: 'hurry up!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log('      ====== error occurred!! ======');
        console.log(error);
    }
    else {
        console.log('      ====== send succeeded!! ======');
        console.log('Email sent : ' + info.response);
    }
});