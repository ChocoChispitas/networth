const express = require( 'express' );
const app = express();
var root = 'public/'
 
app.use( express.static( root ) );
app.listen( 3000, () => console.log( 'Hello world app listening on port 3000!' ) )

console.log('Server started');