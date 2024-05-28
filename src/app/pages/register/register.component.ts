import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, AngularMaterialModule, RouterOutlet],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  register: FormGroup;

  protected hide = true;

  constructor() {
    this.register = new FormGroup(
      {
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
        confirmPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
      },
      {
        validators: this.matchePasswords,
      }
    );
  }

  public printForm() {
    if (!this.register.invalid) {
      console.log(this.register.value);
    }
  }

  matchePasswords(form: AbstractControl): ValidationErrors | null {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      form.get('confirmPassword')?.setErrors({ mismatch: true });
      return { mismatch: true };
    } else {
      form.get('confirmPassword')?.setErrors(null);
      return null;
    }
  }

  getNameErrorMessage(): string {
    const errors = this.register.controls['name'].errors;
    if (errors) {
      if (errors['required']) {
        return 'Name is required';
      } else if (errors['minlength']) {
        return 'Name must have at least 6 characters';
      } else if (errors['maxlength']) {
        return 'Name must have at most 24 characters';
      }
    }
    return '';
  }

  getEmailErrorMessage(): string {
    const errors = this.register.controls['email'].errors;
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
    const errors = this.register.controls['password'].errors;
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

  getConfirmPasswordErrorMessage(): string {
    const errors = this.register.controls['confirmPassword'].errors;
    console.log('errors', errors?.['mismatch']);
    if (errors) {
      if (errors['required']) {
        return 'Password is required';
      } else if (errors['minlength']) {
        return 'Password must have at least 6 characters';
      } else if (errors['maxlength']) {
        return 'Password must have at most 24 characters';
      } else if (errors['mismatch']) {
        console.log('passwordMismatchError');
        return 'Passwords do not match';
      }
    }
    return '';
  }

  hidePassword(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }
}
