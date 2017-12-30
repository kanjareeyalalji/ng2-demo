import { Injectable } from '@angular/core'

@Injectable()
export class ToasterService {
    constructor() { }

    showSuccessMessage(message: string) {
        console.log(message);
    }
    showError(message: string) {
        console.error(message);
    }
}