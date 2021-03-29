import {
    Component,
    OnInit
} from "@angular/core";
import {
    FormArray,
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from "@angular/forms";
import { Item } from "../../../model/item.model";
import { SubcategoryService } from "../../../service/http/subcategory.service";
import { ItemService } from "../../../service/http/item.service";
import { Subcategory } from "../../../model/subcategory.model";

@Component({
    selector: "catalog-item-form",
    templateUrl: "./item-form.component.html",
    styleUrls: ["./item-form.component.less"]
})
export class ItemFormComponent implements OnInit {
    public itemForm: FormGroup;
    encodedFileToUpload: string = null;
    public createSuccess = false;
    public createError = false;

    public subcategories: Subcategory[];

    constructor(private subcategoryService: SubcategoryService,
                private itemService: ItemService,
                private formBuilder: FormBuilder) {
        this.itemForm = this.formBuilder.group({
            name: new FormControl("", Validators.required),
            price: new FormControl("", [Validators.required, Validators.pattern("[0-9]*")]),
            picture: new FormControl(),
            subcategory: new FormControl("", Validators.required),
            properties: new FormArray([
                new FormGroup({
                    prop: new FormControl(),
                    value: new FormControl()
                })
            ]),
            description: new FormControl(),
        });
    }

    ngOnInit(): void {
        this.subcategoryService.getEntities().subscribe(subcats => {
            this.subcategories = subcats;
        });
    }

    getProperties(): FormArray {
        return this.itemForm.get("properties") as FormArray;
    }

    submit(): void {
        const newItem: Item = {
            name: this.itemForm.value.name,
            price: this.itemForm.value.price,
            picture: this.encodedFileToUpload,
            subcategory_Id: this.itemForm.value.subcategory,
            description: this.itemForm.value.description,
            properties: this.parseProperties(),
        };
        this.itemService.createEntity(newItem).subscribe(
            res => this.createSuccess = true,
            err =>  this.createError = true);
        console.log(newItem);
    }

    isInvalid(controlName: string): boolean {
        return this.itemForm.controls[`${controlName}`].invalid && this.itemForm.controls[`${controlName}`].touched;
    }

    addProperty(): void {
        this.getProperties().push(new FormGroup({
            prop: new FormControl(),
            value: new FormControl()
        }));
    }

    deleteProperty(idx: number): void {
        this.getProperties().removeAt(idx);
    }

    async handleFileInput(files: FileList): Promise<void> {
        this.encodedFileToUpload = await this.toBase64(files.item(0));
        console.log(this.encodedFileToUpload);
    }

    toBase64(file: File): Promise<any> {
        return new Promise<any>((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = error => reject(error);
        });
    }

    parseProperties(): string {
        if (this.itemForm.value.properties.some(property => property["prop"] === null)) {
            return null;
        }
        return JSON.stringify(this.itemForm.value.properties);
    }

    closeAlert(): void {
        this.createSuccess = false;
        this.createError = false;
    }
}
