import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/share/models/product';
import { ProductServiceService } from 'src/app/share/services/product-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  details: Product | null = null;

  constructor(
    private activeRoute: ActivatedRoute,
    private productService: ProductServiceService
  ) {}
  ngOnInit(): void {
    this.activeRoute.params.subscribe((param) => {
      this.productService.getProductById(param['id']).subscribe((data) => {
        this.details = data;
        console.log(this.details);
      });
    });
  }
}
