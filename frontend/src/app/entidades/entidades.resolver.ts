import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EntidadesService } from './entidades.service';

@Injectable()
export class EntidadesResolver implements Resolve<any> {

  constructor(private service: EntidadesService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.service.find(route.params['id']);
  }
}
