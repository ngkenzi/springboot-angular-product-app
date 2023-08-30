import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ListComponent } from './list.component';
import { ProductService } from '../../services/product-service';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatToolbarModule,
    HttpClientModule,
    MatButtonModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    RouterModule,
    MatSortModule,
    MatSnackBarModule,
  ],
  providers: [ProductService],
})
export class ListModule {}
