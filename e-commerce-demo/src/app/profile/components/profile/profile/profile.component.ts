import {
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/share/models/product';
import { ProductServiceService } from 'src/app/share/services/product-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit, OnChanges, AfterViewInit {
  AllProducts: Product[] = [];
  constructor(
    private route: ActivatedRoute,
    private productService: ProductServiceService,
    private router: Router
  ) {}
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct() {
    this.productService.getAllProduct().subscribe((data) => {
      this.AllProducts = data;
      console.log(this.AllProducts);
    });
  }
  // function to delete
  deleteProduct(id: number) {
    const userConfirmed = confirm('Are You Sure?');
    if (userConfirmed) {
      this.productService.RemoveProduct(id).subscribe();
    }
  }
}
