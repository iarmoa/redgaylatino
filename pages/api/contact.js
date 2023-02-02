import contactEmailTemplate from '../../lib/contactEmailTemplate';
export default async function (req, res) {
    try{
        require('dotenv').config();
        const sgMail = require('@sendgrid/mail');
        sgMail.setApiKey(`${process.env.EMAIL_API_KEY}`);
        const data = req.body;
        const captcha = data.captcha;
        const response = await fetch(
            `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`,
            {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
            },
            method: "POST",
            }
        );
        
        const captchaValidation = await response.json();
        if (captchaValidation.success) {
            const mailData = {
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_USER,
                subject: `${data.title} - ${data.name}`,
                text: "Contact e-mail: " + data.email,
                html: contactEmailTemplate(data)
            }

            const emailSent = await sgMail.send(mailData);
            if(emailSent.success){
                res.status(200).json({ success: true });
                return res;
            }
        }else{
            res.status(500).json({ success: false });
            return res;
        }
    }catch(e){
        res.status(500).json({ success: false });
        return res;
    }

    res.status(200).json({ success: true });
    return res;
}