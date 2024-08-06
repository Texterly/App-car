import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { MatButtonModule } from "@angular/material/button";
import { ArticleRoutingModule } from "./article-routing.module";
import { ArticleComponent } from "./article.component";
import { ArticleNoteModule } from "../article-note/article-note.module";
import { ArticleCardModule } from "../article-card/article-card.module";

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    ArticleNoteModule,
    ArticleCardModule
  ]
})
export class ArticleModule {}
