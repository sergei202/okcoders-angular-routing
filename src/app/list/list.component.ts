import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	items = [
		'Cheese',
		'Milk',
		'Bread'
	];

	currentItem;

	constructor(public route:ActivatedRoute) {
		route.params.subscribe(params => {
			console.log('ListComponent: params=', params);
			this.currentItem = this.items[+params.id];
		});
	}

	ngOnInit() {
	}

}
