import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from'@angular/common/http';
import {RouterModule} from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgwWowModule  } from 'ngx-wow';


import { AppComponent } from './app.component';
import {ROUTES} from './app.routes';
import { ToastrModule } from 'vendors/node_modules/ngx-toastr';
import { LayoutsModule } from './components/common/layouts/layouts.module';
import { MainViewModule } from './views/main-view/main-view.module';
import { MinorViewModule } from './views/minor-view/minor-view.module';
import { LoginComponent } from './views/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgwWowModule,
    FormsModule,
    //Views
    LayoutsModule,
    MainViewModule,
    MinorViewModule,
    
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass:'toast-top-right',
      preventDuplicates:true,
      progressBar:true,
      closeButton:true
    }),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
