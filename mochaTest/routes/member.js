var express = require('express');
const util = require('../module/utils');
const statusCode = require('../module/statusCode');
const resMessage = require('../module/responseMessage');
var sqlite3 = require('sqlite3').verbose();
var router = express.Router();
const path = require('path');
const dbPath = path.resolve(__dirname, 'test.db');

var db = new sqlite3.Database(dbPath,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('success');
    }
});
router.get('/',(req, res, next)=>{
    const query = `SELECT * FROM memeber`;
    db.serialize();
    db.all(query,(err,row)=>{
        console.log(row);
        if(err) callback(err)
        else callback(data)
    });

})

module.exports = router;
