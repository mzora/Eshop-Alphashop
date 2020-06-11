import { Component, OnInit } from '@angular/core';

export class Articoli{
  
  constructor(
    public codart: string,
    public descrizione : string,
    public um: string,
    public pzcart: number,
    public peso: number,
    public prezzo: number,
    public isActive: boolean,
    public data: Date
    ){}
}

@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.css']
})

export class ArticoliComponent implements OnInit {

articoli=[
  new Articoli('0000001','articolo_1','pz',24, 1.5, 20.15,true,new Date()),
  new Articoli('0000002','articolo_2','pz',8,15, 19.90,true, new Date()),
  new Articoli('0000003','articolo_3','pz',12, 35,20.15,true,new Date()),
  new Articoli('0000004','articolo_4','pz',4,15, 19.90,true, new Date())
]
  constructor() { }

  ngOnInit(): void {
  }

}
