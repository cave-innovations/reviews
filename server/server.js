const app = require('./app');
const {port} = require('./app');

app.listen(app.port, () => console.log(`Server is listening on port ${app.port}`));