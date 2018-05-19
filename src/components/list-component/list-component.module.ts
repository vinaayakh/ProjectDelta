import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicPageModule } from 'ionic-angular';

import { CardComponentModule } from '../card-component/card-component.module';

import { SeasonalDataService } from '../../services/seasonal-data.service';

import { ListComponent } from './list-component';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    IonicPageModule.forChild(ListComponent),
    CardComponentModule,
    HttpModule
  ],
  exports: [
    ListComponent
  ],
  providers: [SeasonalDataService]
})
export class ListComponentModule { }
