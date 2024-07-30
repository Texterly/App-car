import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from "./core/components/header/header.component";
import { AdminComponent } from "./shared/components/admin/admin.component";
import { ArticleModule } from "./shared/components/article/article.module";
import { TestModule } from "./shared/components/test/test.module";
import { HomeModule } from "./shared/components/home/home.module";

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
    // loadChildren: () =>
    //   import("./shared/components/admin/admin.module").then(m => AdminModule)
  }
  //   ]
  // }
  // {
  //   path: "admin",
  //   component: AdminComponent,
  //   children: [
  //     { path: "article", component: ArticleComponent },
  //     { path: "test", component: TestComponent }
  //   ]
  // }
  // { path: "article", component: ArticleComponent },
  // { path: "test", component: TestComponent }
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
