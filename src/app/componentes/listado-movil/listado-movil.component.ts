import { PhonesService } from 'src/app/servicios/phones.service';
import { Component, OnInit } from '@angular/core';
import { Phone } from 'src/app/modelos/phone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-movil',
  templateUrl: './listado-movil.component.html',
  styleUrls: ['./listado-movil.component.css']
})
export class ListadoMovilComponent implements OnInit {

  public isIntro:boolean = true
  public phonesFiltered:Phone[] = []
  phonesPrice:number[] = []
  public isPricing = false
  public buscar:string = ""
  public filteredManufacturer:string = ""
  public marcas:string[] = []
  constructor(public phonesService:PhonesService, private router:Router  ) {
    this.cargarTelefonos()
   }

  ngOnInit(): void {

  }
  marcasUnicas(){
    for(let i=0;i<this.phonesFiltered.length;i++){

      this.marcas.push(this.phonesFiltered[i].manufacturer.toLowerCase())
      console.log(this.marcas);

    }
      this.marcas = this.marcas.filter((value, index)=> this.marcas.indexOf(value) === index)
  }

  busqueda(){
    if(this.buscar != ""){
      this.phonesFiltered =  this.phonesService.phones.filter(phone=>{
        return phone.name.toLocaleLowerCase().match(this.buscar.toLocaleLowerCase())
      })
    }else if(this.buscar == ""){
      this.phonesFiltered = this.phonesService.phones  
    }
  }
  sortDinero(){
    if(!this.isPricing){
      this.isPricing = true
    this.phonesFiltered.sort((a,b) => {return (a.price - b.price)})
    }else{
      this.isPricing = false
      this.phonesFiltered.sort((a,b) => {return (b.price - a.price)})
    }
  }
  filterManufacturer(){
    console.log(this.filteredManufacturer);
    
    this.phonesFiltered =  this.phonesFiltered.filter(res => {
      return res.manufacturer.toLocaleLowerCase().match(this.filteredManufacturer.toLocaleLowerCase())})
    
  }

  cargarTelefonos(){

    this.phonesService.getPhones().subscribe((data:any) => {
      if(data.type == 1){
        this.phonesService.phones = data.message
        this.phonesFiltered = this.phonesService.phones

        this.isIntro = false
        console.log(this.phonesService.phones);
        this.marcasUnicas()
      }
      
    })
  }


  cargarVista(i:number){
    this.phonesService.phoneDetail = this.phonesService.phones[i]
    this.router.navigate(["app-vista-movil"])
  }
}
