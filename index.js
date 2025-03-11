import { createTransport } from 'nodemailer'

const transporter = createTransport({
  host: 'smtp.gmail.com', // check the information with the provider
  port: 465,
  secure: true, // false for port other than 465 
  auth: {
    user: 'seuemail@mail.com',
    pass: '123mail'
  }
});

transporter.sendMail({
  from: 'Nome <seuemail@mail.com>',
  to: 'Destinatário <fula@mail.com>',
  subject: 'Assunto',
  text: 'Texto do email',
  html: '<p>Texto do email</p>'

})

.then(() =>  console.log('Email enviado com sucesso!'))
.catch((err) => console.log('Falha no envio', err));