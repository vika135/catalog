import { Injectable } from "@angular/core";
import { AbstractCrudService } from "./abstract-crud.service";
import { HttpClient } from "@angular/common/http";
import { Item } from "../../model/item.model";

@Injectable({
    providedIn: "root"
})
export class ItemService extends AbstractCrudService<Item> {

    constructor(httpClient: HttpClient) {
        super("items", httpClient);
    }
}
