const mongoose = require('mongoose');
// const { ReviewSchema } = require('./Reviews');

const MovieSchema = mongoose.Schema({
    title: { type: String, required: [true, 'El título es requerido'] },
    review: { type: String },
    // reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
    rating: { type: Number, min: 1, max: 5 },
    createdAt: {type: Date, default: Date.now}
});

const MovieModel = mongoose.model('Movie', MovieSchema);

module.exports = { MovieSchema, MovieModel };