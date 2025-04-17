import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { personaService } from './personas.service'

@Component({
  selector: 'personas-edit',
  template: `
    <div class="container">
      <div class="row">
        <div class="col">
          <form ngNativeValidate method="post" (submit)="edit()">
            <div class="row">
              <div class="mb-3 col-md-6 col-lg-4">
                <label class="form-label" for="persona_id">Id</label>
                <input readonly id="persona_id" name="id" class="form-control" [(ngModel)]="persona.id" type="number" required />
                <span *ngIf="errors.id" class="text-danger">{{errors.id}}</span>
              </div>
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
                <button class="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>`
})
export class personaEdit {
  
  persona?: any = {}
  errors?: any = {}
  constructor(private router: Router, private route: ActivatedRoute, private personaService: personaService) { }
  
  ngOnInit() {
    this.get()
  }

  get() {
    return this.personaService.edit(this.route.snapshot.params['id']).subscribe(data => {
      this.persona = data
    }, e => {
      alert(e.error)
    })
  }

  edit() {
    this.personaService.edit(this.route.snapshot.params['id'], this.persona).subscribe(() => {
      this.router.navigateByUrl('/persona')
    }, (e) => {
      alert(e.error)
    })
  }
}