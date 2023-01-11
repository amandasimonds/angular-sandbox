import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './api/api.component';
import { DirectivesComponent } from './directives/directives.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'drag-drop',
		component: DragDropComponent
	},
	{
		path: 'custom table',
		component: TableComponent
	},
	{
		path: 'directives',
		component: DirectivesComponent
	},
	{
		path: 'custom-form',
		component: FormComponent
	},
	{
		path: 'api',
		component: ApiComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {

}
