const Sequelize=require('sequelize')

const sequelize=new Sequelize('techCurve','root','AMma@143',{
    dialect:'mysql'
});

module.exports={Sequelize,sequelize}