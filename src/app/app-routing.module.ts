import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { personaIndex } from './components/personas/Index.component'
import { personaCreate } from './components/personas/Create.component'
import { personaDetail } from './components/personas/Detail.component'
import { personaEdit } from './components/personas/Edit.component'
import { personaDelete } from './components/personas/Delete.component'

const routes: Routes = [
  { path: '', redirectTo: 'personas', pathMatch: 'full' },
  { path: 'personas', component: personaIndex },
  { path: 'personas/create', component: personaCreate },
  { path: 'personas/:id', component: personaDetail },
  { path: 'personas/edit/:id', component: personaEdit },
  { path: 'personas/delete/:id', component: personaDelete }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }