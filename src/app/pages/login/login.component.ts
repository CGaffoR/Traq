import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, AngularMaterialModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  
  private formBuilderService: FormBuilder = inject(FormBuilder);
  protected hide = true;

  // protected login = this.formBuilderService.group({
  //   email: ['', Validators.required, Validators.email],
  //   password: ['', Validators.required, Validators.minLength(6)]
  // });

  public printForm() {
    if (!this.login.invalid) {
      console.log(this.login.value);
    }
  }

  login = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  getEmailErrorMessage(): string {
    const errors = this.login.controls['email'].errors;
    if (errors) {
      if (errors['required']) {
        return 'Email is required';
      } else if (errors['email']) {
        return 'Please enter a valid email address';
      }
    }
    return '';
  }

  getPasswordErrorMessage(): string {
    const errors = this.login.controls['password'].errors;
    if (errors) {
      if (errors['required']) {
        return 'Password is required';
      } else if (errors['minlength']) {
        return 'Password must have at least 6 characters';
      } else if (errors['maxlength']) {
        return 'Password must have at most 24 characters';
      }
    }
    return '';
  }
  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }
}

/*implements OnInit {
  formLogin!: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private usuarioService: UsuarioService,
              private snackBar: MatSnackBar) { }
  ngOnInit(): void {
    this.criarForm();
  }
  criarForm(){
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    });
  }
  logar(){
    if(this.formLogin.invalid) return;
    var usuario = this.formLogin.getRawValue() as IUser;
    this.usuarioService.logar(usuario).subscribe((response: { sucesso: any; }) => {
        if(!response.sucesso){
          this.snackBar.open('Falha na autenticação', 'Usuário ou senha incorretos.', {
            duration: 3000
          });
        }
    })
  }
}*/