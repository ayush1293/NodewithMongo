const mongoose = require("mongoose")

const restaurantSchema = new mongoose.Schema({
    customer_name : {
        type: String,
        required: true
    },
    customer_order : {
            type : String,
            required: true
    },
    bill_amount : {
        type : Number,
        required: true
    }
});

module.exports = mongoose.model('Schema_1',restaurantSchema)