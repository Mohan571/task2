
const {Sequelize,sequelize}=require('../connection')

const pressRelease=sequelize.define('pressRelease',{
    title:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false   
    },
    date:{
        type:Sequelize.DataTypes.DATE,
        allowNull:false
    },
    description:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false
    },
    status:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull:false,
        defaultValue:0
    },
    isDeleted:{
        type:Sequelize.DataTypes.INTEGER,
        defaultValue:1
    }
},{
    freezeTableName:true
})

pressRelease.findById=async(prId)=>{
    return Product.findByPk(prId);
}

pressRelease.fetchAll=async()=>{
    return pressRelease.findAll({where:{isDeleted:1}});
}

pressRelease.newPr=async(pressReleaseData)=>{
    return pressRelease.create(pressReleaseData)
}

pressRelease.releasePr=async(prId)=>{
    return pressRelease.update({status:1},{where:{id:prId}})
}

pressRelease.deletePr=async(prId)=>{
    return pressRelease.update({isDeleted:0},{where:{id:prId}})
}


module.exports=pressRelease