import {
    Component,
    HostBinding,
    Input,
    OnInit
} from "@angular/core";
import { Item } from "../../../../model/item.model";
import { Properties } from "../../../../model/properties.model";

@Component({
    selector: "catalog-item",
    templateUrl: "./item.component.html",
    styleUrls: ["./item.component.less"]
})
export class ItemComponent implements OnInit {
    @HostBinding("class.catalog-item") hostClass = true;

    @Input() public item: Item;
    @Input() public isOnPopularShowcase = false;

    properties: Properties[];

    constructor() {
    }

    ngOnInit(): void {
        this.properties = JSON.parse(this.item.properties);
    }

}
