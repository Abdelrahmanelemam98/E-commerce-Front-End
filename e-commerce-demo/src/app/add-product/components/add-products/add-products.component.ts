import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductServiceService } from 'src/app/share/services/product-service.service';
import { Product } from 'src/app/share/models/product';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css'],
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductServiceService
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      categories: ['', Validators.required],
      image: [''],
      minimumQuantity: ['', [Validators.required, Validators.min(1)]],
      price: ['', [Validators.required, Validators.min(0)]],
      discount: ['', [Validators.required, Validators.min(0)]],
    });
  }

  // Getter methods for form controls to access them in the template
  get name() {
    return this.productForm.get('name');
  }

  get categories() {
    return this.productForm.get('categories');
  }

  get minimumQuantity() {
    return this.productForm.get('minimumQuantity');
  }

  get price() {
    return this.productForm.get('price');
  }

  get discount() {
    return this.productForm.get('discount');
  }

  ngOnInit() {
    // Additional initialization code, if needed
  }

  onSubmit() {
    if (this.productForm.valid) {
      // Create a Product object and post it to your API
      const productData: Product = this.productForm.value;
      this.productService.AddProduct(productData).subscribe((data) => {
        // Handle the success response
        console.log('Product added successfully:', data);
      });
    }
  }
}
