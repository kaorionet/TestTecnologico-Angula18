import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { personaService } from './personas.service'

@Component({
  selector: 'persona-create',
  template: `
    <div class="container">
      <div class="row">
        <div class="col">
          <form ngNativeValidate method="post" (submit)="create()">
            <div class="row">
              <div class="mb-3 col-md-6 col-lg-4">
                <label class="form-label" for="persona_name">Nombre</label>
                <input id="persona_name" name="name" class="form-control" [(ngModel)]="persona.name" maxlength="50" />
                <span *ngIf="errors.name" class="text-danger">{{errors.name}}</span>
              </div>
              <div class="mb-3 col-md-6 col-lg-4">
                <label class="form-label" for="persona_edad">Edad</label>
                <input id="persona_edad" name="edad" class="form-control" [(ngModel)]="persona.edad" type="number" />
                <span *ngIf="errors.edad" class="text-danger">{{errors.edad}}</span>
              </div>
              <div class="col-12">
                <a class="btn btn-secondary" routerLink="/persona">Cancel</a>
                <button class="btn btn-primary">Upload</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>`
})
export class personaCreate {
  
  persona?: any = {}
  errors?: any = {}
  constructor(private router: Router, private route: ActivatedRoute, private personaService: personaService) { }

  create() {
    this.personaService.create(this.persona).subscribe(() => {
      this.router.navigateByUrl('/persona')
    }, (e) => {
      alert(e.error)
    })
  }
}