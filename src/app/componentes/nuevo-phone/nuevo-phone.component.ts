import { Router } from '@angular/router';
import { Phone } from 'src/app/modelos/phone';
import { Component, OnInit } from '@angular/core';
import { PhonesService } from 'src/app/servicios/phones.service';

@Component({
  selector: 'app-nuevo-phone',
  templateUrl: './nuevo-phone.component.html',
  styleUrls: ['./nuevo-phone.component.css']
})
export class NuevoPhoneComponent implements OnInit {
public nuevoPhone:Phone = new Phone(0,"","","","",0,"",0,"",0)
  constructor(public phoneService:PhonesService,private router:Router) { }

  ngOnInit(): void {
  }
  anadirPhone(
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

if(imageFileName.length > 0){
this.nuevoPhone.imageFileName = imageFileName
}
if(name.length >0){
this.nuevoPhone.name = name
}
if(manufacturer.length >0){
this.nuevoPhone.manufacturer = manufacturer
}
if(description.length >0){
this.nuevoPhone.description = description
}
if(color.length >0){
  
this.nuevoPhone.color = color

}
if(price != null){
this.nuevoPhone.price = price
}
if(screen != null){
this.nuevoPhone.screen = screen
}
if(processor.length > 0){
this.nuevoPhone.processor = processor
}
if(ram != null){
this.nuevoPhone.ram = ram
}

this.phoneService.postPhones(this.nuevoPhone).subscribe((data:any) =>{
if(data.type ===1){
this.router.navigate(['app-vista-movil/anadir-phone/tlf-anadido'])
}

})
}

}
