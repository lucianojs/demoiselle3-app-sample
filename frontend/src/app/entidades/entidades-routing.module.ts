import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@demoiselle/security';
import { EntidadesComponent } from './entidades.component';
import { EntidadesEditComponent } from './entidades-edit.component';
import { EntidadesResolver } from './entidades.resolver';

const routes: Routes = [{
        path: '',
        canActivate: [AuthGuard],
        component: EntidadesComponent
    }, {
        path: 'edit/:id',
        canActivate: [AuthGuard],
        component: EntidadesEditComponent,
        resolve: {
            entidades: EntidadesResolver
        }
    }, {
        path: 'edit',
        component: EntidadesEditComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class EntidadesRoutingModule { }
