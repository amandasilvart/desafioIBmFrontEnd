import { Component } from '@angular/core';
import { Reservas } from 'src/app/models/reservas';
import { ReservasService } from 'src/app/services/reservas.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  list: Reservas[]=[]

  constructor (private service: ReservasService){}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void{
    this.service.findAll().subscribe((resposta) => {
      this.list = resposta;
    })
  
  }


 

}