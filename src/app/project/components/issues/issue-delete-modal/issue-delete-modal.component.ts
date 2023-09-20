import { Component, EventEmitter } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { DeleteIssueModel } from '@trungk18/interface/ui-model/delete-issue-model';
import { ButtonComponent } from '../../../../jira-control/button/button.component';

@Component({
    selector: 'issue-delete-modal',
    templateUrl: './issue-delete-modal.component.html',
    styleUrls: ['./issue-delete-modal.component.scss'],
    standalone: true,
    imports: [ButtonComponent]
})
export class IssueDeleteModalComponent {
  issueId: string;

  onDelete = new EventEmitter<DeleteIssueModel>();

  constructor(private _modalRef: NzModalRef) {}

  deleteIssue() {
    this.onDelete.emit(new DeleteIssueModel(this.issueId, this._modalRef));
  }

  closeModal() {
    this._modalRef.close();
  }
}
