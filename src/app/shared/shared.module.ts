import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoaderComponent } from './components/loader/loader.component';
import { AuthService } from './services/auth.service';
import { CcAuthService } from './services/ccAuth.service';


@NgModule({
    declarations: [LoaderComponent],
    imports: [ReactiveFormsModule, FormsModule],
    exports: [ReactiveFormsModule, FormsModule, LoaderComponent],
    providers: [AuthService, CcAuthService]
})

export class SharedModule { }