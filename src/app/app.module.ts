import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { provideFirebaseApp, initializeApp } from "@angular/fire/app";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./core/components/header/header.component";
import { AdminComponent } from "./core/components/admin-feature/admin/admin.component";
import { NotFoundComponent } from "./core/components/not-found/not-found.component";
import { ArticleNoteModule } from "./core/components/admin-feature/article-note/article-note.module";
import { MainComponent } from "./core/components/main/main.component";

const firebaseConfig = {
  apiKey: "AIzaSyCtIArHjyNc4EnqhnDZ4_50kQ8GcZb9JZI",
  authDomain: "car-app-605a3.firebaseapp.com",
  projectId: "car-app-605a3",
  storageBucket: "car-app-605a3.appspot.com",
  messagingSenderId: "745034713537",
  appId: "1:745034713537:web:b52a60517401b306a7c740"
};

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
    ArticleNoteModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
