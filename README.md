# Super market case

Projeto desenvolvido como parte de um case técnico, composto por dois microsserviços em Java Spring Boot e um frontend em Angular. A aplicação permite o gerenciamento de produtos e a visualização de estoque em tempo real.

## Clone
```
git clone https://github.com/guilhermeaugustog/solutio-product-management.git
```

---

## 🧩 Estrutura do Projeto

```

solutio-product-management/
├── backend/
│   ├── product-service/      # Serviço Java para gestão de produtos
│   └── stock-service/        # Serviço Java para consulta do estoque de produtos
└── frontend/
    └── product-management/   #Frontend em Angular do projeto

````

---

## 📦 Microsserviços

### 🛍️ product-service

- CRUD de produtos
- Banco de dados: Postgre
- Porta: `8081`

### 📦 stock-service

- Consulta de estoque via integração com o `product-service`
- Porta: `8082`

---

## 🖥️ Frontend - Angular

- Exibe a lista de produtos e informações de estoque
- Comunica-se com o `stock-service`
- Porta: `4200`

---

## ▶️ Como Executar

### Pré-requisitos

- Docker + Docker Compose
- Node.js + Angular CLI (para desenvolvimento frontend)
- Java 24 + Maven (para desenvolvimento backend)

### 1. Subir com Docker Compose

```bash
cd solutio-product-management
docker-compose up --build
````

* `product-service`: [http://localhost:8080](http://localhost:8081)
* `stock-service`: [http://localhost:8081](http://localhost:8082)
* `Postgre`: Porta 5432

### 2. Rodar o Frontend

```bash
cd solutio-product-management
cd frontend
cd product-management
npm install
ng serve
```

Acesse: [http://localhost:4200](http://localhost:4200)

---

## ✅ Funcionalidades

* Cadastro, edição, listagem e exclusão de produtos
* Visualização de quantidade em estoque
* Indicação de produtos com estoque baixo

---


## 📄 Documentação da API

* Swagger disponível em: [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)


## 👨‍💻 Autor

Guilherme Augusto Gomes Araujo
[rfcavalcant](https://github.com/guilhermeaugustog)

---
