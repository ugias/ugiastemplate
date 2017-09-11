// // Exact copy except import UserService from shared
import { Component, OnInit, AfterViewChecked, ViewChild, Output, EventEmitter }
  from "@angular/core";
import { User, Error }
  from "../../models";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { RegistrationService } from "./registration.service";

const _ = require("underscore");

@Component({
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.less"],
  providers: [RegistrationService]
})
export class RegistrationComponent implements OnInit {
  user: User;

  constructor(private registrationService: RegistrationService, private _router: Router) {
  }

  ngOnInit() {

  }

  onSubmit() {

  }
}