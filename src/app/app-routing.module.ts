import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
	{
		path: 'test',
		loadChildren: './test/test.module#TestModule'
	},
	{
		path: '', redirectTo: 'test', pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {enableTracing: false})],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
