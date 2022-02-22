import { RequestComponent } from './request/request.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [RequestComponent],
  imports: [CommonModule, RequestComponentsModule],
})
export class RequestContainersModule {}
