import { Component, Inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
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
import { ProfileService } from '../../services/profile/profile.service';
import { NotificationsService } from '../../services/notification/notifications.service';

@Component({
  selector: 'app-open-profile',
  standalone: true,
  imports: [RouterOutlet, AngularMaterialModule, AngularRatingModule],
  templateUrl: './open-profile.component.html',
  styleUrl: './open-profile.component.css'
})
export class OpenProfileComponent {
  profileData: any;
  userId: string;
  profile: any;
  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private notificationService: NotificationsService,
    
  ) { 
    this.userId = this.route.snapshot.paramMap.get('userId') || '';
    this.profile = {
      name: '',
      specialization: '',
      description: '',
      profilePicture: '',
      backgroundPicture: '',
    }
  }
  ngOnInit() {
    this.loadProfileData();
  }
  async loadProfileData() {
    try {
      const data = await this.profileService.getProfileData(this.userId);
      this.profile.name = data.data.name;
      this.profile.specialization = data.data.specialization;
      this.profile.description = data.data.description;
      this.profile.profilePicture = data.data.profilePicture;
      this.profile.backgroundPicture = data.data.backgroundPicture;
    } catch (error) {
      throw new Error("Error loading profile data");
    }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogRatingComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
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
    private notificationService: NotificationsService,
  ) {}

  onSubmit(): void {
    this.dialogRef.close();
    this.notificationService.showSuccess('Rating submitted');
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
