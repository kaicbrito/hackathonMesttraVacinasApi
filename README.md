
# hackathonMesttra 1000Devs

Desafio de API.
Projeto criado sem fins competitivos, somente para estudo.


## Documentação da API

#### Retorna todos os itens

```http
  GET /api/items
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave da sua API |

#### Retorna um item

```http
  GET /api/items/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

#### add(num1, num2)

Recebe dois números e retorna a sua soma.


## Autores

- [@kaicbrito](https://www.github.com/kaicbrito)


## Deploy

Para fazer o deploy desse projeto rode

```bash
  npm run deploy
```


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`API_KEY`

`ANOTHER_API_KEY`


## Instalação

Instale my-project com npm

```bash
  npm install 
  cd API
```
    
## Licença

[MIT](https://choosealicense.com/licenses/mit/)


## Rodando localmente

Clone o projeto

```bash
  git clone https://link-para-o-projeto
```

Entre no diretório do projeto

```bash
  cd my-project
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```


## Suporte

Para suporte, mande um email para kaicdev@kaic.com ou entre em nosso canal do Slack.


## Stack utilizada

**Front-end:** TailwindCSS

**Back-end:** Node, Express


## Rodando os testes

Para rodar os testes, rode o seguinte comando

```bash
  npm run test
```

