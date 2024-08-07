import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(
    private location: Location,
    private router: Router
  ) {}
  title = "car";

  goBack(): void {
    this.location.back();
  }

  goHome(): void {
    this.router.navigateByUrl("/home");
  }
}
