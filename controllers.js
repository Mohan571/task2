const pressRelease=require('./models/pressRelease')

const authenticateJWT=require('./middlewares/jwtAuth')


exports.getAllPR=async (req,res)=>{
    try{
        const result=await pressRelease.fetchAll();

        res.json(result)
    }
    catch{
        res.json({err:"error in fetching the data"})
    }
}

exports.postNewPR=async (req,res)=>{

    const pressReleaseData={
        title:req.body.title,
        date:req.body.date,
        description:req.body.description
    }
    try{
     
 
     const result=await pressRelease.newPr(pressReleaseData)
 
     res.json({status:"success",msg:{result}})
    }
    catch{
 
         res.json({err:"sorry data is not posted "});
    }
 }


 exports.postRelease=async (req,res)=>{
    try{
        const update=await pressRelease.releasePr(req.params.prId);
    
         res.send(update)
    }
    catch{
        res.json({err:"Err in realeasing press"})
    }
    
}

exports.deletePR=async(req,res)=>{
    try{
        const deleted=await pressRelease.delete(req.params.prId);
        res.send("successfully deleted")

    }
    catch{
        res.json({err:"error in deleting"})
    }
}