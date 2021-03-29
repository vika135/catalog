import {
    Component,
    HostBinding,
    OnInit
} from "@angular/core";

@Component({
    selector: "catalog-footer",
    templateUrl: "./footer.component.html",
    styleUrls: ["./footer.component.less"]
})
export class FooterComponent implements OnInit {
    @HostBinding("class.catalog-footer") hostClass = true;

    constructor() {
    }

    ngOnInit(): void {
    }

}
