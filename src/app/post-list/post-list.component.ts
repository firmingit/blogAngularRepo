import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

	posts: Post[] = [
			new Post("Un Dahu peut en cacher un autre",
				"...du coup si le premier se cache, on n'en voit aucun."),
			new Post("Qui a volé l'orange du marchand?",
				"Ce n'est pas moi, j'avais poney."),			
			new Post("Les lombrics en milieu aquatique",
				"Une étude passionnante qui donne la pêche."),
	]
	
  constructor() { }

  ngOnInit() {
  }

}
