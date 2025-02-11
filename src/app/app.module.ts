import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SentinelLayout1Module } from '@sentinel/layout/layout1';
import { ActivatedRoute } from '@angular/router';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SentinelLayout1Module
    ],
    providers: [
        { provide: ActivatedRoute, useValue: {} }
    ],
    bootstrap: [AppComponent],
})
/**
 * Main app module. Contains global providers and module imports.
 */
export class AppModule {
}
