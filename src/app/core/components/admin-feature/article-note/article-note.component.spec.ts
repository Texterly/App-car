import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleNoteComponent } from './article-note.component';

describe('ArticleNoteComponent', () => {
  let component: ArticleNoteComponent;
  let fixture: ComponentFixture<ArticleNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
