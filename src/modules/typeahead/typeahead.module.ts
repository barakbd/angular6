import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms"; // <-- #1 import module

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatAutocompleteModule } from "@angular/material/autocomplete";

import { StarwarsInputComponent } from "./components/starwars-input/starwars-input.component";
import { StarwarsApiService } from "./services/starwars-api.service";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  declarations: [StarwarsInputComponent],
  providers: [StarwarsApiService],
  exports: [StarwarsInputComponent]
})
export class TypeaheadModule {}
