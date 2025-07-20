import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApplyJobComponent } from './apply-job/apply-job.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, ApplyJobComponent]
})
export class AppComponent {
  title = 'job-mailer-ui';
}
