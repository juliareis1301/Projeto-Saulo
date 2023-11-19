const express = require('express');
const cors = require('cors');
const app = express();
const nodemailer = require('nodemailer');
const PORT = process.env.PORT;

app.use(cors({
    origin: 'https://acolhendopatas.netlify.app', // URL base do seu front-end hospedado no Netlify
    methods: 'GET',
  }));
  

// Configuração do Nodemailer
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'juliadosreissilva6@gmail.com',
        pass: 'krkazcngqoiduxup',
    },
});

// Rota para enviar e-mails
app.get('/send-email', (req, res) => {
    const { email } = req.query;

    // Configurações do e-mail
    const mailOptions = {
        from: 'juliadosreissilva6@gmail.com ',
        to: email,
        subject: 'Assunto do E-mail',
        text: 'Corpo do E-mail',
    };

    // Envio do e-mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Erro ao enviar o e-mail de confirmação');
        } else {
            console.log('E-mail enviado: ' + info.response);
            res.send('E-mail de confirmação enviado com sucesso!');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
