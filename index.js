const app = require('./app');

const PORT = process.env.PORT || 8000;
require('dotenv').config();

//db
require('./config/database');

//start server
app.listen(PORT, () =>  console.log(`Server is running on http://localhost:${PORT}`));