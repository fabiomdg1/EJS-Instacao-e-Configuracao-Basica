# Configuração Básica do ambiente para trabalhar com EJS
### Contexo
O objetivo é mostrar como iniciar um projeto do zero e configurar o ambiente para prosseguir com os demais recursos do ejs.<br/>
Iremos configurar o mínimo necessário para que o EJS funcione, afim de facilitar o entendimento.<br/>
Para isso, iremos instalar as seguintes dependências:
- Express
- EJS
***

### Inicializando o Projeto
Crie uma pasta chamada **pastaEjs** ou coloque outro nome de sua escolha.<br/>

Abra esta pasta no VScode(ou um editor de sua preferência).

Em seguida, caso ainda não tenha aberto, abra um Novo Terminal.<br/>

Para isso, no vsCode clique em Terminal > New Terminal.<br/>

![image](https://user-images.githubusercontent.com/34406468/143259248-c25d7dcc-4a0b-4bf6-a7e7-02be1482b4d5.png)<br/>

No terminal, digite o seguinte comando para criar a inicialização do projeto na pasta raiz.
```jsx
npm init -y
```
O **NPM**  (Node Package Manager), é um gerenciador de pacotes que faz parte do Noje.js.<br/>
O **init** Inicializa a pasta criando o arquivo **package.json,** que tem a função de gerenciar os  pacotes JavaScript utilizados no projeto.<br/>
O **-y**  Apenas confirma com Sim (yes), todas as perguntas que a instalação faria caso você não colocasse este parâmetro.
****
### Instalando as Dependências
O EJS precisa de algumas dependências(módulos) para funcionar corretamente.
Caso você esteja iniciando um projeto do zero, estas dependências não estarão instaladas. 

Então, vamos instalar o módulo express, que é utilizado para criação de rotas.<br/>
E também o ejs, que é o responsável pela engine EJS.<br/>
Com o terminal do VScode aberto, digite os seguintes comandos:

```jsx
//Podemos instalar um por vez
npm install express
npm install ejs


//Ou então podemos instalar os dois na mesma linha de comando, dando apenas um espaço entre os nomes das dependências.
npm install express ejs
```
****


### Importando os Módulos

Vamos importar os módulos que acabamos de instalar (Express e EJS) para dentro do projeto.<br/>
Para isso, dentro da pasta que criamos com o nome **pastaEjs**, crie um arquivo chamado **app.js.**<br/>
Abra este arquivo no VScode e insira o seguinte código:

```jsx
const express = require('express')
const path = require('path')
```
****

### Criando Instância
Para que possamos utilizar os resursos disponíveis no Express que acabamos de instalar, precisamos criar uma instância.<br/>
Criando uma instância chamada app.
```jsx
const app = express()
```

### Definindo a Porta
Depois de configurado o servidor, iremos testar nossa aplicação, acessando as página através do endereço http://localhost:número_da_porta que foi específicada no código.<br/>
Não é obrigatório, mas podemos criar uma variável para guardar esta porta.

```jsx
const port = 3000
```
O endereço então ficaria desta forma no browser, http://localhost:3000
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
Sempre que for digitado no navegador localhost:3000/<br/>
O EJS irá renderizar a página index.ejs

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

***http://localhost:3000***

**Pronto. a primeira parte está concluída**
