import { Injectable, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie,Result } from '../home/Result-Interface';
import { Observable, Subscription } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  
  movieSubscription: Subscription = new Subscription();

  constructor(private http: HttpClient) { }
      
  async movieApidata(type : any): Promise<Result[]>{
    return new Promise(async(resolve,reject) =>{
      var response =await  this.http.get(`https://api.themoviedb.org/3/movie/${type}?api_key=050c28541f900007285c3020069bfd62&language=en-US&page=1`);
      this.movieSubscription = response.subscribe({
      next : (data : Movie)=>{
        resolve (data['results']!)
        console.log (data,'result#');
      },
      error :(err :any)=>{
        reject(`Error${err.message}`)
      }
    })
    });
  }

  getMovieDetails(id :any)
  {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=050c28541f900007285c3020069bfd62&language=en-US&page=1`)
  }
  getMoviecredits(data : any)
  {
    return this.http.get(`https://api.themoviedb.org/3/movie/${data}/credits?api_key=050c28541f900007285c3020069bfd62&language=en-US&page=1`)
  }
  getMovietrailers(data : any)
  {
    return this.http.get(`https://api.themoviedb.org/3/movie/${data}/trailers?api_key=050c28541f900007285c3020069bfd62&language=en-US&page=1`)
  }
  letSearchMovies(data: any)
  {
    console.log(data,"movies");
    return this.http.get(`https://api.themoviedb.org/3/search/movie?query=${data.MovieName}&api_key=050c28541f900007285c3020069bfd62`)
  }
}
 