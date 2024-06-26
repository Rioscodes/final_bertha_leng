import { Cantantes } from './../../common/cantantes';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataCantantesService } from '../../data/data-cantantes.service';
import { CantantesComponent } from '../cantantes/cantantes.component';

@Component({
  selector: 'app-cantante-auto',
  standalone: true,
  imports: [CommonModule,CantantesComponent],
  template: `

<app-cantantes/>

  <section class="d-flex justify-content-center align-items-center px-5 row"  style="background-color:#F4F6F7">

      <div class="col-sm-12 col-md-4" *ngFor="let c of cantantes">
        <div class="" style="height:430px; width:auto; overflow: hidden;">
          <img [src]="c.imagen" class="card-img-top" alt="...">
        </div>
        <div class="text text-center " style="padding-bottom: 50px;">
          <h4 class="card-title">{{c.nombre}}</h4>
        </div>
      </div>
    </section>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CantanteAutoComponent implements OnInit {
  //variables generales
  cantantes: Cantantes[] = [];

  constructor(private _dataservice: DataCantantesService,private cdRef:ChangeDetectorRef) {}

  ngOnInit(): void {
    this.cargarCantantes();
  }

  cargarCantantes() {
    this._dataservice.getCantantes().subscribe((res: any) => {
      if (res) {
        this.cantantes = res.cantantes;
        this.cdRef.detectChanges();

      } else {

      }
    });
  }
}
