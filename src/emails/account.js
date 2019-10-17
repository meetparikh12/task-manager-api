const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
sgMail.send({
    to: email,
    from: 'parikhmeet1234@gmail.com',
    subject: 'Thanks for joining us!',
    text: `Welcome to the app, ${name}. Let us know how you get along with the app.` 
})
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'parikhmeet1234@gmail.com',
        subject: 'We are sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.` 
    })
}
module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
