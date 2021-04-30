import {
    Component, EventEmitter,
    HostBinding,
    Input,
    OnInit, Output
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
    @Output() delete: EventEmitter<string> = new EventEmitter();

    description: string = "Подождите...";

    properties: Properties[];

    constructor() {
    }

    ngOnInit(): void {
        this.properties = JSON.parse(this.item.properties);
    }

    deleteItem(id: string): void {
        this.delete.emit(id);
    }

     wait(str: string): void {
        this.description = "Подождите...";
        setTimeout(() => {
            this.description = str;
        }, 250);
    }
}
