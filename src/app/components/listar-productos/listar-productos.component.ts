import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {

  listProductos: any[] = [
    {
      "_id": "63cecdc444b14713c7080f9f",
      "nombre": "Pepsi",
      "categoria": "bebidas",
      "ubicacion": "Barcelona",
      "precio": 5,
      "fechaCreacion": "2023-01-23T18:07:44.058Z",
      "__v": 0
    },
    {
      "_id": "63cecef192f213aa33111f3f",
      "nombre": "Fantassss",
      "categoria": "bebidas",
      "ubicacion": "Barcelona",
      "precio": 10,
      "fechaCreacion": "2023-01-23T18:15:43.749Z",
      "__v": 0
    },
    {
      "_id": "63ced41a7a89ffc7ff515baf",
      "nombre": "Coca Cola",
      "categoria": "bebidas",
      "ubicacion": "Barcelona",
      "precio": 10,
      "fechaCreacion": "2023-01-23T18:38:05.117Z",
      "__v": 0
    }
  ]
  
  constructor(private _productoService: ProductoService){}
  
  ngOnInit(): void {
    //this.obtenerProductos();
  }

  obtenerProductos(){
    this._productoService.getProductos().subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    })
  }
}
