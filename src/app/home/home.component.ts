import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, Result } from './Result-Interface';
import { MovieApiService } from '../service/movie-api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   
  movies:Result[] =[];
  popularmovies: any=[];
  trendingmovies :any = [];
  topratedmovies : any =[];
  loader = true;
  ngOnInit(): void {
    this.getMovies();
    this.loader = true;
    // this.topratedapidata();
  }
  constructor(private http: HttpClient,private Apimovie: MovieApiService){}

  async getMovies(){
   this.movies = await this.Apimovie.movieApidata('now_playing');
   this.popularmovies = await this.Apimovie.movieApidata('popular');
   this.topratedmovies = await this.Apimovie.movieApidata('top_rated');
   this.trendingmovies = await  this.Apimovie.movieApidata('upcoming');
  }




















  
  // async popularapidata(){
  //   var response =await  this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=050c28541f900007285c3020069bfd62&language=en-US&page=2`);
  //   response.subscribe ((populardata : any)=>{
  //     this.popularmovies = populardata.results;
  //     console.log (populardata,'popular#')
  //   })
  // }

  // async trendingapidata(){
  //   var response =await  this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=050c28541f900007285c3020069bfd62&language=en-US&page=3`);
  //   response.subscribe((trendingdata:any)=>{
  //     this.trendingmovies = trendingdata.results;
  //     console.log (trendingdata,('trending#'))
  //   })
  // }

  // async topratedapidata(){
  //   var response = await this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=050c28541f900007285c3020069bfd62&language=en-US&page=4`);
  //   response.subscribe((toprateddata:any)=>{
  //     this.topratedmovies = toprateddata.results;
  //     console.log (toprateddata,('toprated#'))
  //   })
  // }

}
