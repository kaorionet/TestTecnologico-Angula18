import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AppInterceptor } from './app.interceptor'

import { personaIndex } from './components/personas/Index.component'
import { personaCreate } from './components/personas/Create.component'
import { personaDetail } from './components/personas/Detail.component'
import { personaEdit } from './components/personas/Edit.component'
import { personaDelete } from './components/personas/Delete.component'

@NgModule({
  declarations: [
    AppComponent,
    personaIndex,
    personaCreate,
    personaDetail,
    personaEdit,
    personaDelete,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }