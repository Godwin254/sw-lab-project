const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const postRouter = require('./routes/postRouter');
const userRouter = require('./routes/userRouter');

//middlewares
app.use(bodyParser.json());
app.use(cors());



//swagger configuration
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'MindGuard - API Documentation {SW DEV LAB}',
        version: '1.0.0',
    }
}

const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJsDoc(options);
//const swaggerDocs = swaggerUi.generateHTML(swaggerSpec);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/users', userRouter);
app.use('/api/posts', postRouter);

//serve static assets if in production
if(process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('view/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'view', 'build', 'index.html'));
    });
}


module.exports = app;
