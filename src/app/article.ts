export class Article {
  constructor(
    public id: number,
    public title: string,
    public url: string,
    public imageUrl: string,
    public summary: string,
    public updatedAt: Date
  ) { }
}
