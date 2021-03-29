import { NgModule } from "@angular/core";
import {
    Routes,
    RouterModule
} from "@angular/router";
import { NotFoundComponent } from "./component/core/not-found/not-found.component";
import { CategoryComponent } from "./component/entity/category/category/category.component";
import { WelcomeComponent } from "./component/core/welcome/welcome.component";
import { SubcategoryComponent } from "./component/entity/subcategory/subcategory/subcategory.component";
import { ItemFormComponent } from "./component/core/item-form/item-form.component";

const routes: Routes = [
    {
        path: "welcome",
        component: WelcomeComponent,
    },
    {
        path: "create",
        component: ItemFormComponent,
    },
    {
        path: "category/:id",
        component: CategoryComponent,
        children: [
            {
                path: "subcategory/:subid",
                component: SubcategoryComponent,
            }
        ]
    },
    {
        path: "**",
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
