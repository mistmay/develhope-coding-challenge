import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NoSpaceValidator } from 'src/app/validators/no-space-validator';
import { SearchService } from 'src/app/services/search.service';
import { ApiService } from 'src/app/api/api.service';
import { Gender } from 'src/app/models/gender';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  currentId!: number;
  subscriptions: Subscription[] = [];

  constructor(private fb: FormBuilder, private searchService: SearchService, private api: ApiService) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.searchService.getCurrentIdSubject()
        .subscribe((res: number) => {
          this.currentId = res;
        }));
    this.form = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(1), NoSpaceValidator()])]
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }

  search(): void {
    this.subscriptions.push(
      this.api.getName(this.form.value.name.trim().toLowerCase())
        .subscribe((res: Gender) => {
          this.searchService.addSearch({ ...res, date: new Date(), id: this.currentId });
          this.searchService.incrementId();
          this.form.reset();
          alert('Ricerca Aggiunta con Successo');
        }));
  }

}
