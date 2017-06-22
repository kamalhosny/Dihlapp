import { Component, OnInit } from '@angular/core';
import { DropdownModule } from 'ng2-dropdown';
import { MessageService } from '../../services/message.service';
import { RouterModule, Routes } from '@angular/router';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [MessageService]
})
export class UserComponent implements OnInit {
  name: string;
  isOnline: boolean;
  avatar: string;
  contacts: contact[];
  contactFilter: any = { name: '' };

  constructor(private messageService: MessageService) {
   }


  ngOnInit() {
    this.messageService.getConversations().subscribe(data => {
      console.log(data)
      this.contacts = data})
  }

}
interface contact {
  name: string;
  isOnline: boolean;
  avatar: string;
  lastMessage: string;
  lastMessageDate: string;
  isTyping:boolean;
}
