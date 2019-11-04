export class Sensor
{
public id:number;
public name:string; 
public status:boolean;

constructor(id:number, name:string, status=(Math.random() > .5))
{
    this.id=id;
    this.name;
    this.status=status;
}
}