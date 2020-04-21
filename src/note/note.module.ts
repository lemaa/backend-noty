import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NoteService } from './note.service';
import { NoteController } from './note.controller';
import { NoteSchema } from './schemas/note.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Note', schema: NoteSchema }])
      ],
  providers: [NoteService],
  controllers: [NoteController]
})
export class NoteModule {}
