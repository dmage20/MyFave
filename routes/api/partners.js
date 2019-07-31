const express = require('express')
const router = express.Router()
const Partner = require('../../models/partner')
const Offer = require('../../models/offer')
const mongoose = require('mongoose')
// get all partners
router.get('/api/partners', async (req, res)=>{
    categories = ["eat", "beauty", "massage", "activity", "kid", "fit", "service", "travel"]
    options = {}
    filter = {}
    try{
        const max = parseInt(req.query.limit)
        if (max && typeof(max) == 'number'){
            options.limit = max
        } 
        if( categories.includes(req.query.category) ) {
            filter.category = req.query.category
        }
        partners = await Partner.find(filter,null,options)
        res.send(partners)
    }catch(e){
        res.status(400).send(e)
    }
})
// find a partner by name
router.get('/api/partners/:name', async (req, res)=>{
    try{
        const name = req.params.name.replace(/\-/g, ' ').split(' ').map((word)=>{
            return word[0].toUpperCase() + word.slice(1)
        }).join(' ')
        
        const partner = await Partner.findOne({name: name })
        await partner.populate({
            path: 'offers'
        }).execPopulate()
        if (!partner) {
            return res.status(404).send({error: 'partner could not be found by name'})
        }
        res.send({ partner, offers: partner.offers })
    }catch(e){
        res.status(400).send(e)
    }
})
module.exports = router