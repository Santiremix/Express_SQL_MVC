const db = require('./config/database');
const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

app.use('/products', require('./routes/products'));
app.use('/categories', require('./routes/categories'));


//Levanto el servidor
app.listen(port, () => {
    console.log(`El servidor se ha levantado en el puerto ${port}`);
});

//Prueba
app.get('/', (req, res) => {
    res.send('Bienvenido')
});

//Ejercicio 1
    //Crear 2 tablas (Products y Categories)



//Creo la base de datos
app.get('/createdb',(req,res)=>{
	let sql ='CREATE DATABASE endpoints'
db.query(sql,(err,result)=>{
	if(err)throw err;
	console.log(result);
	res.send('Database created...')
	})
});





    //Endpoint que muestre todos los productos con sus categorías (NO ESTA HECHO!!!)

    // //Creo la tabla intermedia
    // app.get('/createThirdTable', (req, res) => {
    //     let sql =
    //       'CREATE TABLE interTab(id INT AUTO_INCREMENT,products_id INT,categories_id INT,PRIMARY KEY(id),FOREIGN KEY(products_id) REFERENCES Products(id) ON DELETE CASCADE,FOREIGN KEY(categories_id) REFERENCES categories(id))';
    //     db.query(sql, (err, result) => {
    //       if (err) throw err;
    //       console.log(result);
    //       res.send('interTab created...');
    //     });
    //   });

    //   //Cargo informacion en la interTab
    //   app.post("/finalTab", (req, res) => {
    //     let sql = `INSERT INTO interTab (products_id, categories_id) values
    //         ('${req.body.products_id}', '${req.body.categories_id}');`;
    //     db.query(sql, (err, result) => {
    //         if (err) throw err;
    //         console.log(result);
    //         res.send("Perfect!");
    //         });
    // });

    // //Mostrar la tabla intermedia
    // app.get('/midTable',(req,res)=> {
    //     let sql = 'SELECT * FROM interTable';
    //     db.query(sql,(err,result)=> {
    //         if(err) throw err;
    //         res.send(result)
    //     })
    // });

  

   





//Ejercicio 5




