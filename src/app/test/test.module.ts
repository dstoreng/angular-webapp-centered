import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TestRoutingModule} from './test-routing.module';
import {TestComponent} from './test/test.component';
import {TestIframeComponent} from './test-iframe/test-iframe.component';
import {TestTextComponent} from './test-text/test-text.component';
import {SharedModule} from "../shared/shared.module";
import { TestSmallComponent } from './test-small/test-small.component';

@NgModule({
	declarations: [TestComponent, TestIframeComponent, TestTextComponent, TestSmallComponent],
	imports: [
		CommonModule,
		TestRoutingModule,
		SharedModule
	]
})
export class TestModule {
}
