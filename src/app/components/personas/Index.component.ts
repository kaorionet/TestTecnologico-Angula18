import { Component } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'
import { personaService } from './personas.service'

@Component({
  selector: 'personas-index',
  template: `
    <div class="container">
      <div class="row">
        <div class="col">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>edad</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let persona of personas">
                <td class="text-center">{{persona.id}}</td>
                <td>{{persona.name}}</td>
                <td class="text-center">{{persona.edad}}</td>
                <td class="text-center">
                  <a class="btn btn-secondary" routerLink="/persona/{{persona.id}}" title="View"><i class="fa fa-eye"></i></a>
                  <a class="btn btn-primary" routerLink="/persona/edit/{{persona.id}}" title="Edit"><i class="fa fa-pencil"></i></a>
                  <a class="btn btn-danger" routerLink="/persona/delete/{{persona.id}}" title="Delete"><i class="fa fa-times"></i></a>
                </td>
              </tr>
            </tbody>
          </table>
          <a class="btn btn-primary" routerLink="/personas/create">Create</a>
        </div>
      </div>
    </div>`
})

export class personaIndex {

  personas?: any[]
  constructor(public router: Router, private personaService: personaService) { }

  ngOnInit() {
    this.get()
  }
  
  get() {
    this.personaService.get().subscribe(data => {
      this.personas = data
    }, e => {
      alert(e.error)
    })
  }
}