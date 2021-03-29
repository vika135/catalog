import {
    Component,
    HostBinding,
    OnInit
} from "@angular/core";
import {
    ActivatedRoute,
    Router
} from "@angular/router";
import { SubcategoryService } from "../../../../service/http/subcategory.service";
import { Subcategory } from "../../../../model/subcategory.model";
import { ItemService } from "../../../../service/http/item.service";
import { Item } from "../../../../model/item.model";
import { CategoryService } from "../../../../service/http/category.service";

@Component({
    selector: "catalog-subcategory",
    templateUrl: "./subcategory.component.html",
    styleUrls: ["./subcategory.component.less"]
})
export class SubcategoryComponent implements OnInit  {
    @HostBinding("class.catalog-subcategory") hostClass = true;

    public subcategory_Id: string;
    public subcategory: Subcategory;
    public items: Item[];
    public itemsToShow: Item[];
    public itemsSearchValue = "";

    constructor(protected router: Router,
                protected route: ActivatedRoute,
                protected itemService: ItemService,
                protected subcategoryService: SubcategoryService) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.subcategory_Id = params.subid;
            this.subcategoryService.getEntityById(this.subcategory_Id).subscribe((subcategory) => {
                this.subcategory = subcategory;
                this.itemService.getByEntity("subcategory", this.subcategory.id).subscribe(items => {
                    this.items = items;
                    this.itemsToShow = this.items;
                });
            });
        });
    }

    public onSearch(): void {
        if (this.itemsSearchValue?.trim().length) {
            this.itemsToShow = this.items.filter(item => item.name.includes(this.itemsSearchValue?.toLowerCase()));
        }
        else { this.itemsToShow = this.items; }
    }

}
