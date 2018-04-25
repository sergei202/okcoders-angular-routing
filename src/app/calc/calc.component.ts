import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-calc',
	templateUrl: './calc.component.html',
	styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
	num1 = 0;
	num2 = 0;

	constructor(public route:ActivatedRoute) {
		route.params.subscribe(params => {
			console.log('CalcComponent: ', params);
			this.num1 = +params.num1;
			this.num2 = +params.num2;
		});
	}

	ngOnInit() {
	}

}
