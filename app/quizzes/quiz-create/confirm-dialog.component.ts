import {Component, Injectable} from "@angular/core";
import {DialogService} from "./dialog.service";

@Component({
  selector: 'confirm-dialog-modal',
  template: `
  <div class="modal show" *ngIf="dialogService.confirmVisible" data-backdrop="static" data-keyboard="false" id="confirm-dialog">
  <div class="modal-dialog modal-m">
    <div class="modal-content">
      <div class="modal-header">
            <h4>{{dialogService.dialogHeader}}</h4>
      </div>
      <div class="modal-body">
        <p>{{dialogService.dialogMessage}}</p>
      </div>
      <div class="modal-footer">
        <a (click)="confirm()" class="btn btn-default">Agree</a>
        <a (click)="reject()" class="btn btn-default">Disagree</a>
      </div>
    </div>
  </div>
  </div>
  `
})
export class ConfirmDialog {
  visible: boolean;

  constructor(public dialogService: DialogService) {
  }

  confirm() {
    console.log('confirm');
    this.dialogService.dialogConfirmation();
    this.close();
  }

  reject() {
    console.log('reject');
    this.dialogService.dialogRejection();
    this.close();
  }

  close(){
    console.log('close');
    this.dialogService.confirmVisible = false;
  }

  open(){
    console.log('open');
    this.dialogService.confirmVisible = true;
  }
}
