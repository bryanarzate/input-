import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { PricePage } from '../price/price';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  date: any;
  daysInThisMonth: any;
  daysInLastMonth: any;
  daysInNextMonth: any;
  monthNames: string[];
  currentMonth: any;
  currentYear: any;
  currentDate: any;
  eventList = [
    {
      startDate : new Date('2018-7-19  00:01:00'),
      endDate : new Date('2018-7-19  00:02:00'),
      title: 'July 19 Booked From',
      location: 'Success',
      message : '1:00pm - 10:00pm'
    },
    {
      startDate : new Date('2018-7-28  00:01:00'),
      endDate : new Date('2018-7-28  00:02:00'),
      title: 'July 28 Booked From',
      location: 'Success',
      message : '7:00pm-12:00am'
    },
    {
      startDate : new Date('2018-7-29  00:01:00'),
      endDate : new Date('2018-7-29  00:02:00'),
      title: 'July 29 Booked From',
      location: 'Success',
      message : '5:00pm-9:00pm'
    },
    {
      startDate : new Date('2018-8-19  00:01:00'),
      endDate : new Date('2018-8-19  00:02:00'),
      title: 'August 19 Booked From',
      location: 'Success1',
      message : '1:00pm - 5:00pm'
    },
    {
      startDate : new Date('2018-8-3  00:01:00'),
      endDate : new Date('2018-8-3  00:02:00'),
      title: 'August 3 Booked From',
      location: 'Success',
      message : '8:00pm-1:00am'
    },
    {
      startDate : new Date('2018-8-4  00:01:00'),
      endDate : new Date('2018-8-4 00:02:00'),
      title: 'August 4 Booked From',
      location: 'Success',
      message : '8:00pm- 12:00am'
    },
    {
      startDate : new Date('2018-9-8  00:01:00'),
      endDate : new Date('2018-9-8  00:02:00'),
      title: 'Septemeber Booked From',
      location: 'Success',
      message : '1:00 - 10:00'
    },
  ];
  selectedEvent: any;
  isSelected: any;

  constructor(private alertCtrl: AlertController,
    public navCtrl: NavController,
    ) {
    }

  ionViewWillEnter() {
    this.date = new Date();
    this.monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    this.getDaysOfMonth();
    // this.loadEventThisMonth();
    console.log(this.eventList);
  }

  getDaysOfMonth() {
    this.daysInThisMonth = new Array();
    this.daysInLastMonth = new Array();
    this.daysInNextMonth = new Array();
    this.currentMonth = this.monthNames[this.date.getMonth()];
    this.currentYear = this.date.getFullYear();
    if(this.date.getMonth() === new Date().getMonth()) {
      this.currentDate = new Date().getDate();
    } else {
      this.currentDate = 999;
    }

    var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
    var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
    for(var i = prevNumOfDays-(firstDayThisMonth-1); i <= prevNumOfDays; i++) {
      this.daysInLastMonth.push(i);
    }

    var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDate();
    for (var j = 0; j < thisNumOfDays; j++) {
      this.daysInThisMonth.push(j+1);
    }

    var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDay();
    // var nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0).getDate();
    for (var k = 0; k < (6-lastDayThisMonth); k++) {
      this.daysInNextMonth.push(k+1);
    }
    var totalDays = this.daysInLastMonth.length+this.daysInThisMonth.length+this.daysInNextMonth.length;
    if(totalDays<36) {
      for(var l = (7-lastDayThisMonth); l < ((7-lastDayThisMonth)+7); l++) {
        this.daysInNextMonth.push(l);
      }
    }
  }

  goToLastMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
    this.getDaysOfMonth();
  }

  goToNextMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0);
    this.getDaysOfMonth();
  }

  /*addEvent() {
    this.navCtrl.push(AddEventPage);
  }*/

  loadEventThisMonth() {
    //this.eventList = new Array();
    var startDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
    var endDate = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0);
  }

  checkEvent(day) {
    var hasEvent = false;
    var thisDate1 = new Date(this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+day+" 00:00:00");
    var thisDate2 = new Date(this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+day+" 23:59:59");
    this.eventList.forEach(event => {
      if(((event.startDate >= thisDate1) && (event.startDate <= thisDate2)) || ((event.endDate >= thisDate1) && (event.endDate <= thisDate2))) {
        hasEvent = true;
      }
    });
    return hasEvent;
  }

  selectDate(day) {
    console.log('pressed button' + day);
    this.isSelected = false;
    this.selectedEvent = new Array();
    var thisDate1 = new Date(this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+day+" 00:00:00");
    var thisDate2 = new Date(this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+day+" 23:59:59");
    this.eventList.forEach(event => {
      if(((event.startDate >= thisDate1) && (event.startDate <= thisDate2)) || ((event.endDate >= thisDate1) && (event.endDate <= thisDate2))) {
        this.isSelected = true;
        console.log(this.isSelected);
        this.selectedEvent.push(event);
      }
    });
  }
 
}