import {
    Component,
    HostBinding,
    OnInit
} from "@angular/core";
import {
    ActivatedRoute,
    NavigationEnd,
    Router,
} from "@angular/router";
import { CategoryService } from "../../../../service/http/category.service";
import { Category } from "../../../../model/category.model";
import { SubcategoryService } from "../../../../service/http/subcategory.service";
import { Subcategory } from "../../../../model/subcategory.model";
import { ItemService } from "../../../../service/http/item.service";
import { Item } from "../../../../model/item.model";

@Component({
    selector: "catalog-category",
    templateUrl: "./category.component.html",
    styleUrls: ["./category.component.less"]
})
export class CategoryComponent implements OnInit {
    @HostBinding("class.catalog-category") hostClass = true;

    public minSearchValue;
    public maxSearchValue;

    private categoryId: string;
    public category: Category;
    public subCategories: Subcategory[];
    public items: Item[];
    public itemsToShow: Item[];
    public isSubcategoryActive = false;
    public itemsSearchValue = "";

    constructor(protected route: ActivatedRoute,
                protected router: Router,
                protected categoryService: CategoryService,
                protected subcategoryService: SubcategoryService,
                private itemService: ItemService) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
             this.categoryId = params.id;
             this.categoryService.getEntityById(this.categoryId).subscribe((category) => {
                this.category = category;
                this.itemService.getByEntity("category", this.category.id).subscribe(items => {
                    this.items = items;
                    this.itemsToShow = this.items;
                    const prices = Array.from(this.items, item => item.price);
                    this.minSearchValue = Math.min(...prices);
                    this.maxSearchValue = Math.max(...prices);
                });
                this.subcategoryService.getByEntity("category", this.category.id).subscribe(subcategories => {
                    this.subCategories = subcategories;
                });
            });
        });
    }

    public navigateToSubcategory(subcatId): void {
        this.isSubcategoryActive = true;
        this.router.navigateByUrl("category/" + this.categoryId + "/subcategory/" + subcatId);
    }

    public onSearch(): void {
        if (!this.minSearchValue || !this.maxSearchValue) {
            this.itemsToShow = this.items;
            return;
        }
        this.itemsToShow = this.items
            .filter(item => item.price >= this.minSearchValue
                && item.price <= this.maxSearchValue
                && item.name.includes(this.itemsSearchValue?.toLowerCase())
            );
    }
}
