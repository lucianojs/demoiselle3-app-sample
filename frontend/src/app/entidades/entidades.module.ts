import { NgModule } from '@angular/core';

import { EntidadesRoutingModule } from './entidades-routing.module';
import { SharedModule } from '../shared';

import { EntidadesService } from './entidades.service';
import { EntidadesComponent } from './entidades.component';
import { EntidadesEditComponent } from './entidades-edit.component';
import { EntidadesResolver } from './entidades.resolver';
import { ModalModule, PaginationModule } from 'ngx-bootstrap';

@NgModule({
    imports: [
        SharedModule,
        EntidadesRoutingModule,
        PaginationModule.forRoot(),
        ModalModule.forRoot()
    ],
    declarations: [
        EntidadesComponent,
        EntidadesEditComponent
    ],
    providers: [
        EntidadesService,
        EntidadesResolver
    ],
    exports: []
})
export class EntidadesModule { }
