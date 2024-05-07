import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { OrdersModule } from "orders";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, OrdersModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
