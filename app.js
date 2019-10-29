const express = require('express');
const bodyParser = require('body-parser');
const cors =require('cors')
const app = express();

const port = process.env.PORT || 3000;
let hostAvl=false;
if(process.env && process.env.HOST && process.env.HOST.trim()==''){
    hostAvl=true;
}
const host = process.env.HOST || 'localhost';
if(process.argv.length < 4){
 console.warn(" throw Error('Please enter deployment ip:port as well as deployment url')");
}
var url = process.argv[2] || '127.0.0.1:8080'
process.env.url = url
var parts = url.split(':')
const dialogRouter = require('./routes/dialogRouter');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var routes = require('./routes/router'); 
// app.use('/api', dialogRouter);
routes(app)

// app.all('/', routes);
// app.get('/', (req, res) => {
//   res.send('Welcome to Youtube-backend');
// });


if(process.argv.length < 4){
  if(hostAvl){
    app.listen(port, host, () => {
    console.log(`Running on port ${host+':'+port}`);
  });
  }else{
    app.listen(port, () => {
      console.log(`Running on port ${port}`);
    }
    )
  }
}else{
  app.listen(+parts[1], parts[0], () => {
    console.log(`Running on port ${host+':'+port}`);
  });
}

