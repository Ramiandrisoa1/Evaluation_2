import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SalarieService } from 'src/app/service/salarie.service';

@Component({
  selector: 'app-add-salarie',
  templateUrl: './add-salarie.component.html',
  styleUrls: ['./add-salarie.component.scss'],
})
export class AppSalarieComponent implements OnInit, AfterViewInit {
  @Input()
  public form: FormGroup;
  public isLoading: boolean | undefined;
  public submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private salarieService: SalarieService
  ) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      poste: ['', [Validators.required]],
      category: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  public submit() {
    this.submitted = true;
    let body = {
      name: this.form.value.name,
      email: this.form.value.email,
      poste: this.form.value.poste,
      category: this.form.value.category,
    };

    if (this.form.invalid) {
      console.log('this', this.form);
      return;
    }

    if (
      this.form.value.name &&
      this.form.value.email &&
      this.form.value.poste &&
      this.form.value.category
    ) {
      this.isLoading = true;
      this.salarieService.addSalarie(body).subscribe(
        (res) => {
          console.log(res);
          this.salarieService.addProductEmitter$.next(true);
          this.isLoading = false;
          this.toastr.success('Ajout produit avec succès', 'Success');
        },
        (err) => {
          this.isLoading = false;
          console.log('err', err);
          this.toastr.error("Impossible d'ajouter le produit", 'Echec');
        }
      );
    }
  }
  public ngAfterViewInit(): void {}
}
