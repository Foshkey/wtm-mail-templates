import { Component, OnInit } from '@angular/core';

import { OpenMailService } from '../common/open-mail.service';
import { TemplateService } from '../common/template.service';

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
    this.openMailService.subject = this.templateService.subjects[this.templateService.selectedCategory][this.templateService.selectedSubCategory];
    this.openMailService.body = this.templateService.templates[this.templateService.selectedCategory][this.templateService.selectedSubCategory];
    this.openMailService.postMail();
  }
}