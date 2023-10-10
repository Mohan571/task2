const express=require('express')

const router=express.Router()

const controllers=require('./controllers')



router.get('/getAllPR',controllers.getAllPR)

router.post('/postNewPR',controllers.postNewPR)

router.post('/postRelease/:prId',controllers.postRelease)

router.delete('/deletePR/:prId',controllers.deletePR)


module.exports=router
