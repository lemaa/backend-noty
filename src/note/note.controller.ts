import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { NoteService } from './note.service';
import { CreateNoteDTO } from './dto/create-note.dto';

@Controller('note')
export class NoteController {
    constructor(private noteService: NoteService) { }

    // add a note
    @Post('/create')
    async addNote(@Res() res, @Body() createNoteDTO: CreateNoteDTO) {
        const note = await this.noteService.addNote(createNoteDTO);
        return res.status(HttpStatus.OK).json({
            message: "Note has been created successfully",
            note
        })
    }

    // Retrieve notes list
    @Get('notes')
    async getAllNote(@Res() res) {
        const notes = await this.noteService.getAllNote();
        return res.status(HttpStatus.OK).json(notes);
    }

    // Fetch a particular note using ID
    @Get('note/:noteID')
    async getNote(@Res() res, @Param('noteID') noteID) {
        const note = await this.noteService.getNote(noteID);
        if (!note) throw new NotFoundException('Note does not exist!');
        return res.status(HttpStatus.OK).json(note);
    }

    // Update a note
    @Put('/update')
    async updateNote(@Res() res, @Query('noteID') noteID, @Body() createNoteDTO: CreateNoteDTO) {
        const note = await this.noteService.updateNote(noteID, createNoteDTO);
        if (!note) throw new NotFoundException('Note does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Note has been successfully updated',
            note
        });
    }

    // Delete a note
    @Delete('/delete/:noteID')
    async deleteNote(@Res() res, @Param('noteID') noteID) {
        const note = await this.noteService.deleteNote(noteID);
        if (!note) throw new NotFoundException('Note does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Note has been deleted',
            note
        })
    }
}