import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/shared/main/main.component';
import { authGuard } from './auth.guard';
import { RegisterComponent } from './pages/register/register.component';
import { OpenProfileComponent } from './pages/open-profile/open-profile.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'open-profile/:userId', component: OpenProfileComponent },    
    { path: 'home', component: HomeComponent},
    { 
        path: '', component: MainComponent, canActivate: [authGuard],
        children: [ 
            { path: 'profile',  component: ProfileComponent, canActivate: [authGuard]}
        ], 
        
    },
    { path: '**', redirectTo: 'login' }
];
