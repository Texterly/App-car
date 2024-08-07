import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ArticleNoteComponent } from "./article-note.component";

@NgModule({
  declarations: [ArticleNoteComponent],
  imports: [CommonModule, FormsModule],
  exports: [ArticleNoteComponent]
})
export class ArticleNoteModule {}
