import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { SalarieService } from 'src/app/service/salarie.service';
@Component({
  selector: 'app-salarie',
  templateUrl: './salarie.page.html',
  styleUrls: ['./salarie.page.scss'],
})
export class SalariePageComponent implements OnInit {
  public isOpen: boolean = false;
  public salaries: any[] = [];
  constructor(private salarieService: SalarieService) {}

  ngOnInit(): void {
    this.getListSalarie();
  }

  public openAdd() {
    this.isOpen = !this.isOpen;
  }
  public getListSalarie() {
    console.log('tng eto v');
    this.salarieService
      .getAllSalarie()
      .pipe(
        tap(
          (response: any) => {
            this.salaries = response;
          },
          (err) => {
            console.log('err', err);
          }
        )
      )
      .subscribe();
  }
}
