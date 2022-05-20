const db = require('../config/database');

const CategoriesController = {
    create(req, res){
            let sql = 'CREATE TABLE categories(id int AUTO_INCREMENT,title VARCHAR(255), PRIMARY KEY(id))'
        db.query(sql,(err,result)=> {
            if(err) throw err;
            console.log(result);
            res.send('New table created...')
            })
    },

    addCategory(req, res){
            let sql = `INSERT INTO categories (title) values
                ('${req.body.title}');`;
            db.query(sql, (err, result) => {
                if (err) throw err;
                console.log(result);
                res.send("New category added!");
                });
    },

    updateCategory(req, res){
            let newTitle = req.body.title;
            let sql = `UPDATE categories SET title = '${newTitle}' WHERE id = ${req.params.id}`;
            db.query(sql, (err,result)=> {
                if(err) throw err;
                res.send('Category updated...')
            })
    },

    showCategories(req, res){
            let sql = 'SELECT * FROM categories';
            db.query(sql,(err,result)=> {
                if(err) throw err;
                res.send(result)
            })
    },
    selectCatById(req, res){
            let sql = `SELECT * FROM categories WHERE id = ${req.params.id}`;
            db.query(sql,(err,result)=> {
                if(err) throw err;
                res.send(result)
            })
    },
    
}

module.exports = CategoriesController;