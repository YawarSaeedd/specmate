import { Url } from './util/Url';
import { TestSpecificationEditor } from './components/tests/test-specification-editor.component';
import { TestProcedureEditor } from './components/tests/test-procedure-editor.component';
import { RequirementsDetails } from './components/requirements/requirement-details.component';
import { ModelEditor } from './components/requirements/model-editor/model-editor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFound } from './components/pages/page-not-found.component';
import { CEGModel } from "./model/CEGModel";
import { Requirement } from "./model/Requirement";
import { TestProcedure } from "./model/TestProcedure";
import { TestSpecification } from "./model/TestSpecification";
import { UnsavedChangesGuard } from './guards/unsaved-changes-guard';
import { Welcome } from "./components/pages/welcome.component";

const routes: Routes = [
  {
    path: Url.basePath(CEGModel) + '/:url',
    component: ModelEditor,
    canDeactivate: [UnsavedChangesGuard]
  }, {
    path: Url.basePath(Requirement) + '/:url',
    component: RequirementsDetails,
    canDeactivate: [UnsavedChangesGuard]
  }, {
    path: Url.basePath(TestProcedure) + '/:url',
    component: TestProcedureEditor,
    canDeactivate: [UnsavedChangesGuard]
  }, {
    path: Url.basePath(TestSpecification) + '/:url',
    component: TestSpecificationEditor,
    canDeactivate: [UnsavedChangesGuard]
  },
  { path: '', component: Welcome },
  { path: '**', component: PageNotFound }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SpecmateRoutingModule { }
