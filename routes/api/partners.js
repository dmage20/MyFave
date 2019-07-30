const express = require('express')
const router = express.Router()
const Partner = require('../../models/partner')

router.get('/api/partners', async (req, res)=>{
    try{
        partners = await Partner.find({})
        res.send(partners)
    }catch(e){
        res.status(400).send(e)
    }
})

module.exports = router