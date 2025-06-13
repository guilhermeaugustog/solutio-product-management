<h1 align="center">
    <img alt="Solutio Product Management" title="Solutio Product Management" src=".github/logo.png" width="50%" />
</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-estrutura-do-projeto">Estrutura do Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
    <a href="#-autor">Licença</a>
</p>

<p align="center">
  <img alt="Solutio Product Management" src=".github/solutio_product_management" width="100%">
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Angular](https://pt-br.reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com)
- [Java](https://www.java.com/)
- [Spring Boot](https://spring.io/projects/spring-boot)
- [PostgreSQL](https://www.postgresql.org)
- [Docker](https://www.docker.com)

## 💻 Projeto
O projeto (site web e dois microsserviços) foi criado para a realização de um teste de emprego para a Tech Solutio.

## 🔧 Instalação

Para executar o projeto em sua máquina, serão necessários os seguintes recursos instalados:

- [Node.js](https://nodejs.org/en/)
- [Java](https://www.java.com/) 
- [Docker](https://maven.apache.org)

### 1. Copiar os arquivos do repositório para a sua máquina
Para realizar uma cópia deste projeto em sua máquina utilize o seguinte comando na pasta desejada atráves do prompt/terminal de comando do seu sistema:
```
git clone https://github.com/guilhermeaugustog/solutio-product-management.git
```

### 2. Iniciar os serviços Java e o banco Postgre pelo docker
Com o [Docker](https://www.docker.com) instalado anteriormente acesse a pasta com os arquivos clonados do repositório e execute o seguinte comando:
```
cd solutio-product-management
docker-compose up --build
```
### 3. Executar o projeto Angular (site) em sua máquina
Com o [Node](https://nodejs.org/en/) instalado anteriormente acesse a pasta com os arquivos clonados do projeto Angular e executando os seguintes comandos:
```
cd solutio-product-management
cd frontend
cd product-management
npm install 
```
Após o comando ```npm install``` ser finalizado, execute o projeto com o seguinte seguinte comando:
```
ng serve
```


## 🧩 Estrutura do Projeto

```
solutio-product-management/
├── backend/
│   ├── product-service/      # Serviço Java para gestão de produtos
│   └── stock-service/        # Serviço Java para consulta do estoque de produtos
└── frontend/
    └── product-management/   #Frontend em Angular do projeto

````

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

## 👨‍💻 Autor

Projeto desenvolvido por [Guilherme Gomes](https://github.com/guilhermeaugustog) em teste para Tech Solutio :wave:
