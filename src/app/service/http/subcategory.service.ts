import { Injectable } from "@angular/core";
import { AbstractCrudService } from "./abstract-crud.service";
import { HttpClient } from "@angular/common/http";
import { Subcategory } from "../../model/subcategory.model";

@Injectable({
    providedIn: "root"
})
export class SubcategoryService extends AbstractCrudService<Subcategory> {

    constructor(httpClient: HttpClient) {
        super("subcategories", httpClient);
    }
}
