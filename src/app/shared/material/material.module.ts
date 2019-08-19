import {NgModule} from '@angular/core';
import {MatButtonModule, MatDividerModule, MatIconModule, MatListModule, MatToolbarModule} from "@angular/material";

const exports = [
	MatToolbarModule,
	MatButtonModule,
	MatListModule,
	MatIconModule,
	MatDividerModule
];

@NgModule({
	imports: exports,
	exports: exports
})
export class MaterialModule {
}
