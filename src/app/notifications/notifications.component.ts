import { Component, OnInit } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
  
  
})
export class NotificationsComponent implements OnInit {
  notifications;
  newITem;

  constructor() { }

  ngOnInit() {

    this.notifications=[
      {
        title:'Medical Conference Coming Up in May 18th 2017'
        
      },
      {
        title:'New mobile Application avaialable in AppStore from May 01,2017'
        
      },
      {
        title: 'New health analytics based on Machine Learning Algorithm Coming up in your Dashboard'
        
      },
      {
        title: 'Fmc4Me to be developed in Liferay DxP Platform'
        
      }
    ]
  }

  addNotification()
  {
    console.log(this.newITem);
    this.notifications.push({
    title:this.newITem

    });
  }

  deleteNotification(notificationTitle)
  {
    for(let index=0;index<=this.notifications.length;index++)
    {
         if(this.notifications[index].title == notificationTitle)
         {
           this.notifications.splice(index,1);
         }
    }

  }

}
