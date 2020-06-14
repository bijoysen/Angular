# NGX Bootstrap Modal


### Step 01
First add modal in app.module.ts
```js
// RECOMMENDED
import { ModalModule } from 'ngx-bootstrap/modal';
// NOT RECOMMENDED (Angular 9 doesn't support this kind of import)
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
  imports: [ModalModule.forRoot(),...]
})
export class AppModule(){}
```



### Step 02
Add modal in template
```html
<button type="button" class="btn btn-primary" (click)="openModal(template)">Create template modal</button>

<ng-template #template>
  <div class="modal-header">
    <h4 class="modal-title pull-left">Modal</h4>
    <button type="button" class="close pull-right" aria-label="Close" (click)="modalRef.hide()">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    This is a modal.
  </div>
</ng-template>
```

### Step 03
Add Modal function in component
```js
import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
 
@Component({
  selector: 'demo-modal-service-static',
  templateUrl: './service-template.html'
})
export class DemoModalServiceStaticComponent {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
```

Done but things to be remember. How to add custom event for opening modal!

### Step 04
```js
import { ViewChild, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

export class ModalComponent implements OnInit {

  // This is pointing to Modal template
  @ViewChild('template',{static:false}) template;
  modalRef: BsModalRef;
  
  // This config is used to add class in modal
  config = {
    class: 'modal-dialog-centered modalTheme'
  }
  
  // Adding Modal service in constructor!
  constructor(private modalService: BsModalService) {}
  
  ngOnInit(): void {
  }

  // This method is opening modal  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }
  
  // Custom Event to open modal
  modal() {
    this.openModal(this.template);
  }
}
```
