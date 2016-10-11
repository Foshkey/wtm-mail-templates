import 'rxjs/add/operator/toPromise';
import { ErrorService } from './error.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class OpenMailService {

  recipients: string;
  subject: string;
  body: string;

  private postMailUrl = 'api/open-mail';

  constructor(
    private error: ErrorService,
    private http: Http
  ) { }

  postMail(): Promise<{}> {
    let body: any = {
      body: this.body,
      subject: this.subject
    };
    if (this.recipients) {
      body.recipients = this.recipients.split(',').map(value => value.trim());
    }
    return this.http.post(this.postMailUrl, body)
      .toPromise()
      .catch(this.error.handleHttpError);
  }
}
