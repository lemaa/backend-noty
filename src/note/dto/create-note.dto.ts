export class CreateNoteDTO {
    readonly color: string;
    readonly title: string;
    readonly text: string;
    readonly link: string;
    readonly tags: [string];
    readonly createdAt: Date;
}