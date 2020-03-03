import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    roles: {
        type: [String],
        default: 'basic',
        enum: ["basic", "supervisor", "admin", "superAdmin"]
    },
});