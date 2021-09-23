export class AuthorModel{
    constructor(
        public authorName: string|null,
        public bookName: string|null,
        public bookGenre: string|null,
        public imageUrl:string|null){}
}