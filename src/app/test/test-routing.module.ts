import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TestComponent} from "./test/test.component";
import {TestIframeComponent} from "./test-iframe/test-iframe.component";
import {TestTextComponent} from "./test-text/test-text.component";
import {TestSmallComponent} from "./test-small/test-small.component";

const routes: Routes = [
	{
		path: '',
		component: TestComponent,
		children: [
			{
				path: 'iframe',
				component: TestIframeComponent
			},
			{
				path: 'text',
				component: TestTextComponent
			},
			{
				path: 'small',
				component: TestSmallComponent
			},
			{
				path: '',
				redirectTo: 'text'
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TestRoutingModule {
}
