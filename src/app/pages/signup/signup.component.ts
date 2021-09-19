import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    const { email, password } = f.form.value;

    this.auth
      .signUp(email, password)
      .then((res) => {
        this.router.navigateByUrl('/');
        this.toastr.success('sign up successful');
      })
      .catch((err) => {
        console.log(err.message);
        this.toastr.error('sign up failed');
      });
  }
}
