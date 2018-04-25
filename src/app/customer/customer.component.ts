import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-customer',
	templateUrl: './customer.component.html',
	styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
	name = null;

	constructor(public route:ActivatedRoute) {
		route.params.subscribe(params => {
			console.log('CustomerComponent: params=', params);
			this.name = params.name;
		});
	}

	ngOnInit() {
	}

}
