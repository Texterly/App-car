import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Note } from "./article.model";
import { ArticleService } from "../article.service";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleComponent implements OnInit {
  notes: Note[] = new Array<Note>();
  notes$: Observable<any[]>;
  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.notes$ = this.articleService.getAll1();
  }
}
