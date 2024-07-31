import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from "./core/components/header/header.component";
import { AdminComponent } from "./shared/components/admin/admin.component";
import { ArticleModule } from "./shared/components/article/article.module";
import { TestModule } from "./shared/components/test/test.module";
import { HomeModule } from "./shared/components/home/home.module";
import { NotFoundComponent } from "./core/components/not-found/not-found.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    loadChildren: () =>
      import("./shared/components/home/home.module").then(m => HomeModule)
  },
  {
    path: "admin",
    component: AdminComponent,
    children: [
      {
        path: "article",
        loadChildren: () =>
          import("./shared/components/article/article.module").then(
            m => ArticleModule
          )
      },
      {
        path: "test",
        loadChildren: () =>
          import("./shared/components/test/test.module").then(m => TestModule)
      }
    ]
  },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
