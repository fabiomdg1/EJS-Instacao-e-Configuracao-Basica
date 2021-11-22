# Configuração Básica do ambiente para trabalhar com EJS
### Inicializar o Projeto

Abra no VScode a pasta do projeto, depois abra um novo terminal.

Digite o seguinte código para criar a inicialização do projeto na pasta raiz.
```jsx
npm init -y
```
Este comando faz com que seja criado o arquivo **package.json,** que tem a função de gerenciar os  pacotes JavaScript utilizados no projeto.
****
### Instalação de Dependências

Vamos instalar o módulo express, que é utilizado para criação de rotas.
E também o ejs, que é o responsável pela engine EJS.<br/>
Com o terminal do VScode aberto, digite os seguintes comandos:

```jsx
npm install express
npm install ejs
```
****


### Importação dos Módulos

Vamos importar os módulos instalados para dentro do projeto.<br/>
Para isso, dentro da pasta raiz do projeto, crie um arquivo chamado **app.js.**<br/>
Dentro deste arquivo, insira o seguinte código:

```jsx
const express = require('express')
const path = require('path')
```
****

### Criando Instância
Criamos uma instância do módulo express para poder utilizar seus recursos dentro do projeto.

```jsx
const app = express()
```

### Definindo a Porta

Não é obrigatório, mas podemos criar uma variável e definir a porta de acesso ao servidor.

```jsx
const port = 3000
```
****

### Definindo a Engine
Utilizaremos a engine ejs
```jsx
app.set('view engine','ejs)
```
****

### Definindo local onde as páginas serão buscadas pela aplicação
Todas as páginas do nosso projeto até o ficarão dentro de uma pasta chamada view.
```jsx
app.set('views', path.join(__dirname,'views'))
```
****

### Criando a Página Principal

Criar uma pasta chamada views e dentro dela um arquivo chamado **index.ejs**<br/>
Observe que a extensão do arquivo é **.ejs**.<br/>
Dentro deste arquivo pode conter um html simples com um texto, por exemplo:</br>
**Este é um arquivo EJS.**
****

### Criando as Rotas de Acesso
Sempre que for digitado no navegador ***http://localhost:3000***<br/>
O EJS irá renderizar a página ***index.ejs***

```jsx
app.get('/',function (req,res){
	res.render('index')
})
```
****

### Inicializando o Servidor
Será exibido no terminal uma mesagem indicando que o servidor está rodando na porta 3000

```jsx
app.listen(port, ()=>{
	console.log(`Servidor rodando na porta ${port}`)
})
```


Agora basta rodar a aplicação

```jsx
npm app.js
```
****

### Testando
Acessar o navegador e digitar o endereço

localhost:3000

**Pronto. a primeira parte está concluída**
