import { Injectable } from '@angular/core';
import { IUser } from '../../interfaces/IUser';
import { Observable, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // constructor(private http: HttpClient) {}

  // login(user: IUser, router: Router): Observable<any> {
  //   /*return this.httpClient.post<any>(apiUrlUsuario + "/login", usuario).pipe(
  //   tap((resposta) => {
  //     if(!resposta.sucesso) return;
  //     localStorage.setItem('token', btoa(JSON.stringify(resposta['token'])));
  //     localStorage.setItem('usuario', btoa(JSON.stringify(resposta['usuario'])));
  //     this.router.navigate(['']);
  //   }));*/
  //   return this.mockUsuarioLogin(user).pipe(tap((resposta) => {
  //     if(!resposta.sucesso) return;
  //     localStorage.setItem('token', btoa(JSON.stringify("TokenQueSeriaGeradoPelaAPI")));
  //     localStorage.setItem('usuario', btoa(JSON.stringify(user)));
  //     router.navigate(['']);
  //     console.log("Logado com sucesso!"+localStorage.getItem('token')+" "+localStorage.getItem('usuario'));
  //   }));
  // }
  private mockUsuarioLogin(usuario: IUser): Observable<any> {
    var retornoMock: any = [];
    if(usuario.email === "traq@email.com" && usuario.password == "123"){
      retornoMock.sucesso = true;
      retornoMock.usuario = usuario;
      retornoMock.token = "TokenQueSeriaGeradoPelaAPI";
      return of(retornoMock);
    }
    retornoMock.sucesso = false;
    retornoMock.usuario = usuario;
    return of(retornoMock);
  }

  logout() {
    return false;
  }

  isLoggedIn(): boolean {
    return false;
    // return localStorage.getItem('token') ? true : false;
  }
}
