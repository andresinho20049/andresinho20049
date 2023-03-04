<img align="left" width="230rem" src="https://i.ibb.co/bvQNxSF/Avatar-Art.png" alt="Avatar-Art" border="0">
<img align="right" width="260rem" src="https://i.ibb.co/C7drn6j/Ready-Player-Me-Avatar-2.png" alt="Ready-Player-Me-Avatar-2" border="0">
</br>
</br>
</br>


<div align="center" dsplay="inline-block">
 
 <h1 align="center">André Carlos </h1> 
 <a href="https://www.instagram.com/andresinho200498/" target="_blank">
    <img align="center" width="80px" src="https://img.icons8.com/color/256/instagram-new.png" alt="instagram" style="vertical-align:top;">
  </a> 
  <a href="https://www.youtube.com/@andresinho200498" target="_blank">
    <img align="center" width="80px" src="https://img.icons8.com/color/256/youtube-play.png" alt="twitter" style="vertical-align:top;">
  </a>
  <a href="https://www.linkedin.com/in/andresinho20049/" target="_blank">
    <img align="center" width="80px" src="https://img.icons8.com/color/256/linkedin.png" alt="linkedin" style="vertical-align:top;">
  </a>
  
  <h3 align="center">@andresinho20049</h3>
</div> 


