import { Injectable, ViewContainerRef } from '@angular/core'
import { ToastsManager, ToastOptions } from 'ng2-toastr';

@Injectable()
export class ToasterService {
    constructor(public toastr: ToastsManager) {
    }

    showSuccessMessage(message: string) {
        this.toastr.success(message);
    }
    showError(message: string) {
        this.toastr.error(message);
    }
}



@Injectable()
export class CustomOption extends ToastOptions {
    // animate = 'flyRight'; // you can pass any options to override defaults
    newestOnTop = false;
    showCloseButton = true;
    dismiss = 'auto';
    toastLife = 3000;
}