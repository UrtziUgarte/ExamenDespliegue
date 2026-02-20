import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { SeriesService } from '../../services/series';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new.html',
  styleUrl: './new.css'
})
export class NewComponent {

  form!: FormGroup;
  message = '';

  constructor(
    private fb: FormBuilder,
    private seriesService: SeriesService,
    private router: Router
  ) {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      channel: ['', Validators.required],
      rating: [0, [Validators.required, Validators.min(0), Validators.max(10)]]
    });
  }

  submit() {
    if (this.form.invalid) return;

    this.seriesService.create(this.form.value).subscribe({
      next: (res: any) => {
        this.message = `Serie creada con ID: ${res.id}`;

        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 2000);
      }
    });
  }
}
