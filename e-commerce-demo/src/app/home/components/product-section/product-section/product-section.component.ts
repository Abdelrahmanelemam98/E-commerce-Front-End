import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/share/models/product';
import { ProductServiceService } from 'src/app/share/services/product-service.service';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.css'],
})
export class ProductSectionComponent {
  product: Product[] = [];
  constructor(
    private route: ActivatedRoute,
    private productService: ProductServiceService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct() {
    this.productService.getAllProduct().subscribe((data) => {
      this.product = data;
    });
  }
  getById(id: number) {
    this.router.navigate(['details/' + id]);
  }
}
