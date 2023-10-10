
const pressRelease=require('./models/pressRelease')

exports.getAllPR=async (req,res)=>{
    try{
        const result=await pressRelease.findAll();

        res.json(result)
    }
    catch{
        res.json({err:"error in fetching the data"})
    }
}

exports.postNewPR=async (req,res)=>{
    try{
     const Title=req.body.Title
     const Date=req.body.Date
     const Description=req.body.Description
 
     const result=await pressRelease.create({
         Title:Title,
         Date:Date,
         Description:Description
     })
 
     res.json({status:"success",msg:{result}})
    }
    catch{
 
         res.json({err:"sorry data is not posted "});
    }
 }


 exports.postRelease=async (req,res)=>{
    try{
        const update=await pressRelease.update({status:1},{where:{id:req.params.prId}});
    
         res.send(update)
    }
    catch{
        res.json({err:"Err in realeasing press"})
    }
    
}

exports.deletePR=async(req,res)=>{
    try{
        const deleted=await pressRelease.destroy({where:{id:req.params.prId}});
        res.send("successfully deleted")

    }
    catch{
        res.json({err:"error in deleting"})
    }
}