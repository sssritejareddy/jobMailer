import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-apply-job',
  templateUrl: './apply-job.component.html',
  styleUrls: ['./apply-job.component.css'],
  imports: [CommonModule, FormsModule, HttpClientModule]
})
export class ApplyJobComponent {
  email: string = '';
  cc: string = '';
  message: string = '';
  loading: boolean = false;

  constructor(private http: HttpClient) {}

  sendEmail() {
    this.loading = true;
    const payload = {
      email: this.email,
      cc: this.cc
    };

    this.http.post<any>('http://localhost:8080/api/send', payload)
      .subscribe({
        next: (res) => {
          this.message = res.message;
          this.loading = false;
        },
        error: (err) => {
          this.message = err.error?.message || '❌ Something went wrong';
          this.loading = false;
        }
      });
  }
}
