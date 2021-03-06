import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { SharedModule } from '../shared/shared.module'
import { LogInComponent } from './components/auth/log-in/log-in.component'
import { SignUpComponent } from './components/auth/sign-up/sign-up.component'

import { PublicRoutingModule } from './public-routing.module'
import { PublicComponent } from './public.component'
import { FruitsComponent } from './components/fruits/fruits.component'
import { ItemCardComponent } from './components/fruits/item-card/item-card.component'


@NgModule({
  declarations: [
    PublicComponent,
    SignUpComponent,
    LogInComponent,
    FruitsComponent,
    ItemCardComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    PublicRoutingModule,
    SharedModule
  ]
})
export class PublicModule { }
