import { Document } from 'mongoose';

export interface Note extends Document {
    readonly color: string;
    readonly title: string;
    readonly text: string;
    readonly link: string;
    readonly tags: [string];
    readonly createdAt: Date;
}