import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SentinelAuthProviderListComponent } from '@sentinel/auth/components';
import { TextsComponent } from './texts/texts.component';
import { MatContainersComponent } from './mat-containers/mat-containers.component';

const routes: Routes = [
    {
        path: 'titles',
        component: TextsComponent,
    },
    {
        path: '',
        redirectTo: 'titles',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: SentinelAuthProviderListComponent
    },
    {
        path: 'containers',
        component: MatContainersComponent
    },
    {
        path: '**',
        redirectTo: 'home',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
