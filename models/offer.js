const mongoose = require('mongoose')

const offerSchema = mongoose.Schema({
    partner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Partner'
      },
    payment_gateways: [
        {
        type: String
        }
    ],
    class_session_ids: [{
        type: String
    }],
    has_active_class_session: {
        type: Boolean
    },
    city_tag_ids: [{
        type: Number
    }],
    hotness_by_grpv: {
        type: Number
    },
    keywords: {
        type: String
    },
    show_cancellation_policy: {
        type: Boolean
    },
    hotness_by_purchase_count: {
        type: Number
    },
    tag_list: [{
        type: String
    }],
    travel_duration_tag_ids: [{
        type: Number
    }],
    remaining_daily_capacity: {
        type: Number
    },
    purchases_count: {
        type: Number
    },
    cancellation_policy: {
        type: String
    },
    created_at: {
        type: String
    },
    category_type: {
        type: String
    },
    level_text: {
        type: String
    },
    outlet_names: [{
        type: String
    }],
    redemption_instructions: {
        type: String
    },
    description: {
        type: String
    },
    company_average_rating: {
        type: Number
    },
    indexed_at: {
        type: String
    },
    share: {
            copy:{
                type: String
            },
            url: {
                type: String
            }},
    company_name: {
        type: String
    },
    fine_print: {
        type: String
    },
    listing_type: {
        type: String
    },
    male: {
        type: Boolean
    },
    city_id: {
        type: Number
    },
    last_week_purchases_count: {
        type: Number
    },
    fee_currency: {
        type: String
    },
    tags: {
        type: String
    },    
    redemption_barcode_type: {
        type: String
    },
    collections_ordering:[{
        collection_id: {
            type: Number
        },
        order: {
            type: Number
        }
    }],
    app_name:{
        type:String
    },
    advance_booking_hours: {
        type: String
    },
    updated_at: {
        type: String
    },
    thumbnail: {
        type: String
    },
    company_id: {
        type: Number
    },
    gender: {
        type: String
    },
    last_day_purchases_count: {
        type: Number
    },
    name: {
        type: String
    },
    redemption_method: {
        type: String
    },
    outlets: [{
        activities: [
            {
                type: String
            }
        ],
        address:{
            type: String
        },
        address_latitude: {
            type: Number
        },
        address_longitude: {
            type: Number
        },
        city_id: {
            type: Number
        },
        company: {
            type: String
        },
        company_id: {
            type: Number
        },
        deleted_at: {
            type: String
        },
        email: {
            type: String
        },
        fave_payments: [{
            type: String
        }],
        favorited_count: {
            type: Number
        },
        featured: {
            type: Boolean
        },
        has_fave_payment:{
            type: Boolean
        },
        id: {
            type: Number
        },
        name: {
            type: String
        },
        offers_count: {
            type: Number
        },
        status: {
            type: String
        },
        telephone: {
            type: String
        },
        town_name: {
            type: String
        }
    }],
    outlet_ids: [{
        type: Number
    }],
    any_active_outlets: {
        type: Boolean
    },
    today_purchases_count: {
        type: Number
    },
    validity_days: {
        type: Number
    },
    last_week_impressions_count: {
        type: Number
    },
    rectangular_thumbnail: {
        type: String
    },
    outlet: {
        address:{
            type: String
        },
        address_latitude: {
            type: Number
        },
        address_longitude: {
            type: Number
        },
        company: {
            average_rating:{
                type: Number
            },
            created_at: {
                type: String
            },
            description: {
                type: String
            },
            email: {
                type: String
            },
            featured_image: {
                type: String
            },
            featured_thumbnail_image: {
                type: String
            },
            gallery_images: [{
                type: String
            }],
            id: {
                type: Number
            },
            keywords: {
                type: String
            },
            links: [{
                key: {
                    type: String
                },
                url: {
                    type: String
                }
            }],
            logo_url: {
                type: String
            },
            name:{
                type: String
            },
            outlets:[{
                merch_comm_tax: {
                    type: Boolean
                },
                app_id: {
                    type: Number
                },
                keywords: {
                    type: String
                },
                person_in_charge: {
                    type: String
                },
                share_url: {
                    type: String
                },
                alipay_opt_in: {
                    type: Boolean
                },
                has_fave_payment: {
                    type: Boolean
                },
                favorited_count: {
                    type: Number
                },
                created_at: {
                    type: String
                },
                featured_label: {
                    type: String
                },
                cashback_policy_id: {
                    type: Number
                },
                gmap_address: {
                    type: String
                },
                finance_account_id: {
                    type: Number
                },
                takeaway_packaging_amount: {
                    type: String
                },
                remote_id: {
                    type: Number
                },
                takeaway_status: {
                    type: String
                },
                city_id: {
                    type: Number
                },
                town_id:{
                    type: Number
                },
                self_onboard: {
                    type: Boolean
                },
                self_onboarding_status: {
                    type: String
                },
                updated_at: {
                    type: String
                },
                town_name: {
                    type: String
                },
                food_ordering_tax_calculation_type:{
                    type: String
                },
                alipay_store_status: {
                    type: String
                },
                sms_telephone: {
                    type: String
                },
                company_id: {
                    type: Number
                },
                telephone: {
                    type: String
                },
                address: {
                    type : String
                },
                check_out_time: {
                    type: String
                },
                deleted_at:{
                    type: String
                },
                name: {
                    type: String
                },
                takeaway_packaging_type: {
                    type: String
                },
                neighbourhood_string_old: {
                    type: String
                },
                email:{
                    type: String
                },
                dinein_status:{
                    type: String
                },
                postal_code: {
                    type: String
                },
                offers_count: {
                    type: Number
                },
                check_in_time: {
                    type: String
                },
                google_place_id: {
                    type: String
                },
                status: {
                    type: String
                },
                shopping_mall_id: {
                    type: Number
                },
                favepay_inactive_reason: {
                    type: String
                },
                receipt_code_type: {
                    type: String
                },
                address_latitude: {
                    type: Number
                },
                address_longitude: {
                    type: Number
                },
                slug: {
                    type: String
                },
                person_in_charge_phone: {
                    type: String
                },
                promocode_announcement_display_cap: {
                    type: Number
                },
                gst: {
                    type: Boolean
                },
                pos_vendor_id: {
                    type: Number
                },
                impressions_count: {
                    type: Number
                },
                neighbourhood_id:{
                    type: Number
                },
                food_prep_time: {
                    type: String
                },
                featured: {
                    type: Boolean
                },
                id: {
                    type: Number
                },
                event_outlet: {
                    type: String
                },
                order: {
                    type: Number
                }
            }],
            phone: {
                type: String
            },
            premise_type: {
                type: String
            },
            profile_icon_image:{
                type: String
            },
            reviews: [{
                comment:{
                    type: String
                },
                created_at:{
                    type: String
                },
                name: {
                    type: String
                },
                rating:{
                    type: Number
                },
                review_reply: [{
                    comment: {
                        type: String
                    },
                    company_manager_name: {
                        type: String
                    },
                    created_at: {
                        type: String
                    }
                }]
            }],
            reviews_count: {
                type: Number
            },
            slug: {
                type: String
            },
            tags: [{
                type: String
            }]
        },
        created_at: {
            type: String
        },
        email: {
            type: String
        },
        favorited_count: {
            type: Number
        },
        featured: {
            type: Boolean
        },
        featured_label: {
            type: String
        },
        gmap_address: {
            type: String
        },
        has_fave_payment: {
            type: Boolean
        },
        id: {
            type: Number
        },
        impressions_count: {
            type: Number
        },
        keywords: {
            type: String
        },
        menu_images: [{
            type: String
        }],
        name: {
            type: String
        },
        neighbourhood: {
            type: String
        },
        offers_count: {
            type: Number
        },
        status: {
            type: String
        },
        telephone: {
            type: String
        },
        town_name: {
            type: String
        },
        updated_at: {
            type: String
        }
    },
    first_time_user: {
        type: Boolean
    },
    activity_status: {
        type: String
    },
    category_name: {
        type: String
    },
    loyalty_reward:{
        type: Boolean
    },
    sponsored_voucher_details: {
        cta_link:{
            type: String
        },
        cta_text: {
            type: String
        }
    },
    hotness: {
        type: Number
    },
    purchasable: {
        type: Boolean
    },
    image: {
        type: String
    },
    activity_type:{
        type: String
    },
    what_you_get: {
        type: String
    },
    class_sessions: [{
        early_cancellation_date: {
            type: String
        }, 
        end_datetime: {
            type: String
        },
        id: {
            type: Number
        },
        remaining_slots: {
            Number
        },
        start_datetime: {
            type: String
        }
    }],
    voucher_detail: {
        end_datetime: {
            type: String
        },
        purchase_slots: {
            type: Number
        },
        refund_end_datetime: {
            type: String
        },
        start_datetime:{
            type: String
        }
    },
    city_name: {
        type: String
    },
    discounted_price_cents: {
        type: Number
    },
    company_description: {
        type: String
    },
    status: {
        type: String
    },
    first_company_offer: {
        type: Boolean
    },
    live_at: {
        type: String
    },
    last_company_offer:{
        type: Boolean
    },
    purchase_details: {
        aabig_points_details:{
            type: String
        },
        apply_promo_text: {
            type: String
        },
        credit_used: {
            type: String
        },
        credit_used_cents: {
            type: Number
        },
        currency: {
            type: String
        },
        discounted_price: {
            type: String
        },
        discounted_price_cents: {
            type: Number
        },
        final_price: {
            type: String
        },
        final_price_cents: {
            type: Number
        },
        is_free: {
            type: Boolean
        },
        max_slots_allowed: {
            type: Number
        },
        original_price: {
            type: String
        },
        payment_airasia_big_points_amount_cents: {
            type: Number
        },
        payment_airasia_big_points_count: {
            type: Number
        },
        payment_cash_amount_cents: {
            type: Number
        },
        payment_credit_amount_cents: {
            type: Number
        },
        payment_promo_code_amount_cents:{
            type: Number
        },
        promo_code: {
            type: String
        },
        promo_code_id: {
            type: Number
        },
        promo_savings: {
            type: String
        },
        promocode_cashback_details: {
            type: String
        },
        remove_promo_text: {
            type: String
        },
        savings: {
            type: String
        },
        savings_percentage: {
            type: Number
        },
        slots: {
            type: Number
        },
        total_chargeable_amount: {
            type: String
        },
        total_chargeable_amount_minor_value: {
            type: Number
        },
        total_chargeable_amount_value: {
            type: String
        },
        travel_acknowledgment_required: {
            type: Boolean
        }
    },
    advance_booking_days:{
        type: String
    },
    category_id: {
        type: Number
    },
    non_cancellable_offer: {
        type: Boolean
    },
    last_purchased_at: {
        type: String
    },
    featured_thumbnail_image: {
        type: String
    },
    featured_image: {
        type: String
    },
    category_type_title: {
        type: String
    },
    city_tag_names: [{
        type: String
    }],
    premise_type: {
        type: String
    },
    slug: {
        type: String
    },
    addresses: [{
        type: String
    }],
    preference_tag_ids: [{
        type: String
    }],
    default_cancellation_policy: {
        type: String
    },
    available: {
        type: Boolean
    },
    status_for_marketplace: {
        type: String
    },
    validity_times: [{
        created_at: {
            type: String
        },
        day: {
            type: String
        },
        deleted_at: {
            type: String
        },
        eagle_activity_id: {
            type: Number
        },
        end_time: {
            type: String
        },
        id: {
            type: Number
        },
        start_time: {
            type: String
        },
        updated_at: {
            type: String
        },
        valid_day: {
            type: Boolean
        }

    }],
    collections: [{
        cards_no: {
            type: Number
        },
        collection_offers_title: {
            type: String
        },
        description: {
            type: String
        },
        id: {
            type: Number
        },
        image: {
            type: String
        },
        name: {
            type: String
        },
        offers_count: {
            type: Number
        }
    }],
    tag_ids: [{
        type: Number
    }],
    end_date: {
        type: String
    },
    tag_names: [{
        type: String
    }],
    original_price_with_adjustment_cents: {
        type: Number
    },
    outlets_count: {
        type: Number
    },
    schedule: {
        end_datetime: {
            type: String
        },
        purchase_slots: {
            type: Number
        },
        redeemable_from: {
            type: String
        },
        redeemable_to: {
            type: String
        },
        refund_end_datetime: {
            type: String
        },
        start_datetime: {
            type: String
        },
        user_remaining_purchases: {
            type: String
        }
    },
    impressions_count: {
        type: Number
    },
    reservation_requirement_type: {
        type: String
    },
    daily_capacity: {
        type: Number
    },
    original_price_cents: {
        type: Number
    },
    amenities: [{
        image_url: {
            type: String
        },
        name: {
            type: String
        }
    }],
    translated_level_text: {
        type: String
    },
    female: {
        type: Boolean
    },
    show_fave_promise: {
        type: Boolean
    },
    company_enabled: {
        type: Boolean
    },
    neighbourhoods: [{
        type: String
    }],
    last_day_impressions_count: {
        type: Number
    },
    all_access: {
        type: Boolean
    },
    gallery_images: [{
        type: String
    }],
    similar_tag_ids: [{
        type: String
    }],
    multiple_locations: [{
        lat: {
            type: Number
        },
        lon: {
            type: Number
        }
    }],
    id: {
        type: Number
    },
    advanced_booking_requirement: {
        type: String
    },
    town_names: [{
        type: String
    }],
    company_most_purchased_offer: {
        type: Boolean
    },
    start_date: {
        type: String
    },
    tips: {
        type: String
    },
    faves_count: {
        type: Number
    }
})
const Offer = mongoose.model('Offer', offerSchema )

module.exports = Offer

