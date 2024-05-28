import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  
} from '@angular/material/dialog'; 
import { AngularRatingModule } from '../../stand-resource/angular-rating.module';

@Component({
  selector: 'app-open-profile',
  standalone: true,
  imports: [RouterOutlet, AngularMaterialModule, AngularRatingModule],
  templateUrl: './open-profile.component.html',
  styleUrl: './open-profile.component.css'
})
export class OpenProfileComponent {
  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogRatingComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'dialog-rating',
  templateUrl: 'dialog-rating.html',
  styleUrl: './open-profile.component.css',
  standalone: true,
  imports: [
    AngularMaterialModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    AngularRatingModule
  ],
})
export class DialogRatingComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogRatingComponent>,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
