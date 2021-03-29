import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
    providedIn: "root"
})
export abstract class AbstractCrudService<T> {
    private entity: string;
    private httpClient: HttpClient;

    constructor(entity: string, httpClient: HttpClient) {
        this.entity = entity;
        this.httpClient = httpClient;
    }

    public getEntities(): Observable<any> {
        return this.httpClient.get(environment.apiEndpoint + this.entity + "/all");
    }

    public getEntityById(id: string): Observable<any> {
        return this.httpClient.get(environment.apiEndpoint + this.entity + `/${id}`);
    }

    public getByEntity(entityToFind: string, id: string): Observable<any> {
        return this.httpClient.get(environment.apiEndpoint + this.entity + `/${entityToFind}` + `/${id}`);
    }

    public createEntity(entity: any): Observable<any> {
        return this.httpClient.post(environment.apiEndpoint + this.entity, entity);
    }

    public updateEntity(entity: any): Observable<any> {
        return this.httpClient.post(environment.apiEndpoint + this.entity, entity);
    }

    public deleteEntity(id: string): Observable<any> {
        return this.httpClient.delete(environment.apiEndpoint + this.entity + `/${id}`);
    }
}
