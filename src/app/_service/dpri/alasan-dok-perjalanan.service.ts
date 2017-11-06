import { Injectable } from '@angular/core';
import { BaseService } from '../_base/base-service';
import { Http } from '@angular/http';

let path: string = 'alasan-dok-perjalanan'

@Injectable()
export class AlasanDokPerjalananService extends BaseService {

  constructor(
    baseHttp: Http
  ) {
    super(baseHttp, path);
  }

}
