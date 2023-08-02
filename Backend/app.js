const express = require('express');
const connectDB = require('./config/db');

const cors = require('cors');  // It helps in controlling which external origins are 
                                //allowed to access resources (like APIs) on your server.

const app = express();

app.use(cors());
app.use(express.json()); // It is essential when handling JSON data sent by clients, particularly in POST or PUT requests, 



// Connect Database
connectDB();


// niche wale do jo hai us me hum path dere  lekin folder ka nam likhana jaruri hai  aap.use me 
const articlesRouter = require('./routes/articles');
app.use('/articles', articlesRouter);


// below will handle error if we got any error while dealing with path
const errorMiddleware = require('./middleware/error');
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));