import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SentinelAuthProviderListComponent } from '@sentinel/auth/components';
import { TextsComponent } from './texts/texts.component';

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
        path: '**',
        redirectTo: 'home',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
