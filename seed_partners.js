const fs = require('fs')
// const Offer = require('./models/offer')
const Partner = require('./models/partner')
const connectDB = require('./db/mongoose')

connectDB()
const jsonBuffer = fs.readFileSync('fave_partners.json')
const data = JSON.parse(jsonBuffer.toString())

// console.log(data.slice(0,2),"original")

 const upload =  () => {
    data.forEach(async (partner) => {
        try{
            // partnerExisting = await Partner.findOne({name: offer.company_name})

                newP = new Partner(partner)
                await newP.save()
                // console.log(newP.company_id)
        }catch(e){
            console.log(e)

        }
    });
    return console.log('finished')
}


upload()
