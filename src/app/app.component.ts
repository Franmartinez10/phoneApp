import { PhonesService } from 'src/app/servicios/phones.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'phoneApp';
  public isSpinner:boolean = false
  public isIntro:boolean = true
  constructor(private phonesService:PhonesService, private router:Router) {
  }
  
  cargarTelefonos(){
    this.isSpinner = true
    this.phonesService.getPhones().subscribe((data:any) => {
      if(data.type == 1){
        this.phonesService.phones = data.message
        this.isIntro = false
        this.router.navigate(["app-listado-movil"])
        this.isSpinner = false
        console.log(this.phonesService.phones);
      }
    })
  }
}
