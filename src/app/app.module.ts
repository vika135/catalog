import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { ItemComponent } from "./component/entity/item/item/item.component";
import { ItemListComponent } from "./component/entity/item/item-list/item-list.component";
import { CategoryMenuItemComponent } from "./component/entity/category/category-menu-item/category-menu-item.component";
import { SubcategoryComponent } from "./component/entity/subcategory/subcategory/subcategory.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HeaderComponent } from "./component/core/header/header.component";
import { CategoryListComponent } from "./component/entity/category/category-list/category-list.component";
import { ItemService } from "./service/http/item.service";
import { CategoryService } from "./service/http/category.service";
import { SubcategoryService } from "./service/http/subcategory.service";
import { FooterComponent } from "./component/core/footer/footer.component";
import { FilterPipe } from "./pipe/filter.pipe";
import {
    FormsModule,
    ReactiveFormsModule
} from "@angular/forms";
import { NotFoundComponent } from "./component/core/not-found/not-found.component";
import { CategoryComponent } from "./component/entity/category/category/category.component";
import { WelcomeComponent } from "./component/core/welcome/welcome.component";
import { ItemFormComponent } from './component/core/item-form/item-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatChipsModule} from "@angular/material/chips";

@NgModule({
    declarations: [
        AppComponent,
        ItemComponent,
        ItemListComponent,
        CategoryMenuItemComponent,
        SubcategoryComponent,
        HeaderComponent,
        CategoryListComponent,
        FooterComponent,
        FilterPipe,
        NotFoundComponent,
        CategoryComponent,
        WelcomeComponent,
        ItemFormComponent,
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatTooltipModule,
        MatChipsModule
    ],
    providers: [ItemService, CategoryService, SubcategoryService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
