import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
//AngularComponents
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule ({
    imports: [
        MatSlideToggleModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        CommonModule,
    ],
    exports: [
        MatSlideToggleModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        CommonModule,
        QRCodeModule,
    ]
})
export class AppModule { }
