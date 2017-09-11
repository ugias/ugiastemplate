import { NgModule }                 from "@angular/core";
import { CommonModule }             from "@angular/common";
import { FormsModule }              from "@angular/forms";
import { REGISTRATIONROUTING }      from "./registration.route";
import { RegistrationComponent }    from "./registration.component";
import { RegistrationConfirmation } from "./registration.confirmation";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    REGISTRATIONROUTING
  ],
  declarations: [
    RegistrationComponent,
    RegistrationConfirmation
  ]
})

export class RegistrationModule { }
