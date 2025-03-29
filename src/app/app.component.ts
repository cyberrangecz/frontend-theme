import { Component } from '@angular/core';
import { SentinelUser } from '@sentinel/layout';
import packageJson from '../../projects/frontend-theme/package.json';
import { NavBuilder } from '../../projects/frontend-theme/components/util/nav-builder';

@Component({
    selector: 'crczp-root',
    templateUrl: './app.component.html',
    standalone: false,
    styleUrl: './app.component.scss'
})
export class AppComponent {

    user: SentinelUser = {
        name: 'Example User',
        login: 'user@noreply.com',
        pictureSrc: '/assets/logo/logo-blue.svg'
    };

    agendasConfig = [
        {
            label: 'Basic',
            agendas: [
                {
                    label: 'Titles',
                    path: 'titles'
                }
            ]
        },
        {
            label: 'Sentinel',
            agendas: [
                {
                    label: 'Login',
                    path: 'login'
                }
            ]
        },
        {
            label: 'Material',
            agendas: [
                {
                    label: 'Containers',
                    path: 'containers'
                }
            ]
        }
    ];

    get version(): string {
        return packageJson.version;
    }

    protected readonly NavBuilder = NavBuilder;
}
