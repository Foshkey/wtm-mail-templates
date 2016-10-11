import { Injectable } from '@angular/core';

@Injectable()
export class ErrorService {

  constructor() { }

  handleHttpError(error: any): Promise<any> {
    console.error(error);
    return Promise.reject(error);
  }
}
