var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

//conectar
MongoClient.connect(url, function(err,db){
    if (err) throw err
    var dbo = db.db('Database Prueba')
    //crear coleccion
    dbo.createCollection('colecion de prueba', function(err,db){
        if (err) throw err
        console.log('DB created')
    })
});