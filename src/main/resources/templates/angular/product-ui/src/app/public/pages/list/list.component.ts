import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product-service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnDestroy, AfterViewInit {
  product!: Product;

  private _sub: Subscription = new Subscription();

  constructor(
    private _productService: ProductService,
    private _router: Router,
    private _cdRef: ChangeDetectorRef,
    private _snackbar: MatSnackBar
  ) {}

  dataSource!: MatTableDataSource<Product>;

  displayedColumns: string[] = [
    'id',
    'code',
    'name',
    'category',
    'brand',
    'type',
    'description',
    'actions',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this._loadProductList();
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }

  onEdit(code: string) {
    this._router.navigate(['/update/' + code]);
  }

  onDelete(code: string) {
    this._productService.deleteProductByCode(code).subscribe(() => {
      this._loadProductList();
      const snackBarRef = this._snackbar.open(
        'Product deleted successfully',
        '',
        { duration: 900 }
      );
      this._cdRef.detectChanges();
    });
  }

  onCreate() {
    this._router.navigate(['/add']);
  }

  private _loadProductList() {
    this._productService.listAllProducts().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
