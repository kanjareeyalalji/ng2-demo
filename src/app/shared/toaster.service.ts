import { Injectable, ViewContainerRef } from '@angular/core'
import { ToastsManager, ToastOptions } from 'ng2-toastr';

@Injectable()
export class ToasterService {
    constructor(public toastr: ToastsManager) {
    }

    showSuccessMessage(message: string, title?: string) {
        this.toastr.success(message, title);
    }
    showError(message: string, title?: string) {
        this.toastr.error(message, title);
    }
    showWarning(message: string, title?: string) {
        this.toastr.warning(message, title);
    }
    showInfo(message: string, title?: string) {
        this.toastr.info(message, title);
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