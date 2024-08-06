import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Note } from "../article/article.model";
import { ArticleService } from "../article.service";

@Component({
  selector: "app-article-note",
  templateUrl: "./article-note.component.html",
  styleUrls: ["./article-note.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleNoteComponent implements OnInit {
  note: Note;

  constructor(
    private articleService: ArticleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.note = new Note();
  }
  // eslint-disable-next-line class-methods-use-this
  onSubmit(form: NgForm) {
    this.articleService.add(form.value);
    this.router.navigateByUrl("/admin/article");
  }

  cancel() {
    this.router.navigateByUrl("/admin/article");
  }
}
