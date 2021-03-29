import {
    Component,
    EventEmitter,
    HostBinding,
    OnInit,
    Output
} from "@angular/core";

import ads from "./../../../const/ad.const";
import getRandomItem from "./../../../common/common";
import {
    NavigationEnd,
    Router
} from "@angular/router";

@Component({
    selector: "catalog-ad",
    templateUrl: "./ad.component.html",
    styleUrls: ["./ad.component.less"]
})
export class AdComponent implements OnInit {
    @HostBinding("class.catalog-ad") hostClass = true;
    @Output() closeAd: EventEmitter<boolean> = new EventEmitter();

    public ad: string;

    constructor(private router: Router) {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.ad = ads[getRandomItem(0, ads.length - 1)];
            }
        });
    }

    ngOnInit(): void {
    }

    public onCloseAd(): void {
        this.closeAd.emit(true);
    }
}
