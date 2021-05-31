const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    comment: {
        type: String,
        required: true,
        min: 1
    },
    author: {
        type: String,
        required: true
    },
    postId: {
        type: Number,
        required: true,
    },
    parentId: {
        type: Number,
    },
    upvote: {
        type: Number,
        default: 0
    },
    savedBy: {
        type: Array,
    },
    reportedBy: {
        type: Array,
    }

});

module.exports = mongoose.model('Comment', commentSchema);
