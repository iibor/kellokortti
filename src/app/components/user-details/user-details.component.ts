import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/models/user';
import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  id: string;
  user: User;

  constructor(private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private fms: FlashMessagesService) { }

  ngOnInit() {
   // get id from url
   this.id = this.route.snapshot.params['id'];

   this.userService.getUser(this.id).subscribe(user => {
     this.user = user;
   })
  }

}
