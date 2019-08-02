const express = require('express')
const router = express.Router()
const Partner = require('../../models/partner')
const Offer = require('../../models/offer')

router.get('/api/offers/:partner_id', async (req, res)=>{
    try{
        const partner = await Partner.findById(req.params.partner_id)

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