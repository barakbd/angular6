import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";

//Services
import { StarwarsApiService } from "../../services/starwars-api.service";

@Component({
  selector: "starwars-input",
  templateUrl: "./starwars-input.component.html",
  styleUrls: ["./starwars-input.component.css"]
  // providers: [StarwarsApiService]
})
export class StarwarsInputComponent implements OnInit {
  private _starWarsForm: FormGroup;
  private _films: string[] = [];
  private _filteredFilms: Observable<string[]>;

  constructor(
    private _formBuilder: FormBuilder,
    private _starwarsApiService: StarwarsApiService
  ) {
    this._starWarsForm = this._formBuilder.group({
      movie_name: ["", [Validators.required, Validators.minLength(3)]]
    });
  } //end constructor

  // private _onSubmit = () => {}; //end _onSubmit
  ngOnInit() {
    this._getFilms();
  } //end ngOnInit

  private _getFilms = (): void => {
    this._starwarsApiService.getFilms().subscribe(films => {
      this._films = films;
      this._filteredFilms = this._starWarsForm.controls.movie_name.valueChanges.pipe(
        startWith(""),
        map(val => this._filterMovies(val))
      );
    });
  };

  private _filterMovies = (val: string) => {
    return this._films.filter(movie =>
      movie.toLowerCase().includes(val.toLowerCase())
    );
  };
} //end StarwarsInputComponent
