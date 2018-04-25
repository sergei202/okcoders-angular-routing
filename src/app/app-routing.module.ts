import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CustomerComponent } from './customer/customer.component';
import { CalcComponent } from './calc/calc.component';
import { ListComponent } from './list/list.component';

const routes:Routes = [
	{path:'home',				component:HomeComponent},
	{path:'about',				component:AboutComponent},
	{path:'customer/:name',		component:CustomerComponent},
	{path:'calc/:num1/:num2',	component:CalcComponent},
	{path:'list',				component:ListComponent},
	{path:'list/:id',			component:ListComponent},

	{path:'', redirectTo:'/home', pathMatch:'full'},
	{path:'**', component:HomeComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
