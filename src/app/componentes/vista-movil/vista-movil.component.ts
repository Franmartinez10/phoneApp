import { Component, OnInit } from '@angular/core';
import { Phone } from 'src/app/modelos/phone';
import { PhonesService } from 'src/app/servicios/phones.service';

@Component({
  selector: 'app-vista-movil',
  templateUrl: './vista-movil.component.html',
  styleUrls: ['./vista-movil.component.css']
})
export class VistaMovilComponent implements OnInit {
public phone:Phone;
  constructor(public phoneService:PhonesService) {
      this.phone = this.phoneService.phoneDetail
   }

  ngOnInit(): void {
  }

}
