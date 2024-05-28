// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { Observable, of } from 'rxjs';
// import { tap } from 'rxjs/operators';
// import { environment } from '../../../environments/environment';
// import { IUser } from '../../interfaces/IUser';

// const apiUrlUsuario = environment.apiUrl + "User";
// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {
// constructor(private httpClient: HttpClient,
//             private router: Router) { }
//   logar(usuario: IUser) : Observable<any> {
//     /*return this.httpClient.post<any>(apiUrlUsuario + "/login", usuario).pipe(
//       tap((resposta) => {
//         if(!resposta.sucesso) return;
//         localStorage.setItem('token', btoa(JSON.stringify(resposta['token'])));
//         localStorage.setItem('usuario', btoa(JSON.stringify(resposta['usuario'])));
//         this.router.navigate(['']);
//       }));*/
//       return this.mockUsuarioLogin(usuario).pipe(tap((resposta) => {
//         if(!resposta.sucesso) return;
//         localStorage.setItem('token', btoa(JSON.stringify("TokenQueSeriaGeradoPelaAPI")));
//         localStorage.setItem('usuario', btoa(JSON.stringify(usuario)));
//         this.router.navigate(['']);
//       }));
//   }
//   private mockUsuarioLogin(usuario: IUser): Observable<any> {
//     var retornoMock: any = [];
//     if(usuario.email === "traq@email.com" && usuario.password == "123"){
//       retornoMock.sucesso = true;
//       retornoMock.usuario = usuario;
//       retornoMock.token = "TokenQueSeriaGeradoPelaAPI";
//       return of(retornoMock);
//     }
//     retornoMock.sucesso = false;
//     retornoMock.usuario = usuario;
//     return of(retornoMock);
//   }
//   deslogar() {
//       localStorage.clear();
//       this.router.navigate(['login']);
//   }
//   get obterUsuarioLogado(): IUser | null {
//     const usuarioString = localStorage.getItem('usuario');
//     return usuarioString ? JSON.parse(atob(usuarioString)) : null;
//   }
  
//   get obterIdUsuarioLogado(): string | null {
//     const usuarioString = localStorage.getItem('usuario');
//     return usuarioString ? (JSON.parse(atob(usuarioString)) as IUser).id : null;
//   }
  
//   get obterTokenUsuario(): string | null {
//     const tokenString = localStorage.getItem('token');
//     return tokenString ? JSON.parse(atob(tokenString)) : null;
//   }
//   get logado(): boolean {
//     return localStorage.getItem('token') ? true : false;
//   }
// }