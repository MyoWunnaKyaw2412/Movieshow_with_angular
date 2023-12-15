import { Component,HostListener,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MovieApiService } from './service/movie-api.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  constructor(
    private cookie: CookieService,
    private reroute: Router,
    private Apimovie: MovieApiService){}
 ngOnInit(): void {
   
 }

  
 searchResults:any = [];
  title = 'Netflix';

  navbg:any;

  logout(){
    this.cookie.deleteAll('token')
    this.reroute.navigateByUrl('login')
  }

  @HostListener('document:scroll')scrollower(){
    console.log(document.body.scrollTop,'scrolllength#');

    if (document.body.scrollTop > 0|| document.documentElement.scrollTop > 0)
    {
      this.navbg = {
        'background-color': '#000000'
      }
    }else{
      this.navbg = {}
    }
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



