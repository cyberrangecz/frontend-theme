import { SentinelAuthConfig } from '@sentinel/auth';


export const exampleAuthConfig: SentinelAuthConfig = {
        providers: [
            {
                label: 'Login with local Keycloak',
                textColor: 'white',
                backgroundColor: '#002776',
                oidcConfig: {
                }
            },
            {
                label: 'Login with Some other Service',
                textColor: 'white',
                backgroundColor: '#216729',
                oidcConfig: {
                }
            },{
                label: 'Login 3',
                textColor: 'white',
                backgroundColor: '#a3a314',
                oidcConfig: {
                }
            }
        ]
}
