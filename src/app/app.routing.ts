import { Route } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";

export const routes: Route[] = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
    component: LayoutComponent
  }
]
