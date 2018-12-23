import { Product } from './product';

export class CartItem {
    $key;
    title;
    quantity;
    price;
    image;

    get totalPrice() {
        return this.price * this.quantity;
    }
}
