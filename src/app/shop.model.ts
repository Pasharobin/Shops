import { Product } from './product.model';

export class Shop {
    constructor (
        public name: string = '',
        public address: string = '',
        public time: string = '',
        public coordinates: number[] = [],
        public products: Product[] = []
    ) {}
}