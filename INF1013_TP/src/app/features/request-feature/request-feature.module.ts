import { RequestContainersModule } from './containers/containers.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestRoutingModule } from './request-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, RequestRoutingModule, RequestContainersModule],
})
export class RequestFeatureModule {}
