import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./core/components/header/header.component";
import { AdminComponent } from "./core/components/admin-feature/admin/admin.component";
import { NotFoundComponent } from "./core/components/not-found/not-found.component";
import { ArticleNoteModule } from "./core/components/admin-feature/article-note/article-note.module";
import { MainComponent } from './core/components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent,
    NotFoundComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    ArticleNoteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
