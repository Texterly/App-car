import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./core/components/header/header.component";
import { AdminComponent } from "./shared/components/admin/admin.component";
import { NotFoundComponent } from "./core/components/not-found/not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent,
    NotFoundComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
