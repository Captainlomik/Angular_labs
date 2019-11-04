import { Component, OnInit, OnDestroy } from '@angular/core';
import { Sensor } from './shared/models/second.model';
import { match } from 'minimatch';

let index = 1;
const generateRandomSensor = () => new Sensor(index, `sensor${index++}`);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Список датчиков';
  arr: Sensor[] = [];

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.arr.push(generateRandomSensor())
    }
  }

  ngOnInit() {
  }
  
  sensor_name: string;
  sensor_status: string;

  srStatus() {
    Math.random() > 0.5 ? this.sensor_status = 'online' : this.sensor_status = 'ofline';
    return this.sensor_status;
  }



  AddSensor() {

    let newSensor = generateRandomSensor();
    newSensor.name = this.sensor_name;
    newSensor.status = (this.sensor_status == this.srStatus());

    this.arr.push(newSensor);
  }

  DeleteSensor(i) {
    this.arr.splice(i, 1);
  }
}
