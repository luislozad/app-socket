import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
    user: String,
    date: {
        type: Date,
        default: Date.now
    },
});

const User = mongoose.model('user', schema);

export default User;