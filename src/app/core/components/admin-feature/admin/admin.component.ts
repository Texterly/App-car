import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Note } from "../article/article.model";
import { ArticleService } from "../article.service";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminComponent implements OnInit {
  notes: Note[] = new Array<Note>();
  constructor(private articleService: ArticleService) {}
  ngOnInit(): void {
    this.notes = this.articleService.getAll();
  }
}
