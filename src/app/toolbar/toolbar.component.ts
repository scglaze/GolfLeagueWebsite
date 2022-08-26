import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutDialogueComponent } from '../about-dialogue/about-dialogue.component';
import { LogInDialogComponent } from '../log-in-dialog/log-in-dialog.component';
import { ToolbarService } from '../services/toolbar.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private dialog: MatDialog, private toolbarService: ToolbarService) { }

  ngOnInit(): void {
  }

  openLoginDialog() {
    const dialogRef = this.dialog.open(LogInDialogComponent, {
      width: `${window.innerWidth / 4}px`,
      minWidth: '300px',
      height: `${window.innerHeight / 5}px`,
      minHeight: '215px',
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.toolbarService.pinEntered(data && data.enteredPin == environment.authPin);
      }
    });
  }

  openAboutDialog() {
    const dialogRef = this.dialog.open(AboutDialogueComponent, {
      width: `${window.innerWidth / 4}px`,
      minWidth: '300px',
      height: `${window.innerHeight / 3}px`,
      disableClose: true,
    });
  }
}
