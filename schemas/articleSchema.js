const mongoose = require(`mongoose`)

const articleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    likesCount: {
        type: Number
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Article', articleSchema)