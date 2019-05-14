import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';
import { FileItem } from '../models/file-item.ts';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  @Input() archivos: FileItem[] = [];

  @Output() mouseSobre: EventEmitter<boolean> = new EventEmitter();

  @HostListener('dragover', ['$event'])
  public onDragEnter(event: any) {
    this.mouseSobre.emit(true);
    this._prevenirDetener(event);
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave(event: any) {
    this.mouseSobre.emit(false);
  }

  @HostListener('drop', ['$event'])
  public onDrop(event: any) {

    const transferencia = this._getTransferencia(event);
    if (!transferencia) {
      return;
    }
    this._extraerArchivos(transferencia.files);
    this._prevenirDetener(event);
    this.mouseSobre.emit(false);

  }


  // Metodo para recibir la data de su devida forma dependiendo de la forma en que la interprete el navegador
  private _getTransferencia(event: any) {
    return event.dataTransfer ? event.dataTransfer : event.original.dataTransfer;
  }

  private _extraerArchivos( archivosLista: FileList ) {

// tslint:disable-next-line: forin
    for (const propiedad in Object.getOwnPropertyNames(archivosLista) ) {

      const archivosTemporal = archivosLista[propiedad];

      if (this._archivoPuedeSerCargado(archivosTemporal)) {
        const nuevoArchivo = new FileItem(archivosTemporal);
        this.archivos.push(nuevoArchivo);
      }

    }
    console.log(this.archivos);
  }

  // Validaciones

  private _archivoPuedeSerCargado( archivo: File): boolean {

    if (!this._archivoDroppeado(archivo.name) && this._esImagen(archivo.type)){
      return true;
    } else {
      return false;
    }
  }

  private _prevenirDetener(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  private _archivoDroppeado(nombreArchivo: string): boolean {
    for (const archivo of this.archivos) {
      if(archivo.nombreArchivo === nombreArchivo) {
        console.log('El archivo ' + nombreArchivo + ' ya esta agregado');
        return true;
      }
    }
    return false;
  }

  private _esImagen(tipoArchivo: string): boolean {
    return (tipoArchivo === '' || tipoArchivo === undefined) ? false : tipoArchivo.startsWith('image');
  }


}
