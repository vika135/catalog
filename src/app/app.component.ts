import {
    Component,
    OnInit
} from "@angular/core";
import { ItemService } from "./service/http/item.service";
import { CategoryService } from "./service/http/category.service";
import { Item } from "./model/item.model";
import { Category } from "./model/category.model";

@Component({
    selector: "catalog-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.less"]
})
export class AppComponent implements OnInit {
    public items: Item[] = [];
    public categories: Category[];
    public isSearchItemsExist = false;
    public isOnSearch = false;
    public searchItems: Item[];
    public adClosed = false;

    constructor(private itemService: ItemService,
                private categoryService: CategoryService) {
    }

    ngOnInit(): void {
        this.itemService.getEntities().subscribe((items) => {
            this.items = items;
        });
        this.categoryService.getEntities().subscribe((cats) => {
            this.categories = cats;
        });
    }

    public onSearch(searchValue: string): void {
        if (searchValue?.trim().length) {
            this.isOnSearch = true;
            this.searchItems = this.filterItems(searchValue);
            if (!this.searchItems?.length) {
                this.isSearchItemsExist = false;
            }
            else {
                this.isSearchItemsExist = true;
            }
        }
        else {
            this.isOnSearch = false;
        }
    }

    private filterItems(searchValue: string): Item[] {
        return this.items.filter(item => item.name.includes(searchValue.toLowerCase()));
    }

    public onCloseAd(): void {
        this.adClosed = true;
    }
}
