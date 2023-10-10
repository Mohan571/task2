
const {Sequelize,sequelize}=require('../connection')

const pressRelease=sequelize.define('pressRelease',{
    Title:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false   
    },
    Date:{
        type:Sequelize.DataTypes.DATE,
        allowNull:false
    },
    Description:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false
    },
    status:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull:false,
        defaultValue:0
    }
},{
    freezeTableName:true
})



module.exports=pressRelease