[![pt-br](https://img.shields.io/badge/lang-en-blue.svg)](https://github.com/andresinho20049/andresinho20049/blob/master/README.md)

<br/>

## Olá, Devs
Sou formado em Ciência da Computação pela FMU, trabalho como desenvolvedor há 5 anos, comecei como traineer no projeto de URA da Vivo, iniciei no back-end e hoje trabalho como desenvolvedor full stack . amo tecnologia, mas também amo a natureza, passear ao ar livre, profissionalmente prefiro ser direto e firme, pessoalmente dentro do meu ciclo de amigos sou meio bobo kkkk. <br/>
> Quero me desculpar, meu inglês não é nativo e estou aprendendo.

### 🖥️ Tecnologias e ferramentas: 
<code><img width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" title = "HTML5"/></code>
<code><img width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" title = "CSS3"/></code>
<code><img width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" title = "JAVASCRIPT"/></code>
<code><img width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" title = "TYPESCRIPT"/></code>
<code><img width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" title = "GIT"/></code>
<code><img width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" title = "JAVA"/></code>
<code><img width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" title = "SPRING-BOOT"/></code>
<code><img width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" title = "ANDROID"/></code>
<code><img width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" title = "POSTGRES"/></code>
<code><img width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" title = "NODEJS"/></code>
<code><img width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" title = "REACT"/></code>
<code><img width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" title = "ANGULAR"/></code>
<code><img width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" title = "DOCKER"/></code>


### Sobre mim
- 🔭 Atualmente estou trabalhando na <a href="https://www.linkedin.com/company/a5-solutions/" target="_blank">A5 Solutions</a> 
- 🌱 Atualmente estou aprendendo...
  - Inglês
  - NodeJs Express
  - Implementação de Servles 
  - Cloud Native
- 💬 Entertainment
  - Carros customizados
  - Videos de curiosidades
  - Filmes, de diferente genêros
  - Anime
  - Jogos 
- 😄 Pronomes: Ele/Dele
- ⚡ Curiosidade: Tenhos 2 filhos

### Language topics
```js
  {
    java: {
      framework:[
        "core", "spring-boot"
      ],
      topLibraries: [
        "org.springframework.security.oauth.boot",
        "org.projectlombok",
        "io.springfox",
        "javax.mail",
        "log4j",
        "JPA"
      ],
      designPattns: "mvc",
      principles: "SOLID"
    }
  }
```

<details> 
<summary>
:eyes: mostrar exemplo
</summary>

<content>

## [API Rest com autenticação Oauth2 e documentada usando Swagger](https://github.com/andresinho20049/spring-oauth-boilerplate)

Este projeto Spring boot foi desenvolvido com as configurações padrão de autenticação e documentação para servir de base para o desenvolvimento de outros projetos.

Sobre:
 - Controle de acesso baseado em regras com JWT
 - Tecnologias utilizadas
    - Java 8
    - Spring Boot 2.7.0
    - Spring JPA latest
    - Spring Security 5.6.4     
    (Eu prefiro usar a implementação com WebSecurityConfigurerAdapter pois é melhor para configurar do que a nova implementação de SecurityFilterChain)
    - Spring Secutiry Oauth2 Autoconfigure 2.1.5
    - Springfox (Swagger) 3.0.0
    - H2 Database - Base de teste
    - Lombok - <a href="https://projectlombok.org/setup/eclipse/" target="_blank">Ajuda para configurar o lombok</a>
    - Log4J
    - Project Maven
- Application.properties - Padrão
    - Port: 5000
    - Profile: dev
    - Base path: /api
    - Encrypt: bcrypt
    - Hibernate DDL: update
- ExceptionHandler
    - ProjectException:
        - Status: 400
        - Description: Exceção provocada, n motivos, mas principalmente regra de negócio
        (A ideia aqui é o Dev em qualquer ponto do código fazer um throw new ProjectException(msg), que será retornado um 400 com a mensagem)
    - AuthorizationException:
        - Status: 403
        - Description: Acesso negado com RuntimeException

## Começando
1. Git clone project
 ```git
    git clone https://github.com/andresinho20049/spring-oauth-boilerplate
 ```

2. Dentro da pasta do projeto, execute
```mvn
    mvn clean install
```

> Neste exemplo vou considerar o uso do Eclipse, mas basta adaptar ao seu uso, ok.

3. Este projeto usa o lombok, se você ainda não instalou este plugin no seu eclipse, clique em:
Ajuda > Instalar novo software...
No campo 'Work with', cole: https://projectlombok.org/p2
Marque lombok e depois click em finish

4. Etapa opcional: Click Project > Update maven project > Ok

5. Pressione em start, se preferir cole este comando no seu terminal
```mvn
mvn clean spring-boot:run 
```

</content>

</details>

<br/>
<br/>

> Front-end é bem diversificado, tenho conhecimento de core development com HTML, CSS e JS, e também de projetos NodeJs com frameworks React e Angular.

```js

  {
    vanillaProjects: {
      tecnologyProject: ["HTML", "CSS", "JavaScript"],
      topLibrary: ["JQuery", "GridJS", "ChartJS", "Bootstrap"]
    },
    nodeProjects: {
      frameworks: ["Angular", "React", "NextJs"],
      learnings: ["Express", "jsonwebtoken"],
      topLibraries: {
        react: ["Material-UI", "Axios", "Unform", "YUP", "React-Router-Dom"],
        angular: ["@angular/material", "@angular/common", "@angular/forms", "@angular/router"]
      }
    }
  }

```

<details>
<summary>:eyes: mostrar exemplo</summary>

  ## [NF Control](https://github.com/andresinho20049/nf-control-front)
  ********************************

## Bibliotecas utilizadas
Irei abordar um pouco sobre as ferramentas/bibliotecas utilizadas, o porque foram desenvolvidas de tal maneiras.

### Material UI
Material UI é uma biblioteca de componentes React UI que implementa o Material Design do Google.

Ele inclui uma coleção abrangente de componentes pré-construídos que estão prontos para uso.

A interface do Material é bonita e apresenta um conjunto de opções de personalização que facilitam a implementação de um sistema de interface personalizado.

### Axios
Axios é um cliente HTTP baseado em Promises para fazer requisições. O Axios traz algumas vantagens e simplificações, sendo melhor utilza-lo do que apenas o Fetch, como configuração simples, conversão automática do JSON, Interceptores, etc...

### Unform
Unform, API de formulários, vantagem em utilizar por não usa state, aí quando é digitado na input as outras inputs  não sofrem render.

### Yup
Yup é um construtor de esquema JavaScript para análise e validação do esquema.

### CryptoJs
CryptoJs, como o próprio nome diz, é uma biblioteca de criptografia, possibilitando utilizar ALGORITHM e Secret Key, usado na aplicação de Encrypt end-to-end.

### React Router Dom
O React Router permite "roteamento do lado do cliente".

React é uma biblioteca popular para criar aplicações de página única (SPAs) que são renderizadas no lado do cliente.

e, diferentemente das aplicações convencionais de várias páginas, a navegação nessas views não deve resultar no recarregamento da página inteira.

## Segurança
Essa aplicação React consome serviço de uma aplicação Java Spring com Autenticação Oauth2, e o esquema de login deve seguir os requisitos de validação e autenticação da API.

### Camada de segurança no front
Conforme dito anteriormente o back-end trabalha com Authentication Server Oauth2, abaixo detalho melhor o funcionamento do login, resumidamente a sessão será validada atraves do token jwt, caso o mesmo esteja expirado ou seja inexistente, o usuário será deslogado.

> Request: `oauth/token`
```ts
    const encryptedPassword = encryptedAES(login.password);
    const encryptedKeyVerify = encryptedAES(process.env.REACT_APP_KEY_VERIFY || '');
    const passwordEncoded = Buffer.from(`${encryptedPassword}|${encryptedKeyVerify}`).toString('base64');

    const data = new URLSearchParams({ 'username': login.username });
    data.append('password', passwordEncoded);
    data.append('grant_type', 'password');

    const config = {
        method: 'post',
        url: `${process.env.REACT_APP_BASE_URL}/oauth/token`,
        withCredentials: true,
        auth: {
            username: process.env.REACT_APP_AUTH_USERNAME || '',
            password: process.env.REACT_APP_AUTH_PASSWORD || ''
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: data
    };

    const res = await axios(config);
```

> O username e password informados no body, é relacionado ao cliente(usuário) que esta efetuando o login, o clientId e clientSecret informado no bloco auth é para o application_client se autenticar com o Authentication server.

</details>

> Considerações: Projetos profissionais são privados e carregados no gitlabs da corporação, os projetos disponíveis aqui no meu perfil do Github são pessoais e desenvolvidos com intuito acadêmico.


## Meu perfil no Github
<p align="center">
<a href="https://github.com/andresinho20049">
  <img height="200em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=andresinho20049&custom_title=Linguagens mais utilizadas"/>
  <img height="200em" src="https://github-readme-stats.vercel.app/api?username=andresinho20049&show_icons=true&count_private=true&theme=radical&include_all_commits=true"/>
</a>
</p>