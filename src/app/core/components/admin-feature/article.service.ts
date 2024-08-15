import { Injectable } from "@angular/core";
import { Note } from "./article/article.model";
import { ApiArticleService } from "./api-article.service";

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  // notes: Note[] = new Array<Note>();
  notes: Note[];
  note: Note;

  constructor(private apiArticle: ApiArticleService) {}

  getAll() {
    return this.notes;
  }

  getAll1() {
    return this.apiArticle.getNotes();
  }

  get(id: number) {
    return this.notes[id];
  }

  getId(note: Note) {
    return this.notes.indexOf(note);
  }

  add(title: string, body: string) {
    return this.apiArticle.addNote(title, body);
  }

  update(id: number, title: string, body: string) {
    let note = this.notes[id];
    note.title = title;
    note.body = body;
  }

  onDelete(noteId: string) {
    this.apiArticle.deleteNote(noteId).subscribe({
      next: () => {
        this.notes = this.notes.filter(note => note.id !== noteId);
        console.log("Note deleted successfully");
      },
      error: err => console.error("Error deleting note:", err)
    });
  }
}
