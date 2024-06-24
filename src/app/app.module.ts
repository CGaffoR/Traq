import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { QRCodeModule } from 'angularx-qrcode';
import { AuthService } from './services/auth/auth-service.service';
import { NotificationsService } from './services/notification/notifications.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule ({
    imports: [
        MatSlideToggleModule,
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        MatSnackBarModule,
        HttpClientModule,
    ],
    providers: [
        AuthService,
        NotificationsService,
    ],
})
export class AppModule { }
