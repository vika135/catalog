import {
    Component,
    HostBinding,
    Input,
    OnInit
} from "@angular/core";
import { Category } from "../../../../model/category.model";
import { Router } from "@angular/router";

@Component({
    selector: "catalog-category-menu-item",
    templateUrl: "./category-menu-item.component.html",
    styleUrls: ["./category-menu-item.component.less"]
})
export class CategoryMenuItemComponent implements OnInit {
    @HostBinding("class.catalog-category-menu-item") hostClass = true;

    @Input() public category: Category;

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    public navigateToCategory(): void {
        this.router.navigate(["/category", this.category.id ]);
    }
}
