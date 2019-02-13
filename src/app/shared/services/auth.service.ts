export class AuthService {
    ccUser;
    date: Date;

    logout() {
        window.localStorage.clear();
    }

    isLoggedIn(): boolean {
        //вытаскивание из локальной переменной браузера данные пользователя
        this.ccUser = JSON.parse(window.localStorage.getItem('ccUser'));
        if (this.ccUser) {
            this.date = this.ccUser['loginDate'];

            if (this.ccUser['stay']) {
                return true;
            } else if (+new Date() - (+new Date(this.date)) <= 1800000) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}