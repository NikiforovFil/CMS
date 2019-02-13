import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router, ActivatedRoute, Params } from '@angular/router';

// import { fadeStateTrigger } from 'src/app/shared/animations/fade.animation';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Title } from '@angular/platform-browser';
import { CcAuthService } from 'src/app/shared/services/ccAuth.service';
import { Md5 } from 'ts-md5/dist/md5'
import { Message } from 'src/app/shared/models/message.model';
import { ControlCompany } from 'src/app/shared/models/control-company.model';

@Component({
  selector: 'yh-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // animations: [fadeStateTrigger]
})

export class LoginComponent implements OnInit {
  ccUser: ControlCompany;
  isLoaded = false;

  form: FormGroup;
  message: Message;

  logoPath = "http://tvoydom24.com/api/logo.png";

  constructor(
    private usersService: CcAuthService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private title: Title
  ) {
    title.setTitle('Вход в систему');
  }

  ngOnInit() {
    this.message = new Message('danger', '');

    this.route.queryParams
      .subscribe((params: Params) => {
        if (params['nowCanLogin']) {
          this.showMessage({
            text: 'Теперь вы можете войти в систему',
            type: 'success'
          });
        } else if (params['accessDenied']) {
          this.showMessage({
            text: 'Для работы с системой вам необходимо авторизироваться',
            type: 'warning'
          });
        }
      })

    //привязка формы и валидация полей
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'stayInSystem': new FormControl()
    });
    this.isLoaded = true;
  }

  // выводит всплывающее сообщение на 5 секунд 
  private showMessage(message: Message) {
    this.message = message;
    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);
  }

  //кнопка войти
  onSubmit() {
    const formData = this.form.value;

    //обращение к сервису user.service
    this.usersService.getUserByEmail(formData.email)
      .subscribe((ccUser: ControlCompany) => {
        if (ccUser.id) {
          if (ccUser.password === Md5.hashStr(formData.password)) {
            this.message.text = '';
            this.ccUser = ccUser;
            this.ccUser['loginDate'] = new Date();

            // this.authService.login();
            if (this.form.value['stayInSystem']) {
              this.ccUser['stay'] = true;
            } else {
              this.ccUser['stay'] = false;
            }

            window.localStorage.setItem('ccUser', JSON.stringify(this.ccUser));
            this.router.navigate(['/system', 'statistics']);
          } else {
            this.showMessage({
              text: 'Пароль не верный',
              type: 'danger'
            })
          }
        } else {
          this.showMessage({
            text: 'Такого пользователя не существует',
            type: 'danger'
          });
        }
      });
  }
}
