import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { ErrorService } from './error.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class OpenMailService {

  recipients: string;
  subject: string;
  body: string;

  private postMailUrl = 'api/open-mail'

  constructor(
    private error: ErrorService,
    private http: Http
  ) { }

  postMail(): Promise<{}> {
    var body: any = {
      subject: this.subject,
      body: this.body
    }
    if (this.recipients) {
      body.recipients = this.recipients.split(',').map(value => value.trim());
    }
    return this.http.post(this.postMailUrl, body)
      .toPromise()
      .catch(this.error.handleHttpError);
  }
}