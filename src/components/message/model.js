import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
    user: String,
    message: {
        type: String,
        required: true
    },
    date: Date,
});

const Model = mongoose.model('Message', schema);

export default Model;