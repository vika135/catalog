import { Injectable } from "@angular/core";
import { AbstractCrudService } from "./abstract-crud.service";
import { HttpClient } from "@angular/common/http";
import { Category } from "../../model/category.model";

@Injectable({
    providedIn: "root"
})
export class CategoryService extends AbstractCrudService<Category> {

    constructor(httpClient: HttpClient) {
        super("categories", httpClient);
    }
}
