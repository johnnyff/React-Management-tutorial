const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/api/customers',(req,res)=>{
    console.log("check111");
    res.send([{
        'id':1,
        'image' : 'https://placeimg.com/64/64/1',
        'name':'jame',
        'birthday':'945685',
        'gender':'male',
        'job':'student'
      },
      {
        'id':2,
        'image' : 'https://placeimg.com/64/64/2',
        'name':'olivia',
        'birthday':'997124',
        'gender':'female',
        'job':'doctor'
      },
      {
        'id':3,
        'image' : 'https://placeimg.com/64/64/3',
        'name':'Jamy',
        'birthday':'000001',
        'gender':'male',
        'job':'student'
      }

    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));