import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Note } from "./article.model";
import { ArticleService } from "../article.service";
import { ApiArticleService } from "../api-article.service";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleComponent implements OnInit {
  notes$: Observable<Note[]>;
  constructor(
    private articleService: ArticleService,
    private api: ApiArticleService
  ) {}

  ngOnInit(): void {
    this.notes$ = this.articleService.getAll1();
  }

  // onDelete(noteId: string) {
  //   this.api.deleteNote(noteId).subscribe({
  //     next: () => {
  //       this.notes$ = this.articleService.getAll1(); // Обновляем поток заметок после удаления
  //       console.log("Note deleted successfully");
  //     },
  //     error: err => console.error("Error deleting note:", err)
  //   });
  // }

  onDelete(noteId: string) {
    this.articleService.onDelete(noteId);
  }
}
