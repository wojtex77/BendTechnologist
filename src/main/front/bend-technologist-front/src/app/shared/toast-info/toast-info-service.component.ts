import { Injectable, TemplateRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts: any[] = [];

  private show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  public remove(toast:any) {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }

  private clear() {
    this.toasts.splice(0, this.toasts.length);
  }

  showDangerToast(text: string){
    this.show(text, { classname: 'bg-danger text-light text-center', delay: 10000 })
  }

  showSuccessToast(text: string){
    this.show(text, { classname: 'bg-success text-light text-center', delay: 3000 })
  }
}
