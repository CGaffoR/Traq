import { NgModule } from '@angular/core';
import { StarRatingModule } from 'angular-star-rating';
import e from 'express';


@NgModule({
  declarations: [],
  imports: [
    StarRatingModule.forRoot()
  ],
  exports: [
    StarRatingModule
  ]
})
export class AngularRatingModule { }