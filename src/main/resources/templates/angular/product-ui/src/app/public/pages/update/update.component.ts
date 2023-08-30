import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product-service';
import { Product } from '../../models/product';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _productService: ProductService,
    private _router: Router,
    private _route: ActivatedRoute,
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

      this._route.paramMap.subscribe((params) => {
        const code = params.get('code') || '';

        this._productService
          .updateProductByCode(code, productData)
          .subscribe(() => {
            const snackBarRef = this._snackbar.open(
              'Product deleted successfully',
              '',
              { duration: 900 }
            );
            this._router.navigate(['../..']);
          });
      });
    }
  }

  onBack() {
    this._router.navigate(['../..']);
  }

  ngOnInit(): void {
    this._loadEditForm();
  }

  private _loadEditForm() {
    this._route.paramMap.subscribe((params) => {
      const code = params.get('code') || '';

      this._productService.findProductByCode(code).subscribe((response) => {
        this.form.patchValue({ ...response });
      });
    });
  }
}
