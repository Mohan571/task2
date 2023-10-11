const express=require('express')

const router=express.Router()

const authenticateJWT=require('./middlewares/jwtAuth')

const {check,validationResult}=require('express-validator')


const controllers=require('./controllers')



router.get('/getAllPR',controllers.getAllPR)

router.post('/postNewPR',authenticateJWT,
[
    check('Title')
    .notEmpty()
    .withMessage("Title cannot be empty"),
    check('Date')
    .notEmpty()
    .withMessage("date cannot be empty")
],controllers.postNewPR)

router.post('/postRelease/:prId',controllers.postRelease)

router.post('/deletePR/:prId',authenticateJWT,controllers.deletePR)


module.exports=router
