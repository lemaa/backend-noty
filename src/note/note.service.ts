import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Note } from './interfaces/note.interface';
import { CreateNoteDTO } from './dto/create-note.dto';

@Injectable()
export class NoteService {
    constructor(@InjectModel('Note') private readonly noteModel: Model<Note>) { }
    // fetch all notes
    async getAllNote(): Promise<Note[]> {
        const notes = await this.noteModel.find().exec();
        return notes;
    }
    // Get a single note
    async getNote(noteID: any): Promise<Note> {
        const note = await this.noteModel.findById(noteID).exec();
        return note;
    }
    // post a single note
    async addNote(createNoteDTO: CreateNoteDTO): Promise<Note> {
        const newNote = new this.noteModel(createNoteDTO);
        return newNote.save();
    }
    // Edit note details
    async updateNote(noteID: any, createNoteDTO: CreateNoteDTO): Promise<Note> {
        const updatedNote = await this.noteModel
            .findByIdAndUpdate(noteID, createNoteDTO, { new: true });
        return updatedNote;
    }
    // Delete a note
    async deleteNote(noteID: any): Promise<any> {
        const deletedNote = await this.noteModel.findByIdAndRemove(noteID);
        return deletedNote;
    }
}