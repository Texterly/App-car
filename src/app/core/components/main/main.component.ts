import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Note } from "../admin-feature/article/article.model";
import { ArticleService } from "../admin-feature/article.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {
  notes: Note[] = new Array<Note>();

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.notes = this.articleService.getAll();
  }
}
