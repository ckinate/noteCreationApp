import {  NgModule } from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NoteCreateComponent } from "./notes/note-create/note-create.component";

const routes:Routes = [
  {path:'', component:HomeComponent},
  {path:'noteCreate', component:NoteCreateComponent},
  {path:'**', component:HomeComponent, pathMatch:'full'},
];

@NgModule({
imports:[RouterModule.forRoot(routes)],
exports:[RouterModule]
})
export class AppRoutingModule{}
