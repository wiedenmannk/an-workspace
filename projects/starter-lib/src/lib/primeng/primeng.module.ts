import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollPanelModule } from 'primeng/scrollpanel';

const exportModules: any = [ScrollPanelModule];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ... exportModules,
  ],
  exports: [...exportModules],
})
export class PrimengModule { }
