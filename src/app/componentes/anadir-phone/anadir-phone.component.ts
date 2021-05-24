import { Phone } from 'src/app/modelos/phone';
import { PhonesService } from 'src/app/servicios/phones.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anadir-phone',
  templateUrl: './anadir-phone.component.html',
  styleUrls: ['./anadir-phone.component.css']
})
export class AnadirPhoneComponent implements OnInit {
public phone:Phone
public isModifing:boolean = false
  constructor(public phoneService:PhonesService, private router:Router) {
    this.phone = this.phoneService.phoneDetail

   }

  ngOnInit(): void {
  }
  modificarPhone(
                  imageFileName:string,
                  manufacturer:string,
                  color:string,
                  name:string,
                  price:number,
                  screen:number,
                  processor:string,
                  ram:number,
                  description:string,
                  ){

      this.isModifing = true
      if(imageFileName.length >0){
        this.phoneService.phoneDetail.imageFileName = imageFileName
      }
      if(name.length >0){
      this.phoneService.phoneDetail.name = name
      }
      if(manufacturer.length >0){
      this.phoneService.phoneDetail.manufacturer = manufacturer
      }
      if(description.length >0){
      this.phoneService.phoneDetail.description = description
      }
      if(color.length >0){
      this.phoneService.phoneDetail.color = color
      }
      if(price != null){
      this.phoneService.phoneDetail.price = price
      }
      if(screen != null){
      this.phoneService.phoneDetail.screen = screen
      }
      if(processor.length > 0){
        this.phoneService.phoneDetail.processor = processor
      }
      if(ram != null){
      this.phoneService.phoneDetail.ram = ram
      }

      this.phoneService.putPhone(this.phoneService.phoneDetail).subscribe((data:any) =>{
        if(data.type ===1){
          this.router.navigate(['app-vista-movil'])
        }
        
      })
    }
    eliminarPhone(){
      this.phoneService.delPhone(this.phoneService.phoneDetail.id).subscribe((data:any)=>{
        if(data.type == 1){
          this.router.navigate(['app-vista-movil/anadir-phone/tlf-borrado'])
        }
      })
    }
}
