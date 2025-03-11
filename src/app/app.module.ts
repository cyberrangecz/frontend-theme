import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SentinelLayout1Module } from '@sentinel/layout/layout1';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SentinelConfirmationDialogComponent } from '@sentinel/components/dialogs';
import { LayoutCommonComponentsMaterialModule } from '@sentinel/layout/common-components';
import { SentinelAuthModule } from '@sentinel/auth';
import { exampleAuthConfig } from './example-auth';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SentinelLayout1Module,
        RouterOutlet,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        SentinelLayout1Module,
        SentinelConfirmationDialogComponent,
        LayoutCommonComponentsMaterialModule,
        SentinelAuthModule.forRoot(exampleAuthConfig),
    ],
    bootstrap: [AppComponent]
})
/**
 * Main app module. Contains global providers and module imports.
 */
export class AppModule {
}
