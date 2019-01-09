import { Routes } from "@angular/router";
import { MainViewComponent } from "./views/main-view/main-view.component";
import { BasicComponent } from './components/common/layouts/basic/basic.component';
import { BlankComponent } from './components/common/layouts/blank/blank.component';
import { MinorViewComponent } from './views/minor-view/minor-view.component';
import { DashView1Component } from './views/dash-view1/dash-view1.component';
import { DashView2Component } from './views/dash-view2/dash-view2.component';
import { LandingViewComponent } from './views/main-view/landing-view/landing-view.component';
import { LoginComponent } from './views/login/login.component';
import { TablesComponent } from './views/minor-view/tables/tables.component';
import { FormViewComponent } from './views/minor-view/form-view/form-view.component';
export const ROUTES: Routes = [
  // Main redirect
  { path: '', redirectTo: 'mainView', pathMatch: 'full' },

  // App views
  {
    path: '', component: BasicComponent,
    children: [
      { path: 'mainView', component: MainViewComponent },
      { path: 'dashView1', component: DashView1Component },
      { path: 'dashView2', component: DashView2Component },
      {
        path: 'minorView', component: MinorViewComponent,
        children: []
      },
      { path: 'tablesView', component: TablesComponent },
      { path: 'formsView', component: FormViewComponent }
    ]
  },
  {
    path: '', component: BlankComponent,
    children: [
      { path: 'landingView', component: LandingViewComponent },
      { path: 'login', component: LoginComponent }
    ]
  },

  // Handle all other routes
  { path: '**', component: MainViewComponent }

];
