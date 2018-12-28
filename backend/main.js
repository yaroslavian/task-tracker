const Express = require('express');
const app = new Express();

const PORT = 3000;

app.get('/', (req, res) => res.send('<h1>Welcome to the simple task tracker!</h1>'));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));