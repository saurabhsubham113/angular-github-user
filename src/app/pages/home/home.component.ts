import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user = null;
  username: string;
  error = null;
  constructor(
    private ref: ChangeDetectorRef,
    private githubService: GithubService
  ) {}

  ngOnInit(): void {}

  handleFindUser() {
    this.githubService.getUserDetails(this.username).subscribe(
      (user) => {
        this.user = user;
        this.error = null;
        this.ref.detectChanges();
      },
      (err) => {
        this.user = null;
        this.error = 'User not found';
        this.ref.detectChanges();
      }
    );
  }
}
