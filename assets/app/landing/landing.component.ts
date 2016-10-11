import { OpenMailService } from '../common/open-mail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'landing',
  templateUrl: 'landing.component.html'
})
export class LandingComponent implements OnInit {
  constructor(
    private openMailService: OpenMailService
  ) { }

  ngOnInit() { }

  sendTestMail(): void {
    this.openMailService.recipients = 'The Foshkey, Stasitic Solistor';
    this.openMailService.subject = 'Testing Subject';
    this.openMailService.body = 'Testing Body';
    this.openMailService.postMail();
  }
}
