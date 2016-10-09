import { Component, OnInit } from '@angular/core';

import { TemplateService } from '../common/template.service';

@Component({
  moduleId: module.id,
  selector: 'template-selector',
  templateUrl: 'selector.component.html'
})
export class SelectorComponent implements OnInit {

  constructor(
    private templateService: TemplateService
  ) { }

  ngOnInit() { }

  categoryChange(category: string) {
    if (!this.templateService.subjects[category][this.templateService.selectedSubCategory]) {
      let subCategories = this.templateService.subjects[category];
      this.templateService.selectedSubCategory = Object.keys(subCategories)[0];
    }
  }
}