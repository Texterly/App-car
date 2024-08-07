import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./core/components/admin-feature/admin/admin.component";
import { ArticleModule } from "./core/components/admin-feature/article/article.module";
import { TestModule } from "./core/components/admin-feature/test/test.module";
import { HomeModule } from "./core/components/home/home.module";
import { NotFoundComponent } from "./core/components/not-found/not-found.component";
import { ArticleNoteComponent } from "./core/components/admin-feature/article-note/article-note.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    loadChildren: () =>
      import("./core/components/home/home.module").then(m => HomeModule)
  },
  {
    path: "admin",
    component: AdminComponent,
    children: [
      {
        path: "article",
        loadChildren: () =>
          import("./core/components/admin-feature/article/article.module").then(
            m => ArticleModule
          )
      },
      {
        path: "test",
        loadChildren: () =>
          import("./core/components/admin-feature/test/test.module").then(
            m => TestModule
          )
      }
    ]
  },
  {
    path: "admin/article/new",
    component: ArticleNoteComponent
  },
  {
    path: "admin/article/:id",
    component: ArticleNoteComponent
  },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
