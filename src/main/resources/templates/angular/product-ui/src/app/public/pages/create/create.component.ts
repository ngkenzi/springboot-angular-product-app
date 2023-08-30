import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product-service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _productService: ProductService,
    private _router: Router,
    private _snackbar: MatSnackBar
  ) {
    this.form = this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      category: ['', Validators.required],
      brand: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const productData: Product = this.form.value;

      this._productService.addProduct(productData).subscribe((response) => {
        const snackBarRef = this._snackbar.open(
          'New product added successfully',
          '',
          { duration: 900 }
        );
        this._router.navigate(['../..']);
      });
    }
  }

  onBack() {
    this._router.navigate(['../..']);
  }
}
