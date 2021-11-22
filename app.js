//Importando módulos
const express = require('express');
const path = require('path')

//Instanciando módulos
const app = express();

//Definindo uma porta para ser usada na conexão
const port = 3000;

//Indicando motor de engine
app.set('view engine', 'ejs');

//Onde serão buscadas as páginas da aplicação
app.set('views', path.join(__dirname,'views'));


//Definindo a rota para página principal
app.get('/', function(req,res){
    res.render('index')
})

//Inicializando o servidor
app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})

