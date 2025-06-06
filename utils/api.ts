import { APIRequestContext, expect } from "@playwright/test";

// Creating a class to manage API actions
export class api {
  // Storing API request context (used to make HTTP requests)
  readonly apiContext: Promise<APIRequestContext>;
  
// Constructor receives the API context (created outside this class)
  constructor(apiContext: Promise<APIRequestContext>) {
    this.apiContext = apiContext;
  }

   // Method to send a POST request to the wishlist API
  async wishlist(productDetails: object, endpointUrl: string) {
    // Sending the request with product data
    const response = await (
      await this.apiContext
    ).post(endpointUrl, {
      data: productDetails,
    });

    //assert api response
    expect(response.ok()).toBeTruthy();
  }

  // Method to send a POST request to the add-to-cart API
  async addToCart(product: object, endpoint: string) {
    const response = await (
      await this.apiContext
    ).post(endpoint, {
      data: product,
    });
  }
}
