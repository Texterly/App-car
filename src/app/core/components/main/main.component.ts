import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { collection, collectionData, Firestore } from "@angular/fire/firestore";
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
  notes$: Observable<any[]>;

  constructor(
    private articleService: ArticleService,
    private fs: Firestore
  ) {}

  ngOnInit(): void {
    // this.notes = this.articleService.getAll();
    // const userProfileCollection = collection(this.fs, "notes");
    // this.notes$ = collectionData(userProfileCollection) as Observable<any[]>;
    this.notes$ = this.articleService.getAll1();
  }
}
