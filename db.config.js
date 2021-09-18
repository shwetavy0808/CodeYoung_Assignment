module.exports = {

    host : "127.0.0.1" ,
    user : "root",
    pw : "mysql",
    dialect : "mysql"  ,
    databaseName : "textTranslator",
    
    pool : {
        maximum : 30 ,
        minimum : 0,
        acquire : 30000,
        idle : 15000
    }

};