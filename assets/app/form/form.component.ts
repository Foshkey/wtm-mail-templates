import { OpenMailService } from '../common/open-mail.service';
import { TemplateService } from '../common/template.service';
import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'mail-form',
  templateUrl: 'form.component.html'
})
export class FormComponent implements OnInit {

  constructor(
    private openMailService: OpenMailService,
    private templateService: TemplateService
  ) { }

  ngOnInit() { }

  onSubmit() {
    let cat = this.templateService.selectedCategory;
    let subCat = this.templateService.selectedSubCategory;
    this.openMailService.subject = this.templateService.subjects[cat][subCat];
    this.openMailService.body = this.templateService.templates[cat][subCat];
    this.openMailService.postMail();
  }
}
