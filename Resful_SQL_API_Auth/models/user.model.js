module.exports=(sequelize, Sequelize) =>{
    const User = sequelize.define("user",{   ///เหมือนกับ create table มันจะสร้างตารางและ row เอง///
        username:{
            type:Sequelize.STRING, 
        },
        email:{
            type:Sequelize.STRING, 
        },
        password:{
            type:Sequelize.STRING, 
        }
        
    })
return User;
}