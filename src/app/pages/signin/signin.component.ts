import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    const { email, password } = f.form.value;

    this.auth
      .signIn(email, password)
      .then((res) => {
        this.router.navigateByUrl('/');
        this.toastr.success('sign In successful');
      })
      .catch((err) => {
        console.log(err.message);
        this.toastr.error('sign In failed');
      });
  }
}
