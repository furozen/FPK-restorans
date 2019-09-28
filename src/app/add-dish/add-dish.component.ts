import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DataRoute, IDataBusMessage, IIDClass} from '../interfaces';
import {createLogger, ILogger} from '../utils/Logger';
import {DataBusService} from '../data/data-bus.service';
import {AppModel} from '../AppModel';


@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.scss']
})
export class AddDishComponent implements OnInit,IIDClass {

  ID: string = 'AddDishComponent';
  logger: ILogger = createLogger(this.ID);
  constructor(
      private databusService:DataBusService
  ) { }

  profileForm = new FormGroup({
    position: new FormControl(''),
    station: new FormControl(''),
    price: new FormControl(''),
    deliveryTime: new FormControl(''),
    description: new FormControl(''),
    indigridients: new FormControl(''),
    type: new FormControl(''),
    mainImageUrl: new FormControl(''),
    kosher: new FormControl(''),
    vegan: new FormControl(''),
    diet: new FormControl(''),
    halal: new FormControl(''),
  });


  ngOnInit() {
  }


  onSubmit() {

    const message:IDataBusMessage ={
      id: "new-data",
      sessionId: AppModel.sessionId,
      route: DataRoute.Outward,
      data:this.profileForm.value,
    };

    message.data.company=AppModel.company;

    this.databusService.send(message);

    console.warn(this.profileForm.value);
  }
}
