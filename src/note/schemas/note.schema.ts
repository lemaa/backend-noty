import * as mongoose from 'mongoose';

export const NoteSchema = new mongoose.Schema({
    color: String,
    title: String,
    text: String,
    link: String,
    tags: [String],
    createdAt: { type: Date, default: Date.now }
})
