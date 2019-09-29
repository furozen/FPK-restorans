import { Component, OnInit } from '@angular/core';
import {DataBusService} from '../data/data-bus.service';
import {DataRoute, IDataBusMessage} from '../interfaces';
import {AppModel} from '../AppModel';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-searh-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  constructor(
    private  databusService:DataBusService,
    private searchService:SearchService
  ) {


  }

  results:any[];

  search(){
    const message:IDataBusMessage ={
      id: "search",
      sessionId: AppModel.sessionId,
      route: DataRoute.Outward,
      data:{},
    };


    this.databusService.send(message);

  }

  ngOnInit(): void {
    this.results= [
      { "_id": "5d8fc6eb6a536e4df8d1b45d", "position": "Плов с зирваком по‑узбекски", "station": "Омск", "price": "150", "deliveryTime": "150", "description": "Плов получился изумительным, а узбек заверил меня, что именно так готовили его деды, проживавшие в какой-то южной провинции Узбекистана.", "indigridients": "Баранина0,2 кг\nРис басмати2,5 столовые ложки\nДикий рис½ стакана\nМорковь½ штуки\nЛук½ штуки\nКуркумапо вкусу\nБарбариспо вкусу\nСемена зиры1 чайная ложк", "type": "3", "mainImageUrl": "https://s2.eda.ru/StaticContent/Photos/120131082439/160124115932/p_O.jpg", "kosher": "", "vegan": "", "diet": "", "halal": true, "timeslotStart1": "11", "timeslotFinish1": "16", "timeslot-2-start": "20", "timeslot-2-finish": "24", "timeslot-3-start": "", "timeslot-3-finish": "", "timeslot-4-start": "", "timeslot-4-finish": "", "company": "Bestfoodoff" },
      { "_id": "5d8fc84e6a536e4df8d1b45f", "position": "Плов с шампиньонами", "station": "Омск", "price": "150", "deliveryTime": "150", "description": "Плов получился изумительным, а узбек заверил меня, что именно так готовили его деды, проживавшие в какой-то южной провинции Узбекистана.", "indigridients": "Баранина0,2 кг\nРис басмати2,5 столовые ложки\nДикий рис½ стакана\nМорковь½ штуки\nЛук½ штуки\nКуркумапо вкусу\nБарбариспо вкусу\nСемена зиры1 чайная ложк", "type": "3", "mainImageUrl": "https://img.7dach.ru/image/1200/00/39/68/2015/10/04/3d1544.jpg", "kosher": true, "vegan": true, "diet": true, "halal": false, "timeslot-1-start": "10", "timeslot-1-finish": "16", "timeslot-2-start": "20", "timeslot-2-finish": "24", "timeslot-3-start": "", "timeslot-3-finish": "", "timeslot-4-start": "", "timeslot-4-finish": "", "company": "Bestfoodoff" },
      { "_id": "5d8fcb366a536e4df8d1b460", "position": "Плов с ягненком", "station": "Омск", "price": "220", "deliveryTime": "120", "description": "Сейчас существует множество вариаций классического узбекского плова. Этот плов получается рассыпчатым, а мясо в нем нежнее нежного.", "indigridients": "250 г вырезки ягненка\n2 стакана белого риса\n1 средняя репчатая луковица\n2 средних моркови\n3 зубчика чеснока", "type": "3", "mainImageUrl": "https://tykvo.ru/images/recipe/vtorye-blyuda/iz-myasa/plov-s-yagnenkom.jpg", "kosher": true, "vegan": "", "diet": "", "halal": true, "timeslot-1-start": "11", "timeslot-1-finish": "23", "timeslot-2-start": "0", "timeslot-2-finish": "9", "timeslot-3-start": "", "timeslot-3-finish": "", "timeslot-4-start": "", "timeslot-4-finish": "", "company": "Bestfoodoff" },
      { "_id": "5d8fcb3a6a536e4df8d1b461", "position": "Плов с ягненком", "station": "Новосибирск", "price": "220", "deliveryTime": "120", "description": "Сейчас существует множество вариаций классического узбекского плова. Этот плов получается рассыпчатым, а мясо в нем нежнее нежного.", "indigridients": "250 г вырезки ягненка\n2 стакана белого риса\n1 средняя репчатая луковица\n2 средних моркови\n3 зубчика чеснока", "type": "3", "mainImageUrl": "https://tykvo.ru/images/recipe/vtorye-blyuda/iz-myasa/plov-s-yagnenkom.jpg", "kosher": true, "vegan": "", "diet": "", "halal": true, "timeslot-1-start": "11", "timeslot-1-finish": "23", "timeslot-2-start": "0", "timeslot-2-finish": "9", "timeslot-3-start": "", "timeslot-3-finish": "", "timeslot-4-start": "", "timeslot-4-finish": "", "company": "Bestfoodoff" },
      { "_id": "5d8fcb3f6a536e4df8d1b462", "position": "Плов с ягненком", "station": "Иланская", "price": "220", "deliveryTime": "120", "description": "Сейчас существует множество вариаций классического узбекского плова. Этот плов получается рассыпчатым, а мясо в нем нежнее нежного.", "indigridients": "250 г вырезки ягненка\n2 стакана белого риса\n1 средняя репчатая луковица\n2 средних моркови\n3 зубчика чеснока", "type": "3", "mainImageUrl": "https://tykvo.ru/images/recipe/vtorye-blyuda/iz-myasa/plov-s-yagnenkom.jpg", "kosher": true, "vegan": "", "diet": "", "halal": true, "timeslot-1-start": "11", "timeslot-1-finish": "23", "timeslot-2-start": "0", "timeslot-2-finish": "9", "timeslot-3-start": "", "timeslot-3-finish": "", "timeslot-4-start": "", "timeslot-4-finish": "", "company": "Bestfoodoff" },
      { "_id": "5d8fcb446a536e4df8d1b463", "position": "Плов с ягненком", "station": "Зима", "price": "220", "deliveryTime": "120", "description": "Сейчас существует множество вариаций классического узбекского плова. Этот плов получается рассыпчатым, а мясо в нем нежнее нежного.", "indigridients": "250 г вырезки ягненка\n2 стакана белого риса\n1 средняя репчатая луковица\n2 средних моркови\n3 зубчика чеснока", "type": "3", "mainImageUrl": "https://tykvo.ru/images/recipe/vtorye-blyuda/iz-myasa/plov-s-yagnenkom.jpg", "kosher": true, "vegan": "", "diet": "", "halal": true, "timeslot-1-start": "11", "timeslot-1-finish": "23", "timeslot-2-start": "0", "timeslot-2-finish": "9", "timeslot-3-start": "", "timeslot-3-finish": "", "timeslot-4-start": "", "timeslot-4-finish": "", "company": "Bestfoodoff" },
      { "_id": "5d8fcbc06a536e4df8d1b464", "position": "Плов со свининой (на узбекский лад)", "station": "Зима", "price": "180", "deliveryTime": "120", "description": "Плов со свининой (на узбекский лад)\n", "indigridients": "250 г вырезки ягненка\n2 стакана белого риса\n1 средняя репчатая луковица\n2 средних моркови\n3 зубчика чеснока", "type": "3", "mainImageUrl": "https://tykvo.ru/images/recipe/vtorye-blyuda/iz-myasa/plov-s-yagnenkom.jpg", "kosher": false, "vegan": "", "diet": "", "halal": false, "timeslot-1-start": "8", "timeslot-1-finish": "14", "timeslot-2-start": "17", "timeslot-2-finish": "23", "timeslot-3-start": "", "timeslot-3-finish": "", "timeslot-4-start": "", "timeslot-4-finish": "", "company": "Bestfoodoff" },
      { "_id": "5d8fcbc46a536e4df8d1b465", "position": "Плов со свининой (на узбекский лад)", "station": "Иланская", "price": "180", "deliveryTime": "120", "description": "Плов со свининой (на узбекский лад)\n", "indigridients": "250 г вырезки ягненка\n2 стакана белого риса\n1 средняя репчатая луковица\n2 средних моркови\n3 зубчика чеснока", "type": "3", "mainImageUrl": "https://tykvo.ru/images/recipe/vtorye-blyuda/iz-myasa/plov-s-yagnenkom.jpg", "kosher": false, "vegan": "", "diet": "", "halal": false, "timeslot-1-start": "8", "timeslot-1-finish": "14", "timeslot-2-start": "17", "timeslot-2-finish": "23", "timeslot-3-start": "", "timeslot-3-finish": "", "timeslot-4-start": "", "timeslot-4-finish": "", "company": "Bestfoodoff" },
      { "_id": "5d8fcbc96a536e4df8d1b466", "position": "Плов со свининой (на узбекский лад)", "station": "Новосибирск", "price": "180", "deliveryTime": "120", "description": "Плов со свининой (на узбекский лад)\n", "indigridients": "250 г вырезки ягненка\n2 стакана белого риса\n1 средняя репчатая луковица\n2 средних моркови\n3 зубчика чеснока", "type": "3", "mainImageUrl": "https://tykvo.ru/images/recipe/vtorye-blyuda/iz-myasa/plov-s-yagnenkom.jpg", "kosher": false, "vegan": "", "diet": "", "halal": false, "timeslot-1-start": "8", "timeslot-1-finish": "14", "timeslot-2-start": "17", "timeslot-2-finish": "23", "timeslot-3-start": "", "timeslot-3-finish": "", "timeslot-4-start": "", "timeslot-4-finish": "", "company": "Bestfoodoff" },
      { "_id": "5d8fcbcd6a536e4df8d1b467", "position": "Плов со свининой (на узбекский лад)", "station": "Омск", "price": "180", "deliveryTime": "120", "description": "Плов со свининой (на узбекский лад)\n", "indigridients": "250 г вырезки ягненка\n2 стакана белого риса\n1 средняя репчатая луковица\n2 средних моркови\n3 зубчика чеснока", "type": "3", "mainImageUrl": "https://tykvo.ru/images/recipe/vtorye-blyuda/iz-myasa/plov-s-yagnenkom.jpg", "kosher": false, "vegan": "", "diet": "", "halal": false, "timeslot-1-start": "8", "timeslot-1-finish": "14", "timeslot-2-start": "17", "timeslot-2-finish": "23", "timeslot-3-start": "", "timeslot-3-finish": "", "timeslot-4-start": "", "timeslot-4-finish": "", "company": "Bestfoodoff" },
    ];
    this.searchService.results$.subscribe((data)=>{
      this.results = data;
    })
  }

}
