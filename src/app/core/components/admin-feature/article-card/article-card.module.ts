import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ArticleCardComponent } from "./article-card.component";

@NgModule({
  declarations: [ArticleCardComponent],
  imports: [CommonModule, RouterModule],
  exports: [ArticleCardComponent]
})
export class ArticleCardModule {}
