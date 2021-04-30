import {
    Component, EventEmitter,
    HostBinding,
    Input,
    OnInit, Output
} from "@angular/core";
import { Item } from "../../../../model/item.model";

@Component({
    selector: "catalog-item-list",
    templateUrl: "./item-list.component.html",
    styleUrls: ["./item-list.component.less"]
})
export class ItemListComponent implements OnInit {
    @HostBinding("class.catalog-item-list") hostClass = true;

    @Input() public items: Item[];
    @Input() public isOnPopularShowcase = false;
    @Output() delete: EventEmitter<string> = new EventEmitter();

    constructor() {
    }

    ngOnInit(): void {
    }

}
