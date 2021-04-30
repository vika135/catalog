import {
    Component,
    OnInit
} from "@angular/core";
import { ItemService } from "./service/http/item.service";
import { CategoryService } from "./service/http/category.service";
import { Item } from "./model/item.model";
import { Category } from "./model/category.model";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

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
    public catsHidden = false;

    constructor(private itemService: ItemService,
                private categoryService: CategoryService,
                private router: Router) {

    }

    ngOnInit(): void {
        this.itemService.getEntities().subscribe((items) => {
            this.items = items;
        });
        this.categoryService.getEntities().subscribe((cats) => {
            this.categories = cats;
        });
        this.router.events.subscribe(e => {
            if (e instanceof NavigationEnd) {
                e.url.includes("add") ? this.catsHidden = true : this.catsHidden = false
            }
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
            this.searchItems = [];
        }
    }

    private filterItems(searchValue: string): Item[] {
        return this.items.filter(item => item.name.includes(searchValue.toLowerCase()));
    }

    public navigateToAddItem(): void {
        this.router.navigate(["/add"]);
    }
}
