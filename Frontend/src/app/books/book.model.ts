export class BookModel{
    constructor(
        public bookName: string|null,
        public bookAuthor: string|null,
        public bookGenre: string|null,
        public imageUrl:string|null){}
}