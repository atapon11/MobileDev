module.exports=(sequelize, Sequelize) =>{
    const Role = sequelize.define("roles",{   ///เหมือนกับ create table มันจะสร้างตารางและ row เอง///
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true
        },
        name:{
            type:Sequelize.STRING,
        }
      
        
    })
return Role;
}