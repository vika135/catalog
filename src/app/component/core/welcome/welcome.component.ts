import {
    Component,
    OnInit
} from "@angular/core";
import getRandomItem from "../../../common/common";
import { ItemService } from "../../../service/http/item.service";
import { Item } from "../../../model/item.model";

@Component({
    selector: "catalog-welcome",
    templateUrl: "./welcome.component.html",
    styleUrls: ["./welcome.component.less"]
})
export class WelcomeComponent implements OnInit {
    public showcasePopularItems: Item[] = [];

    constructor(private itemService: ItemService) {
    }

    ngOnInit(): void {
        this.itemService.getEntities().subscribe((items) => {
            for (let i = 0; i < 3; i++) {
                const idx = getRandomItem(0, items.length - 1);
                this.showcasePopularItems.push(items[idx]);
            }
            console.log(this.showcasePopularItems);
        });
    }
}
