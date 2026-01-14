import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InternosService } from '../../services/internos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Interno } from '../../models/interno';

@Component({
  selector: 'app-interno-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './interno-form.html',
})
export class InternoFormComponent implements OnInit {
  form: FormGroup;
  internoId: string | null = null;
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private service: InternosService,
    private route: ActivatedRoute,
    public router: Router
  ) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidos: [''],
      idUbicacion: [null, Validators.required],
      cortesia: [null],
      fechaHoraRegistro: [null],
      activo: [true],
      clave: [''],
      fechaNacimiento: [null],
      desarrollo: [false],
      cambiarClave: [false],
      idPerfil: [null],
      pabellon: [''],
      piso: [''],
      ala: [''],
      estado: ['ACTIVO'],
      fechaIngreso: [null],
      requeridoAgente: [false],
      sexo: [''],
      fechaHoraUltimaLlamada: [null],
      prefijoPenal: [null],
      identificacion: [''],
      tratamientoDatos: [null],
      idGeografia: [null]
    });
  }

  ngOnInit() {
    this.internoId = this.route.snapshot.paramMap.get('id');
    if (this.internoId) {
      this.isEditMode = true;
      this.loadInterno(this.internoId);
    }
  }

  loadInterno(id: string) {
    this.service.getInternoById(id).subscribe((interno: Interno) => {
      this.form.patchValue(interno);
    });
  }

  submit() {
    if (this.form.valid) {
      const data = this.form.value;
      if (this.isEditMode && this.internoId) {
        this.service.updateInterno(this.internoId, data).subscribe(() => {
          this.router.navigate(['/internos']);
        });
      } else {
        this.service.createInterno(data).subscribe(() => {
          this.router.navigate(['/internos']);
        });
      }
    }
  }
}