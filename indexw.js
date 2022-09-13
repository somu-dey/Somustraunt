var express = require('express')
var ejs = require('ejs')
const bodyParser = require('body-parser');
var mysql = require('mysql');
var session=require('express-session');
var app = express();

app.use(express.static('public'))
app.set('view engine', 'ejs');
app.listen(8080)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret:"secret"}))

app.get('/', function (req, res) {

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "Project"
    })
    con.query("SELECT* FROM products",(err,result)=>{
    res.render('pages/index',{result:result});
    })
});

app.post('add_to_cart', function(req,res)
{
    var id =req.body.id;
    var name=req.body.name;
    var price=req.body.price;
    var sale_price=req.body.sale_price;
    var quantity=req.body.quantity;
    var image=req.body.image;
    var product={id:id,name:name,price:price,sale_price:sale_price,quantity:quantity,image:image};


});