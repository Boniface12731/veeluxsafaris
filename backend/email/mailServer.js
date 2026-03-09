import express from 'express'
import nodemailer from 'nodemailer'
import cors from 'cors'
const  app  =  express();
const PORT = 5000;

//Middleware
app.use(cors());
app.use(express.json());

//Configure nodemailer transporter
const  transporter = nodemailer.createTransport({ 
    service: 'gmail',
    auth:{
        user: 'bonyosuks12731@gmail.com',
        pass: 'yypdiifmfdybmybj'
    },
    tls: {
        rejectUnauthorized: false
    }
});

//End point to send  email
app.post('/send-email', async(req, res) => {
    const {to, subject, text} = req.body;
    const mailOptions = {
        from : 'bonyosuks12731@gmail.com',
        to : to,
        subject: subject,
        text: text
    };
    try {
       await transporter.sendMail(mailOptions);
       res.status(200).json({message: 'Email sent successfully'}); 
    } 
    catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({message: 'Failed  to send email', error});
    }
});

app.get('/', (req,res) => {
    try {
        res.send('Server is working correctly');
    } catch (error) {
        console.error('Error occurred while handling the request:', error);
        res.status(500).send('An error occurred on the server.');
    }
})

app.listen(PORT, () => {
    console.log(`Server  is Listening to port ${PORT}`);
});