import { Component } from '@angular/core';

@Component({
  selector: 'app-ngcrud',
  templateUrl: './ngcrud.component.html',
  styleUrls: ['./ngcrud.component.scss'],
})
export class NgcrudComponent {
  public formulario: any = {
    id: '',
    nombre: '',
    precio: '',
  };

  public inventario: any = [
    { id: 1, nombre: 'ropa1', precio: 100 },
    { id: 2, nombre: 'ropa2', precio: 200 },
  ];

  public agregar(): void {
    if (this.validarVacios()) {
      if (this.buscarRepetidos()) {
        let datoNuevo = {
          id: this.formulario.id,
          nombre: this.formulario.nombre,
          precio: this.formulario.precio,
        };
        this.limpiar();
        this.inventario.push(datoNuevo);
        alert('Agregado con exito!');
      }
    }
  }

  public seleccionar(articulo: any): void {
    this.formulario.id = articulo.id;
    this.formulario.nombre = articulo.nombre;
    this.formulario.precio = articulo.precio;
  }

  public eliminar(id: number): void {
    for (let index = 0; index < this.inventario.length; index++) {
      if (this.inventario[index].id === id) {
        this.inventario.splice(index, 1);
        this.limpiar();
        alert('Eliminado con exito!');
        break;
      }
    }
  }

  public actualizar(): void {
    if (this.validarVacios()) {
      if (this.idValido()) {
        let id = this.formulario.id;
        for (let index = 0; index < this.inventario.length; index++) {
          if (this.inventario[index].id === id) {
            this.inventario[index].id = this.formulario.id;
            this.inventario[index].nombre = this.formulario.nombre;
            this.inventario[index].precio = this.formulario.precio;
            this.limpiar();
            alert('Actualizado con exito!');
            break;
          }
        }
      }
    }
  }

  public limpiar(): void {
    this.formulario.id = '';
    this.formulario.nombre = '';
    this.formulario.precio = '';
  }

  public validarVacios() {
    if (
      this.formulario.id == '' ||
      this.formulario.nombre == '' ||
      this.formulario.precio == ''
    ) {
      alert('Los campos no deben esatr vacios');
      return false;
    } else {
      return true;
    }
  }

  public buscarRepetidos(): boolean {
    let id = this.formulario.id;
    for (let index = 0; index < this.inventario.length; index++) {
      if (this.inventario[index].id == id) {
        alert('Ese ID esta en uso!');
        return false;
      }
    }
    return true;
  }

  public idValido(): boolean {
    let id = this.formulario.id;
    for (let index = 0; index < this.inventario.length; index++) {
      if (this.inventario[index].id == id) {
        return true;
      }
    }
    alert('Este ID no es valido o no se encuentra');
    return false;
  }
}
