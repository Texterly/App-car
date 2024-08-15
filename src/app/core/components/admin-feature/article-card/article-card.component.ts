import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from "@angular/core";
import { ArticleService } from "../article.service";
import { Note } from "../article/article.model";

@Component({
  selector: "app-article-card",
  templateUrl: "./article-card.component.html",
  styleUrls: ["./article-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleCardComponent {
  constructor(private articleService: ArticleService) {}
  @Input() title: string;
  @Input() body: string;
  @Input() link: any;

  @Input() note: { id: string; title: string; body: string };
  @Output() delete = new EventEmitter<string>();

  deleteNote() {
    this.delete.emit(this.note.id);
  }
}
