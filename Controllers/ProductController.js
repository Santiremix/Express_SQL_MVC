const db = require('../config/database');


const ProductController = {
    create(req, res){
            let sql = 'CREATE TABLE Products(id int AUTO_INCREMENT,title VARCHAR(255), price VARCHAR(255), PRIMARY KEY(id))'
        db.query(sql,(err,result)=> {
            if(err) throw err;
            console.log(result);
            res.send('New table created...');
            })
    },

    addProduct(req, res){
            let sql = `INSERT INTO Products (title, price) values
                ('${req.body.title}', '${req.body.price}');`;
            db.query(sql, (err, result) => {
                if (err) throw err;
                console.log(result);
                res.send("New product added!");
                });
    },

    actProduct(req, res){
            let newTitle = req.body.title;
            let sql = `UPDATE Products SET title = '${newTitle}' WHERE id = ${req.params.id}`;
            db.query(sql, (err,result)=> {
                if(err) throw err;
                res.send('Product updated...')
            })
    
    },
    showProd(req, res){
            let sql = 'SELECT * FROM Products';
            db.query(sql,(err,result)=> {
                if(err) throw err;
                res.send(result)
            })
    },
    selectWithId(req, res){
            let sql = `SELECT * FROM Products WHERE id = ${req.params.id}`;
            db.query(sql,(err,result)=> {
                if(err) throw err;
                res.send(result)
            })
    },
    orderProducts(req, res){
            let sql = `SELECT * FROM Products ORDER BY price DESC`;
            db.query(sql,(err,result)=> {
                if(err) throw err;
                res.send(result)
            })
    },
    showProdByName(req, res){
            let sql = `SELECT * FROM Products WHERE title = ${req.params.title}`;
            console.log(req.params.title)
            db.query(sql,(err,result)=> {
                if(err) throw err;
                res.send(result)
            })
    },
    deleteProdById(req, res){
            let sql = `DELETE FROM Products WHERE id = ${req.params.id}`;
            db.query(sql, (err,result)=> {
                if(err) throw err;
                res.send('Product deleted')
            })
    }
}

module.exports = ProductController;