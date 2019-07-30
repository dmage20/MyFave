const fs = require('fs')
const Offer = require('./models/offer')
const Partner = require('./models/partner')
const connectDB = require('./db/mongoose')

connectDB()
const jsonBuffer = fs.readFileSync('fave_offers.json')
const data = JSON.parse(jsonBuffer.toString())

// console.log(data.slice(2,3),"original")

 const upload =  () => {
    data.forEach(async (offer) => {
        try{
            partnerExisting = await Partner.findOne({company_id: offer.company_id})
            if (partnerExisting){
                newO = new Offer({
                    ...offer,
                    partner: partnerExisting._id
                })
                await newO.save()
            } else{
                console.log('no partner found')
            }
        }catch(e){
            console.log(e)

        }
    });
    return console.log('finished')
}


upload()
