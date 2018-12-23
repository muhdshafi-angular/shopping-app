import { CartItem } from './cart-item';
import { Product } from './product';


export class Cart {

    items: CartItem[] = [];

    constructor (public itemsMap: {[productId: string]: CartItem}) {
        this.itemsMap = itemsMap || {};

        for (const productId in itemsMap) {
            if (itemsMap.hasOwnProperty(productId)) {
                const item = new CartItem(); // reisit to use spread operator in typescript
                item.$key =  productId;
                item.title =  itemsMap[productId].title;
                item.price =  itemsMap[productId].price;
                item.quantity =  itemsMap[productId].quantity;
                item.image = itemsMap[productId].image;
                this.items.push(item);
            }
        }
    }

    get totalItemsCount() {
        let quantityTotal = 0;
        // forEach on Object properties
        Object.keys(this.items).forEach(productKey => {
          quantityTotal += this.items[productKey].quantity;
        });
        return quantityTotal;
    }

    get grandTotalPrice () {
        let sum = 0;
        for (const productId in this.items) {
            if (this.items.hasOwnProperty(productId)) {
           sum += this.items[productId].totalPrice;
            }
        }
        return sum;
    }

    getQty(product: Product) {

        const item: CartItem = this.itemsMap[product.$key];
        return item ? item.quantity : 0;
      }
}

