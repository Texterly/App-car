import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
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
  noteId: number;
  new: boolean;

  constructor(
    private articleService: ArticleService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.note = new Note();
      if (params.id) {
        this.note = this.articleService.get(params.id);
        this.noteId = params.id;
        this.new = false;
      } else {
        this.new = true;
      }
    });
  }
  // eslint-disable-next-line class-methods-use-this
  onSubmit(form: NgForm) {
    if (this.new) {
      this.articleService.add(form.value);
    } else {
      this.articleService.update(
        this.noteId,
        form.value.title,
        form.value.body
      );
    }
    this.router.navigateByUrl("/admin/article");
  }

  cancel() {
    this.router.navigateByUrl("/admin/article");
  }
}
