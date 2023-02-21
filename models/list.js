const mongoose = require('mongoose')

const learningSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true
    },
    channel: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        enum: [1,2,3,4,5],
        required: true
    },
    status: {
        type: String,
        enum: ["In progress", "Not yet started", "Done"],
        default: "Not yet started",
    }
})

module.exports = mongoose.model('Lists', learningSchema)