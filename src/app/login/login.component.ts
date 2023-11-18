import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DATA_USERS } from '../@data/dataUsers';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  constructor(
   
    public fb: FormBuilder,
    private router: Router

  ) {

  }

  ngOnInit(): void {
  }

  commandeFilterForm = this.fb.group({
      username:'',
      password:''
  });

  
  username:string = '';
  password:string = '';
  userFound:boolean =false;

  onSubmit(){
    this.username;
    this.userFound=DATA_USERS.some(user => user.user.toUpperCase() === this.username.toUpperCase() && user.pass === this.password);
    if(this.userFound){
      localStorage.setItem('user',this.username);
      this.router.navigate(['/welcome']);
      
    }else{
      this.showNotification('Error Login', 'Username/Paasword incorrects');

      return;   
     }
  }

  private showNotification(title: string, body: string): void {
    alert(`${title}\n\n${body}`);
  }


  
}
