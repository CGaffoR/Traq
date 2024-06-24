import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from 'axios';
import { NotificationsService } from '../notification/notifications.service';
import { jwtDecode } from 'jwt-decode';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private apiUrl = 'https://traq-api.onrender.com/api/auth';
  private secretKey =  'YOSOYCARLAO';
  private token: string | null = null;

  constructor(
    private http: HttpClient, 
    private notificationService: NotificationsService,
  ) {}

  async login(email: string, password: string): Promise<string> {
    try {
      const response = await axios.post<{ token: string }>(`${this.apiUrl}/login`, { email, password });
      const token = response.data.token;
      localStorage.setItem("auth-token", token);
      return token;
    } catch (error) {
      throw error;
    }
  }
  async register (name:string, email: string, password: string): Promise<Object> {
    try {
      return await axios.post<{ token: string }>(`${this.apiUrl}/register`, { name, email, password });
    } catch (error) {
      throw error;
    }
  }
  getUserFromToken(): any | null {
    const token = this.getToken();
    if (token) {
      try {
        const decoded: any = jwtDecode(token);
        return decoded;
      } catch (error) {
        console.error('Erro ao decodificar o token JWT:', error);
        return null;
      }
    }
    return null;
  }
  async test() {
    return await fetch('https://traq-api.onrender.com/');
  }

  getToken() {
    return localStorage.getItem("auth-token")
  }

  logout() {
    localStorage.removeItem("auth-token");
  }

  isLoggedIn(): boolean {
      return localStorage.getItem("auth-token") !== null;
  }
}
