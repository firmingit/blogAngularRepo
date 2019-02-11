import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

	@Input() post: Post;
	
	constructor() { }

	ngOnInit() {
	};
	
	loveIt() {
		this.post.loveIts=this.post.loveIts+1;
	};
	
	dontLoveIt() {
		this.post.loveIts=this.post.loveIts-1;
	};

}
