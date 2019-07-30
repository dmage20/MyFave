const fs = require('fs')
// const Offer = require('./models/offer')
const Partner = require('./models/partner')
const connectDB = require('./db/mongoose')

connectDB()
const jsonBuffer = fs.readFileSync('myfave_merchants.json')
const data = JSON.parse(jsonBuffer.toString())

// console.log(data.slice(0,2),"original")

 const upload =  () => {
    data.forEach(async (merchant) => {
        try{
            partner = await Partner.findOneAndUpdate({company_id: merchant.company_id}, { $set: { category : merchant.category } })
            

        }catch(e){
            console.log(e)

        }
    });
}


upload()