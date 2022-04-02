import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-salarie',
  templateUrl: './salarie.page.html',
  styleUrls: ['./salarie.page.scss'],
})
export class SalariePageComponent implements OnInit {
  public isOpen: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  public openAdd() {
    this.isOpen = !this.isOpen;
  }
}
