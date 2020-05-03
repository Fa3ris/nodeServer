const express = require('express');

const app = new express();

app.get('/', (req, res) => {

  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello, World!');
})
.get('/hero/:id', (req, res) => {

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  
  // res.send(`Vous avez demandé le héro ${req.params.id}`);
  
  // render view with EJS template
  res.render('hero.ejs', {id : req.params.id });
})

// middleware chargé de base pour servir des fichiers le chemin
.use(express.static(__dirname + '/static'))

// réponse par défaut
.use((req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.send('Je ne connais pas ce chemin');
}

);


app.listen(8080);