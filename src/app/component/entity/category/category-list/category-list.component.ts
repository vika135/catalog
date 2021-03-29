import {
    Component,
    HostBinding,
    Input,
    OnInit
} from "@angular/core";
import { Category } from "../../../../model/category.model";

@Component({
    selector: "catalog-category-list",
    templateUrl: "./category-list.component.html",
    styleUrls: ["./category-list.component.less"]
})
export class CategoryListComponent implements OnInit {
    @HostBinding("class.catalog-category-list") hostClass = true;


    @Input() public categories: Category[];

    constructor() {
    }

    ngOnInit(): void {
    }

}
