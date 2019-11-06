import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() postObj:any;
  @Output() hideModal = new EventEmitter<boolean>();

  constructor() { }
 /**
  * @method: hidePopup();
  * @description: Method is used to hide the
  * Modal popup by emiting the event
  */
  hidePopup() {
    this.hideModal.emit();
  }

}
