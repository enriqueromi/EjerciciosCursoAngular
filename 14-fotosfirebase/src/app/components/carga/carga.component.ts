import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../models/file-item.ts';
import { CargaImagenesService } from '../../service/carga-imagenes.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {

  estaSobreElemento = false;

  archivos: FileItem[] = [];

  constructor(public _cargaImagenes: CargaImagenesService) { }

  ngOnInit() {
  }


  cargarImagenes() {
    this._cargaImagenes.cargarImagenesFirebase(this.archivos);

  }
  limpiarArchivos() {
    this.archivos = [];
  }

}
