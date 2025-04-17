import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { personaService } from './personas.service'

@Component({
  selector: 'personas-detail',
  template: `
    <div class="container">
      <div class="row">
        <div class="col">
          <form ngNativeValidate method="post">
            <div class="row">
              <div class="mb-3 col-md-6 col-lg-4">
                <label class="form-label" for="persona_id">Id</label>
                <input readonly id="persona_id" name="id" class="form-control" value="{{persona.id}}" type="number" required />
              </div>
              <div class="mb-3 col-md-6 col-lg-4">
                <label class="form-label" for="persona_name">Name</label>
                <input readonly id="persona_name" name="name" class="form-control" value="{{persona.name}}" maxlength="50" />
              </div>
              <div class="mb-3 col-md-6 col-lg-4">
                <label class="form-label" for="persona_edad">edad</label>
                <input readonly id="persona_edad" name="edad" class="form-control" value="{{persona.edad}}" type="number" />
              </div>
              <div class="col-12">
                <a class="btn btn-secondary" routerLink="/persona">Back</a>
                <a class="btn btn-primary" routerLink="/persona/edit/{{persona.id}}">Edit</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>`
})
export class personaDetail {
  
  persona?: any = {}
  constructor(private route: ActivatedRoute, private personaService: personaService) { }
  
  ngOnInit() {
    this.get()
  }

  get() {
    return this.personaService.get(this.route.snapshot.params['id']).subscribe(data => {
      this.persona = data
    }, e => {
      alert(e.error)
    })
  }
}