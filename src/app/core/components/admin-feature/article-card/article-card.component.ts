import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "app-article-card",
  templateUrl: "./article-card.component.html",
  styleUrls: ["./article-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleCardComponent {
  @Input() title: string;
  @Input() body: string;
}
