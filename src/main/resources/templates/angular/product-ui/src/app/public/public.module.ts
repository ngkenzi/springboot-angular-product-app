import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { ListModule } from './pages/list/list.module';
import { CreateModule } from './pages/create/create.module';
import { UpdateModule } from './pages/update/update.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ListModule,
    CreateModule,
    UpdateModule,
  ],
})
export class PublicModule {}
