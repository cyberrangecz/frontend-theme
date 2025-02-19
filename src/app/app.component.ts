import { Component } from '@angular/core';
import { AgendaContainer, MenuElement, SentinelUser } from '@sentinel/layout';
import packageJson from '../../projects/frontend-theme/package.json';

@Component({
    selector: 'crczp-root',
    templateUrl: './app.component.html',
    standalone: false,
    styleUrl: './app.component.scss'
})
export class AppComponent {
    agendaContainers: AgendaContainer[] = [
        {
            label: 'Long agenda name with many words',
            children: [
                {
                    label: 'Long menu item name with many words',
                },
                {
                    label: 'Short'
                }
            ]
        },
        {
            label: 'Agenda many items',
            children: [
                ...[...Array(15).keys()].map(
                    i => ({
                        label: `Item ${i+1}`
                    } as MenuElement)
                )
            ]
        }
    ];

    user: SentinelUser = {
        name: "Example User",
        login: "user@noreply.com",
        pictureSrc: "/assets/logo/logo-blue.svg"
    }

    /**
     * Pulls version from package.json
     */
    getVersion(): string {
        return packageJson.version
    }
}
