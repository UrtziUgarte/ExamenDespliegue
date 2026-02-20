import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../../services/series';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {

  series: any[] = [];
  loading = true;

  constructor(private seriesService: SeriesService) {}

  ngOnInit() {
    this.seriesService.getAll().subscribe({
      next: (res: any) => {
        this.series = res.results;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
}
