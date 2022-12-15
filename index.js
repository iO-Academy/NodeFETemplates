const express = require('express')
const exphbs = require('express-handlebars');

const app = express()
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

const port = 3000

app.get('/', (req, res) => {
    const context = {title:"Front end rendered HTML!", content: "Using this format you can inject data into the page, usually this would come from a DB."}
    res.render('home', context);
})

app.listen(port)