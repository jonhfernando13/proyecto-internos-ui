import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InternosService } from '../../services/internos.service';
import { Interno } from '../../models/interno';

@Component({
  selector: 'app-internos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './internos.html',
})
export class InternosComponent implements OnInit {
  internos: Interno[] = [];

  constructor(private service: InternosService) {}

  ngOnInit() {
    this.loadInternos();
  }

  loadInternos() {
    this.service.getInternos().subscribe(data => {
      this.internos = data;
    });
  }

  deleteInterno(id: string) {
    if (confirm('¿Estás seguro de que quieres eliminar este interno?')) {
      this.service.deleteInterno(id).subscribe(() => {
        this.loadInternos();
      });
    }
  }

  trackById(index: number, item: Interno): string {
    return item.id;
  }}
