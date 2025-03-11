# Envio de Email com Node

## Este código demonstra como enviar um email usando a biblioteca Nodemailer em Node.js, utilizando o serviço SMTP do Gmail.


**1. Pré-requisitos:**

* Node.js instalado
* Nodemailer instalado (`npm install nodemailer`)
* Uma conta de mail com "Acesso a apps menos seguros" habilitado (ou preferencialmente, uma senha de aplicativo gerada para maior segurança).

**2. Configuração do Transportador:**

* Utilize a função `createTransport` do Nodemailer para criar um objeto transportador.
* Forneça as informações do servidor SMTP do seu provedor de email:
    * `host`: Endereço do servidor SMTP (ex: `smtp.gmail.com`).
    * `port`: Porta SMTP (ex: `465` para conexões seguras).
    * `secure`: Defina como `true` para conexões SSL/TLS.
    * `auth`: Inclua suas credenciais de autenticação:
        * `user`: Seu endereço de email.
        * `pass`: Sua senha ou senha de aplicativo.

**3. Preparação do Email:**

* Crie um objeto com as opções do email:
    * `from`: Endereço de email do remetente.
    * `to`: Endereço de email do destinatário.
    * `subject`: Assunto do email.
    * `text`: Corpo do email em texto simples.
    * `html`: Corpo do email em HTML (opcional).

**4. Envio do Email:**

* Utilize o método `sendMail` do objeto transportador, passando as opções do email.
* Trate o resultado do envio:
    * `.then()`: Para sucesso.
    * `.catch()`: Para erros.

**5. Considerações Importantes:**

* Substitua os valores de exemplo pelos seus dados reais.
* Use senha de aplicativo para maior segurança.
* Se sua conta utiliza autenticação de dois fatores, o uso de senha de aplicativo é obrigatório.
* Verifique as configurações de acesso a aplicativos menos seguros ou senhas de aplicativos do seu provedor de emails.
* Ajuste as configurações de host, porta e autenticação para outros provedores de email.
* Use variáveis de ambiente para armazenar credenciais em produção.


**Contribuições:**

* Quem desejar contribuir com melhorias ou correções, sinta-se à vontade para enviar um pull request!