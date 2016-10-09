import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ErrorService } from './error.service';
import { TemplateCollection } from '../models/template-collection';

@Injectable()
export class TemplateService {

  display: { [key: string]: string } = {};
  subjects = new TemplateCollection();
  templates = new TemplateCollection();
  
  selectedCategory: string = "denial";
  selectedSubCategory: string = "resident";

  constructor(
    private error: ErrorService,
    private http: Http
  ) {
    this.getDisplay();
    this.getSubjects().then(subjects => {
      Object.keys(subjects).forEach(category => {
        Object.keys(subjects[category]).forEach(subCategory => {
          this.getTemplate(category, subCategory);
        });
      });
    });
  }

  getTemplate(category: string, subCategory: string): Promise<string> {
    if (!this.templates[category]) {
      this.templates[category] = {};
    }
    if (this.templates[category][subCategory]) {
      Promise.resolve(this.templates[category][subCategory]);
    }
    else {
      let templateUrl = `templates/${category}/${subCategory}`;
      return this.http.get(templateUrl)
        .toPromise()
        .then(template => {
          let templateText = template.text();
          this.templates[category][subCategory] = templateText;
          return Promise.resolve(templateText);
        })
        .catch(() => Promise.resolve(''));
    }
  }

  getSubjects(): Promise<TemplateCollection> {
    let subjectsUrl = 'templates/subjects.json';
    return this.http.get(subjectsUrl)
      .toPromise()
      .then(subjectsChunk => {
        let subjects = subjectsChunk.json();
        this.subjects = subjects;
        return Promise.resolve(subjects);
      })
      .catch(this.error.handleHttpError);
  }

  getDisplay(): Promise<{ [key: string]: string }> {
    let displayUrl = 'templates/display.json';
    return this.http.get(displayUrl)
      .toPromise()
      .then(displayChunk => {
        let display = displayChunk.json();
        this.display = display;
        return Promise.resolve(display);
      })
      .catch(this.error.handleHttpError);
  }
}