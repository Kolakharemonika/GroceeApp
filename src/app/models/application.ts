
export class MenuTreeDetails {
    success: boolean;
    categories: any[];
    // foodCategories: any[];

    constructor(jsonObj:any) {
        if(jsonObj){
            this.success = jsonObj.success ? jsonObj.success : false;
            this.categories = new Array();
            // this.foodCategories = new Array();

            if(jsonObj.categories && jsonObj.categories.length){
                jsonObj.categories.forEach((item : any) => {
                    this.categories.push(new Category(item));
                })
            }
            // if(jsonObj.foodCategories && jsonObj.foodCategories.length){
            //   jsonObj.foodCategories.forEach((item: any) => {
            //         this.foodCategories.push(new Category(item));
            //     })
            // }

        } else {
            this.success = false;
            this.categories = new Array();
            // this.foodCategories = new Array();
        }
    }
}

export class Category {
    id: any;
    name: string;
    avatar: string;
    note: string;
    description: string;

    // childrens: any[];
    menuItems: MenuItem[];

    // totalPages: number = 1;
    // beverage: number;

    constructor(jsonObj:any){
        if(jsonObj){
            this.id = jsonObj.id ? jsonObj.id : null;
            this.name = jsonObj.name ? jsonObj.name : '';
            this.note = jsonObj.note ? jsonObj.note : '';
            this.avatar = jsonObj.avatar ? jsonObj.avatar : '';
            this.description = jsonObj.description ? jsonObj.description : '';
            // this.beverage = jsonObj.beverage ? jsonObj.beverage : 0;

            // this.childrens = new Array();
            // if(jsonObj.childrens && jsonObj.childrens.length){
            //     this.childrens = jsonObj.childrens;
            // }

            this.menuItems = new Array();
            if(jsonObj.menuItems && jsonObj.menuItems.length) {
                jsonObj.menuItems.forEach((item:any) => {
                    this.menuItems.push(new MenuItem(item));
                })
            }
        } else {
            this.id = null;
            this.name = '';
            this.note = '';
            this.avatar = '';
            this.description = '';
            // this.beverage = 0;

            // this.childrens = new Array();
            this.menuItems = new Array();
        }
    }
}

export class MenuItem {
    id: any;
    name: string;
    avatar: string;
    price: number;
    totalCost: number;
    discountedPrice: number;
    discountPercentage: string;

    serveQuantity: number;
    unit: number;

    quantity: number;
    measures: string;

    rating: number;

    orderItemId: any;
    status: any;

    constructor(jsonObj:any){
        if(jsonObj){
            this.id = jsonObj.id ? jsonObj.id : '';
            this.name = jsonObj.name ? jsonObj.name : '';
            this.avatar = jsonObj.avatar ? jsonObj.avatar : '';
            this.price = jsonObj.price ? +jsonObj.price : 0;
            this.totalCost = jsonObj.totalCost ? +jsonObj.totalCost : 0;
            this.discountedPrice = jsonObj.discountedPrice ? +jsonObj.discountedPrice : 0;
            this.discountPercentage = jsonObj.discountPercentage ? jsonObj.discountPercentage : '';

            this.measures = jsonObj.measures ? jsonObj.measures : '';
            this.serveQuantity = jsonObj.serveQuantity ? jsonObj.serveQuantity : 0;
            this.unit = jsonObj.unit ? jsonObj.unit : 0;
            this.rating = jsonObj.rating ? jsonObj.rating : 0;
            this.orderItemId = jsonObj.orderItemId ? jsonObj.orderItemId : null;
            this.status = jsonObj.status ? jsonObj.status : null;

            this.quantity = 0;

        } else {
            this.id = null;
            this.name = '';
            this.avatar = '';
            this.price = 0;
            this.totalCost = 0;
            this.discountedPrice = 0;
            this.discountPercentage = '';
            this.measures = '';
            this.serveQuantity = 0;
            this.unit = 0;
            this.rating = 0;
            this.orderItemId = null;
            this.status = null;

            this.quantity = 0;
        }

    }
}
