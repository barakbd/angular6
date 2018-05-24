import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject, of, from } from "rxjs";
import { TypeaheadModule } from "../typeahead.module";
import { catchError, retry, map } from "rxjs/operators";
import { ErrorHandlerService } from "../../../app/error-handler.service";
// @Injectable({
//   providedIn: TypeaheadModule
// })
@Injectable()
export class StarwarsApiService {
  private _films: string[] = ["1", "2", "3"];
  private _films_BS: BehaviorSubject<string[]> = new BehaviorSubject(
    this._films
  );
  public films_O = this._films_BS.asObservable();
  constructor(
    private _http: HttpClient,
    private _errorHandlerService: ErrorHandlerService
  ) {}

  public getFilms = (): Observable<string[]> => {
    return this.films_O;

    // return this._http.get<string[]>("https://swapi.co/api/films/").pipe(
    //   retry(3), // retry a failed request up to 3 times
    //   catchError(this._errorHandlerService.handleError), // then handle the error
    //   map(response => this._films_BS.next(response))
    // );
  };
} //end StarwarsApiService
