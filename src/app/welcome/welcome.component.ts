import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalutiDataService } from '../services/data/saluti-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  saluti ='Benvenuti nell\'E-Shop'
  title2='Seleziona gli Articoli da acquistare'
  utente=''
  messaggio=''

  constructor(private route: ActivatedRoute, private salutoServ: SalutiDataService) { }

  ngOnInit(): void {
    this.utente= this.route.snapshot.params['userid']
  }

  getSaluti(){
    console.log(this.salutoServ.getSaluti());
    this.salutoServ.getSaluti().subscribe(
      response => this.handleResponse(response)
    );
  }
  handleResponse(response){
    this.messaggio= response;
    console.log(response);
  }

}
