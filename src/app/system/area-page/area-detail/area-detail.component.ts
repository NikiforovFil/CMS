import { Component, OnInit, Input, OnDestroy, TemplateRef, Output, EventEmitter } from '@angular/core';
import { Area } from '../../shared/models/area.model';
import { User } from '../../shared/models/user.model';
import { UsersService } from '../../shared/services/users.service';
import { Subscription } from 'rxjs';
import { CountersTypes } from '../../shared/models/countersTypes.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal/public_api';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AreaService } from '../../shared/services/area.service';

@Component({
  selector: 'yh-area-detail',
  templateUrl: './area-detail.component.html',
  styleUrls: ['./area-detail.component.scss']
})
export class AreaDetailComponent implements OnInit, OnDestroy {
  @Input() areaItem: Area;

  @Output() onApply = new EventEmitter();

  isLoaded = false;
  s1: Subscription;
  s2: Subscription;

  usersList: User[];

  formEdit: FormGroup;
  modalRef: BsModalRef;

  constructor(private usersService: UsersService, private modalService: BsModalService, private areaService: AreaService) { }

  ngOnInit() {
    this.s1 = this.usersService.getUsersByAddress(this.areaItem.city, this.areaItem.street, this.areaItem.home, this.areaItem.liter)
      .subscribe((data: User[]) => {
        this.usersList = data['users'];
        if (this.usersList) {
          this.usersList.reverse();
        }

        this.isLoaded = true;
      })
  }

  countersList = CountersTypes();

  openModal(template: TemplateRef<any>) {

    this.formEdit = new FormGroup({
      'gas': new FormControl(this.getStatus('gas')),
      'hot_water': new FormControl(this.getStatus('hot_water')),
      'cold_water': new FormControl(this.getStatus('cold_water')),
      'electricity': new FormControl(this.getStatus('electricity')),
      'heating': new FormControl(this.getStatus('heating'))
    });

    this.modalRef = this.modalService.show(template);
  }

  private getStatus(type:string) {
    return this.areaItem[type] == 1 ? 1 : 0;
  }

  onEditCounter() {
    this.isLoaded = false;
    return this.s2 = this.areaService.editCountersList(this.areaItem.id, this.formEdit.value)
      .subscribe(() => {
        this.onApply.emit();
        this.isLoaded = true;
      })
  }

  ngOnDestroy() {
    if (this.s1) { this.s1.unsubscribe() }
  }
}
