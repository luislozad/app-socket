import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
    user_id: Schema.Types.ObjectId,
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Message = mongoose.model('message', schema);

export default Message;