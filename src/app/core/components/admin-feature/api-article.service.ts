/* eslint-disable @typescript-eslint/indent */
import { Injectable } from "@angular/core";
import {
  addDoc,
  collection,
  collectionData,
  Firestore
} from "@angular/fire/firestore";
import { from, Observable } from "rxjs";
import { Note } from "./article/article.model";

@Injectable({
  providedIn: "root"
})
export class ApiArticleService {
  constructor(private fs: Firestore) {}
  notes$: Observable<any[]>;

  // getNotes(): Observable<Note[]> {
  //   return collectionData(this.notesCollection, {
  //     idField: "id"
  //   }) as Observable<Note[]>;
  // }

  getNotes() {
    const notesCollection = collection(this.fs, "notes");
    // eslint-disable-next-line no-return-assign
    return (this.notes$ = collectionData(notesCollection, {
      idField: "id"
    }) as Observable<any[]>);
  }

  addNote(title: string, body: string) {
    let noteCreate = { title, body };
    const notesCollection = collection(this.fs, "notes");
    const promise = addDoc(notesCollection, noteCreate).then(res => res.id);
    return from(promise);
  }
}
