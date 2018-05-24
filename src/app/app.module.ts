import { NgModule } from "@angular/core";
// @angulat modules
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
// import { ReactiveFormsModule } from "@angular/forms"; // <-- #1 import module
import {
  NoopAnimationsModule
  // BrowserAnimationsModule
} from "@angular/platform-browser/animations";

//@angular/material
// import { MatFormFieldModule } from "@angular/material/form-field";
// import { MatAutocompleteModule } from "@angular/material/autocomplete";
// import { MatSnackBarModule } from "@angular/material/snack-bar";
// Custom modules
import { TypeaheadModule } from "../modules/typeahead/typeahead.module";

// components
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [
    AppComponent
    // StarwarsTypeaheadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // import HttpClientModule after BrowserModule.
    // ReactiveFormsModule,
    NoopAnimationsModule,
    // BrowserAnimationsModule,
    // @angular/material
    // MatFormFieldModule,
    // MatAutocompleteModule,
    // MatSnackBarModule,
    // custome modules
    TypeaheadModule
  ],
  exports: [
    // ReactiveFormsModule,
    // MatFormFieldModule,
    // MatAutocompleteModule,
    // MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
