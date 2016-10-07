import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class OpenMailService {

  recipients: string;
  subject: string;
  body: string;

  private postMailUrl = 'api/open-mail'

  constructor(
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
      .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}