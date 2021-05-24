export class Phone{
    public id:number;
    public name:string;
    public manufacturer:string;
    public description:string;
    public color:string;
    public price:number;
    public imageFileName:string;
    public screen:number;
    public processor:string;
    public ram:number;
    
    constructor(id:number,
                name:string,
                manufacturer:string,
                description:string,
                color:string,
                price:number,
                imgFileName:string,
                screen:number,
                processor:string,
                ram:number,){
        this.id = id;
        this.name = name;
        this.manufacturer = manufacturer;
        this.description = description;
        this.color = color;
        this.price = price;
        this.imageFileName = imgFileName;
        this.screen = screen;
        this.processor = processor;
        this.ram = ram;
    }
}