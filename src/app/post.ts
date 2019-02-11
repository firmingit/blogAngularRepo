/* Objet Post*/

export class Post {
	title: string;
	content: string;
	loveIts: number;
	created_at: Date
	
	constructor(titleInput:string, contentInput: string) {
		this.title=titleInput;
		this.content=contentInput;
		this.created_at=new Date();
		this.loveIts=0;
	}
}