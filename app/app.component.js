import { Component } from '@angular/core'

@Component({
	selector: 'divider',
	template: `
		<input placeholder='divider' #number>
		<button (click)='find(number.value)'
			>Find</button>
		<ul>
			<li *ngFor='let i of result'>
				{{ i }}
			</li>
		</ul>
	`
})
export class AppComponent {
	find(x) {
		this.result = [ ]
		for (let i = 1; i <= x; i++) {
			if (x % i == 0) {
				this.result.push(i)
			}
		}
	}
}

@Component({
	selector: 'coffee',
	template: `
		<ul>
			<li *ngFor = 'let i of data'>
				{{ i }}
			</li>
		</ul>
	`
})
export class ApiComponent {
	constructor() {
		fetch('http://icode.run:4000/coffee')
		.then( r => r.json() )
		.then( d => this.data = d )
	}
}

@Component({
	selector: 'zip',
	template: `
		<input placeholder="Enter city to get ZIP code…" #city (keyup.enter)='search(city)'>
		<button (click)='search(city.value)'>
			Search
		</button>
		<div *ngIf='this.result != null'>
			{{ city.value }} = {{ this.result }}
		</div>
	`
})
export class ZipComponent {

	search(x) {
		let data = {
			"ดุสิต": "10300",
			'บางรัก': '10500'
		}
		this.result = data[x.value]
		if (this.result == null) {
			this.result = "not found"
		}
	}
}
