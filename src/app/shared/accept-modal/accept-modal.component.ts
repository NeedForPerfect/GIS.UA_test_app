import { Component, OnInit, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';

export interface ErrorMessage {
  title: string;
}

@Component({
  selector: 'app-accept-modal',
  templateUrl: './accept-modal.component.html',
  styleUrls: ['./accept-modal.component.scss']
})
export class AcceptModalComponent implements OnInit {
  title = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: ErrorMessage,
    private dialogRef: MatDialogRef<AcceptModalComponent>
  ) {}

  ngOnInit() {
    if (!this.data.title) {
      this.title = 'Something Went Wrond. Sorry';
    } else {
      this.title = this.data.title;
    }
  }

  ok() {
    this.dialogRef.close(true);
  }

}
