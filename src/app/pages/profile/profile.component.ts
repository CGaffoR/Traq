import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { CommonModule } from '@angular/common';
import { NotificationsService } from '../../services/notification/notifications.service';
import { AuthService } from '../../services/auth/auth-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ProfileService } from '../../services/profile/profile.service';
import { ProfileResponse } from '../../types/profile-response.type';
import { MatDialog, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { QRCodeComponent, QRCodeModule } from 'angularx-qrcode';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterOutlet, AngularMaterialModule, CommonModule, QRCodeModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  profile: FormGroup;
  qrcode: string;
  profileLoaded: any;
  constructor(
    public dialog: MatDialog,
    private notificationService: NotificationsService,
    private authService: AuthService,
    private router: Router,
    private profileService: ProfileService,
    
  ) {
    this.qrcode = 'https://traq-api.onrender.com/api/profile/'+this.authService.getUserFromToken().id;
    this.profile = new FormGroup({
      name: new FormControl(''),
      specialization: new FormControl(''),
      description: new FormControl(''),
      profilePicture: new FormControl(''),
      backgroundPicture: new FormControl(''),
    });
  }

   ngOnInit() {
    this.loadProfileData();
  }
  async loadProfileData() {
    const userId = this.authService.getUserFromToken().id;
    try {
      const profileData = await this.profileService.getProfileData(userId);
      this.profile.patchValue(profileData.data);
    } catch (error) {
      this.notificationService.showError('Error loading profile data');
      throw new Error("Error loading profile data");
    }
  }
  async onSubmit() {
    try {
      const res = await this.profileService.sendProfileData(this.profile.value);
      this.notificationService.showSuccess('Updated Profile');
      setTimeout(() => {
        this.router.navigate(['/open-profile/'+ res.data['id']]); 
      }, 1000);
    } catch (error) {
      this.notificationService.showError('Error updating profile'+error);
      throw new Error("Error sending profile data");
    }
  }
  openQRCode(): void {
    const dialogRef = this.dialog.open(DialogQRCODEComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
@Component({
  selector: 'dialog-qrcode-dialog',
  templateUrl: 'dialog-qrcode-dialog.html',
  styleUrl: './profile.component.css',
  standalone: true,
  imports: [
    AngularMaterialModule,
    MatDialogTitle,
    MatDialogContent,
    QRCodeModule
  ],
})
export class DialogQRCODEComponent {
  qrcode: string;
  constructor(
    public dialogRef: MatDialogRef<DialogQRCODEComponent>,
    private notificationService: NotificationsService,
    private authService: AuthService,
  ) {
    this.qrcode = 'https://traq-api.onrender.com/api/profile/'+this.authService.getUserFromToken().id;
  }

  openQRCode(): void {
    this.dialogRef.close();
    this.notificationService.showSuccess('Rating submitted');
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
