import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiService } from '../service/movie-api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private http: HttpClient,private Apimovie: MovieApiService ){}
  searchResults : any = [];
  ngOnInit(): void {
    
  }
  searchMovies = new FormGroup({
    'MovieName' : new FormControl(null)
  });

  submitForm(){
    console.log(this.searchMovies.value,'searchForm')
    this.Apimovie.letSearchMovies(this.searchMovies.value).subscribe((result: any) => {
      console.log(result,"##searchMovies");
      this.searchResults = result.results;
    });
  }
}
