# Portifolio
Esse é o repositório do meu portifólio, aqui irei compartilhar contigo as tecnologias utilizadas e como iniciar um novo repositório tendo esse como exemplo.

## Requisitos
Esse projeto foi desenvolvido em NodeJs com o framework NextJs, então antes de começar certifique-se que tenha instalado em sua maquina os requisitos necessários.
 - NodeJs -> [Click aqui](https://nodejs.org/en/download/current)

 ## Começando
 1. Inicialize um novo projeto NextJs informando esse repositório como exemplo.
 ```bash
npx create-next-app --example https://github.com/andresinho20049/andresinho20049/tree/boilerplate my-portfolio
 ```

 2. Entre na pasta do seu projeto e inicialize-o:
 ```bash
npm run dev
 ```

3. Abra o navegador na url [http://localhost:3000/](http://localhost:3000/)

## Nodemailer e Google Oauth
Google desabilitou a utilização por Apps menos seguros, não é possivel criar o serviço de e-mail utilizando usuário e senha.

Para utilização do serviço de enviar e-mail, siga as seguintes etapas:

### GCP Console
1. Vá para o [Google Developer Console](https://console.cloud.google.com/) e crie um novo projeto

2. Selecione seu projeto e vai para tab **API & Services**

3. Selecione a tela `Auth consent screen` no menu suspenso
    - Selecione `external` e clique em `create`
    - Preencha com as informações do seu APP e click em `Save and continue`
    - Em `scops`, click em `Save and continue`
    - Em `Test users`, insira o endereço de e-mail que você gostaria de usar para enviar e-mails

4. Click em `credentials` no menu lateral
    - Selecione `Auth client ID` no menu suspenso
    - Selecione o tipo do seu app
    - Em `Authorised redirect URIs` adicione essa URI `developers.google.com/oauthplayground`
    - Copie e salve seu client ID & client secret

5. Agora vai para [https://developers.google.com/oauthplayground/](https://developers.google.com/oauthplayground/)
    - No menu lateral superior direto, click no icone de settings
        - Marque `Use your own OAuth credentials`
        - Preencha com seu Client e Secret.
    - Agora na lateral esquerda procure por `Gmail API v1`
    - Selecione `mail.google.com`
    - Clique em `Authorise APIs`
    - Selecione sua conta (que você adicionou como usuário de teste no console do desenvolvedor do Google)
    - Agora, clique em `Exchange authorise code for tokens`
    - Copie e Salve seu Refresh Token

6. Popule as informações no arquivo `.env`, assim:
```properties
NEXT_APP_EMAIL=your_email

GCP_CLIENT_ID=your_client_id
GCP_CLIENT_SECRET=your_client_secret
GCP_REFRESH_TOKEN=your_refresh_token
```

> Pronto, os serviços googleOauth e mailSender já estão configurados corretamente, com o preenchimento correto das variaveis de ambiente, já pode testar a funcionalidade de envio de e-mail!

```ts
const createTransport = async () => {
  const accessToken = await getGoogleAccessToken();

  const transporterOpt: SMTPTransport.Options = {
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.NEXT_APP_EMAIL,
      accessToken: accessToken,
      clientId: process.env.GCP_CLIENT_ID,
      clientSecret: process.env.GCP_CLIENT_SECRET,
      refreshToken: process.env.GCP_REFRESH_TOKEN,
    },
  };
  const transporter = nodemailer.createTransport(transporterOpt);
  return transporter;
};
```

# Considerações
Esse é um boilerplate para criação de portifólio, mas não incentiva-mos apenas copia-lo, é interessante utiliza-lo como base e estudo, porem seu portifólio deve ser exclusivo e unico trazendo suas particularidades.

> **André Carlos** \
> Developer