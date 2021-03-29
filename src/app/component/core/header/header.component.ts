import {
    Component,
    EventEmitter,
    HostBinding,
    OnInit,
    Output
} from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "catalog-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.less"]
})
export class HeaderComponent implements OnInit {
    @HostBinding("class.catalog-header") hostClass = true;

    @Output() search: EventEmitter<string> = new EventEmitter();

    public searchValue: string;

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    public onSearch(): void {
        this.search.emit(this.searchValue);
    }

    public navigateToMainPage(): void {
        this.router.navigate(["/welcome"]);
    }
}
