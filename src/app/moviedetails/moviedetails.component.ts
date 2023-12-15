import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../service/movie-api.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private Apimovie: MovieApiService,
    private movieroute: ActivatedRoute,
    private router: Router,
  ) {}

  movieid: any = [];
  moviedetailres: any = [];
  moviecredits: any = [];
  movietrailers: any = [];
  trailer: string = "";

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe(() => {
      //  the scroll position to the top of the page
      window.scrollTo(0, 0);
    });

    let getid = this.movieroute.snapshot.paramMap.get('id');
    console.log(getid, "MoviedeatailsID");
    this.getMoviedt(getid);
    this.getMovieCredits(getid);
    this.getMovieTrailers(getid);
  }

  async getMoviedt(id: any) {
    await this.Apimovie.getMovieDetails(id).subscribe((result) => {
      console.log(result, "MovieDetailRes");
      this.moviedetailres = result;
    });
  }

  async getMovieCredits(id: any) {
    this.Apimovie.getMoviecredits(id).subscribe((result: any) => {
      console.log(result, "#Moviecredits");
      this.moviecredits = result.cast;
    });
  }

  async getMovieTrailers(id: any) {
    this.Apimovie.getMovietrailers(id).subscribe((result: any) => {
      console.log(result, "#Movietrailers");
      this.movietrailers = result;
      this.trailer = `https://www.youtube.com/embed/${result.youtube[0].source}?si=XqOcL3S61NEEXfLT`;
    });
  }
}
