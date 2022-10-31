const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const postRouter = require('../routes/postRouter');
const userRouter = require('../routes/userRouter');

//middlewares
app.use(bodyParser.json());
app.use(cors());

//routes
app.use('api/posts', postRouter);
app.use('api/users', userRouter);

//api
app.get('/api', (req, res) => {
    res.send('Welcome to the API');
});

//serve static assets if in production
if(process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('view/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'view', 'build', 'index.html'));
    });
}
/*static files
app.use(express.static(path.join(__dirname, './view/build')));*/

module.exports = app;
