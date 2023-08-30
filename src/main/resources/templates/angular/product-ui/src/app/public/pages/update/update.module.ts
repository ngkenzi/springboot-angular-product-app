import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateComponent } from './update.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductService } from '../../services/product-service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UpdateComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatToolbarModule,
    HttpClientModule,
    MatButtonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    RouterModule,
  ],
  providers: [ProductService],
})
export class UpdateModule {}
