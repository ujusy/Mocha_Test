var expect = require('chai').expect;
var sqlite3 = require('sqlite3').verbose();
const assert = require('assert');

read_db = () =>{
    var db = new sqlite3.Database('./test.db',(err)=>{
    db.all('select * from memeber', (err, data)=>{
        if(err) console.log(err);
        else console.log(data);
    });
});
}

it('test', async function() {
        this.timeout(3000);
        read_db((data) => {
            expect(result[0]['id']).to.equal('soso');
            expect(result[0]['pass']).to.equal('1234');
        })
    
});