import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NoteModule } from './note/note.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://192.168.99.104:27017/notedb', { useNewUrlParser: true }),
    NoteModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
