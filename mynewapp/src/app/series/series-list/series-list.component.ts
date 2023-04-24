import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  series: Array<Serie> = [];
  constructor(private serieService: SerieService) { }

  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
    });
  }

  averageSeassons(): number {
    let sum = 0;
    for (const serie of this.series) {
      sum = sum + Number(serie.seasons);
    }
    return sum / this.series.length;
  }

  ngOnInit() {
    this.getSeries();
  }

}
