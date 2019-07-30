const mongoose = require('mongoose')


const merchantSchema = mongoose.Schema({
    company_id: {
        type: Number
    },
    company_name: {
        type: String,
        trim: true
    },    
    description: {
        type: String,
        trim: true,
    },
    discount: {
        type: Number
    },
    discounted_price: {
        type: String,
        trim: true
    },
    discounted_price_cents: {
        type: String,
        trim: true
    },
    distance: {
        type: String,
        trim: true
    },
    end_date: {
        type: String,
        trim: true
    },
    featured_thumbnail_image: {
        type: String,
        trim: true
    },
    hotness: {
        type: Number
    },
    id: {
        type: Number
    },
    image: {
        type: String,
        trim: true
    },
    last_purchased_at:{
        type: String,
        trim: true
    },
    latitude: {
        type: Number
    },
    longitude: {
        type: Number
    },
    name: {
        type: String,
        trim: true
    },
    original_price:{
        type: String,
        trim: true
    },
    original_price_cents: {
       type: Number
    },
    outlet_names: [
        {
        type: String,
        trim: true}
    ],
    outlets_count: {
        type: Number
    },
    purchases_count: {
        type: Number
    },
    rectangular_thumbnail: {
        type: String,
        trim: true
    },
    remaining_daily_capacity: {
        type: Number
    },
    slug: {
        type: String,
        trim: true
    },
    start_date: {
        type: String,
        trim: true
    },
    thumbnail: {
        type: String,
        trim: true
    },
    time_diff: {
        type: Number
    },
    today_purchases_count: {
        type: Number
    },
    url: {
        type: String,
        trim: true
    },
    category: {
        type: String,
        trim: true
    }
},{
    timestamps: true
})
const Merchant = mongoose.model('Merchant', merchantSchema )

module.exports = Merchant