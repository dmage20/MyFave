const mongoose = require('mongoose')

const partnerSchema = mongoose.Schema({
    activities: [
        {
        type: String
        }
    ],
    company_id: {
        type: Number
    },
    app_id: {
        type: Number
    },
    campaigns: [
        {
            type: String
        }
    ],
    city: {
        type: String
    },
    city_id: {
        type: Number
    },
    created_at: {
        type: String
    },
    deleted_at: {
        type: String
    },
    description: {
        type: String
    },
    email: {
        type: String
    },
    enabled: {
        type: Boolean
    },
    facebook: {
        type: String
    },
    fave_average_rating: {
        type: String
    },
    fave_rating_count: {
        type: Number
    },
    favorited_count: {
        type: Number
    },
    has_company_wallet: {
        type: Boolean
    },
    home_screen_featured: {
        type: Boolean
    },
    icon_background: {
        type: String
    },
    logo_id: {
        type: String
    },
    name: {
        type: String
    },
    outlets: [
        {
            type: String
        }
    ],
    price_class: {
        type: String
    },
    profile_image_id: {
        type: String
    },
    reservations: [
        {
            type: String
        }
    ],
    reviews: [
        {
            type: String
        }
    ],
    slug: {
        type: String
    },
    status: {
         type: String
    },
    updated_at: {
        type: String
    },
    website: {
        type: String
    },
    category: {
        type: String
    }
})
const Partner = mongoose.model('Partner', partnerSchema )

module.exports = Partner
