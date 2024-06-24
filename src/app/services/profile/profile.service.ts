import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotificationsService } from '../notification/notifications.service';
import axios from 'axios';
import { AuthService } from '../auth/auth-service.service';
import { ProfileResponse } from '../../types/profile-response.type';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(
    private http: HttpClient, 
    private notificationService: NotificationsService,
    private auth: AuthService
  ) {
    
  }
  sendProfileData(
    data: { 
      name: string, 
      specialization: string, 
      description: string, 
      profilePicture: string,
      backgroundPicture: string
    }) {
    return axios.put('http://localhost:3000/api/profile/', data, {
      headers: {  
        'Authorization': `Bearer ${this.auth.getToken()}`
      }
    });
  }
  async getProfileData(userId: string) {
    try {
      const response = await axios.get(`http://localhost:3000/api/profile/${userId}`);
      console.log(response);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
