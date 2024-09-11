import { Injectable } from '@angular/core';

export interface Product {
    id: number;
    name: string;
    price: number;
    shortDesc: string;
    longDesc: string;
    imageUrl: string;
}

@Injectable ({
    providedIn: 'root',
})
export class ProductService {
    // tablica przechowująca wszystkie produkty
    products: Product[] = [
        {
            id: 1,
            name: 'Z0wie L',
            price: 250,
            shortDesc: 'Mysz komputerowa',
            longDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec accumsan augue. Aliquam et aliquam mi. In hac habitasse platea dictumst. Ut fermentum eleifend quam, quis ultrices nisi euismod in. Sed ac elit non arcu faucibus cursus. Vestibulum tincidunt posuere laoreet. Curabitur non ornare purus. Proin ac tellus auctor, sodales metus id, dictum justo. Vestibulum non metus sit amet enim finibus tincidunt ut porttitor erat. Proin efficitur lectus non risus tincidunt mattis. Nulla ac felis arcu. Maecenas ut tempus ipsum. Nullam vestibulum, ligula quis vulputate mollis, sapien turpis fringilla eros, quis pretium massa odio id tortor. Nullam at posuere ipsum. Cras eu malesuada felis. Vivamus sed posuere lacus. ',
            imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 2,
            name: 'Soony Z2',
            price: 1200,
            shortDesc: 'Telefon komórkowy',
            longDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec accumsan augue. Aliquam et aliquam mi. In hac habitasse platea dictumst. Ut fermentum eleifend quam, quis ultrices nisi euismod in. Sed ac elit non arcu faucibus cursus. Vestibulum tincidunt posuere laoreet. Curabitur non ornare purus. Proin ac tellus auctor, sodales metus id, dictum justo. Vestibulum non metus sit amet enim finibus tincidunt ut porttitor erat. Proin efficitur lectus non risus tincidunt mattis. Nulla ac felis arcu. Maecenas ut tempus ipsum. Nullam vestibulum, ligula quis vulputate mollis, sapien turpis fringilla eros, quis pretium massa odio id tortor. Nullam at posuere ipsum. Cras eu malesuada felis. Vivamus sed posuere lacus. ',
            imageUrl: 'https://images.unsplash.com/photo-1517404215738-15263e9f9178?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 3,
            name: 'Sumsung G3',
            price: 2500,
            shortDesc: 'Telefon komórkowy',
            longDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec accumsan augue. Aliquam et aliquam mi. In hac habitasse platea dictumst. Ut fermentum eleifend quam, quis ultrices nisi euismod in. Sed ac elit non arcu faucibus cursus. Vestibulum tincidunt posuere laoreet. Curabitur non ornare purus. Proin ac tellus auctor, sodales metus id, dictum justo. Vestibulum non metus sit amet enim finibus tincidunt ut porttitor erat. Proin efficitur lectus non risus tincidunt mattis. Nulla ac felis arcu. Maecenas ut tempus ipsum. Nullam vestibulum, ligula quis vulputate mollis, sapien turpis fringilla eros, quis pretium massa odio id tortor. Nullam at posuere ipsum. Cras eu malesuada felis. Vivamus sed posuere lacus. ',
            imageUrl: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=1267&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 4,
            name: 'KB deathadder',
            price: 300,
            shortDesc: 'Klawiatura',
            longDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec accumsan augue. Aliquam et aliquam mi. In hac habitasse platea dictumst. Ut fermentum eleifend quam, quis ultrices nisi euismod in. Sed ac elit non arcu faucibus cursus. Vestibulum tincidunt posuere laoreet. Curabitur non ornare purus. Proin ac tellus auctor, sodales metus id, dictum justo. Vestibulum non metus sit amet enim finibus tincidunt ut porttitor erat. Proin efficitur lectus non risus tincidunt mattis. Nulla ac felis arcu. Maecenas ut tempus ipsum. Nullam vestibulum, ligula quis vulputate mollis, sapien turpis fringilla eros, quis pretium massa odio id tortor. Nullam at posuere ipsum. Cras eu malesuada felis. Vivamus sed posuere lacus. ',
            imageUrl: 'https://plus.unsplash.com/premium_photo-1677870728087-2257ce93bfe9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 5,
            name: 'Corsair Mem',
            price: 120,
            shortDesc: 'Pamięć RAM 8GB',
            longDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec accumsan augue. Aliquam et aliquam mi. In hac habitasse platea dictumst. Ut fermentum eleifend quam, quis ultrices nisi euismod in. Sed ac elit non arcu faucibus cursus. Vestibulum tincidunt posuere laoreet. Curabitur non ornare purus. Proin ac tellus auctor, sodales metus id, dictum justo. Vestibulum non metus sit amet enim finibus tincidunt ut porttitor erat. Proin efficitur lectus non risus tincidunt mattis. Nulla ac felis arcu. Maecenas ut tempus ipsum. Nullam vestibulum, ligula quis vulputate mollis, sapien turpis fringilla eros, quis pretium massa odio id tortor. Nullam at posuere ipsum. Cras eu malesuada felis. Vivamus sed posuere lacus. ',
            imageUrl: 'https://images.unsplash.com/photo-1704175970187-1f7eaaa30312?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 6,
            name: 'PELTOR mx1',
            price: 320,
            shortDesc: 'Dysk twardy 1TB',
            longDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec accumsan augue. Aliquam et aliquam mi. In hac habitasse platea dictumst. Ut fermentum eleifend quam, quis ultrices nisi euismod in. Sed ac elit non arcu faucibus cursus. Vestibulum tincidunt posuere laoreet. Curabitur non ornare purus. Proin ac tellus auctor, sodales metus id, dictum justo. Vestibulum non metus sit amet enim finibus tincidunt ut porttitor erat. Proin efficitur lectus non risus tincidunt mattis. Nulla ac felis arcu. Maecenas ut tempus ipsum. Nullam vestibulum, ligula quis vulputate mollis, sapien turpis fringilla eros, quis pretium massa odio id tortor. Nullam at posuere ipsum. Cras eu malesuada felis. Vivamus sed posuere lacus. ',
            imageUrl: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 7,
            name: 'Canon flex',
            price: 1500,
            shortDesc: 'Aparat fotograficzny',
            longDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec accumsan augue. Aliquam et aliquam mi. In hac habitasse platea dictumst. Ut fermentum eleifend quam, quis ultrices nisi euismod in. Sed ac elit non arcu faucibus cursus. Vestibulum tincidunt posuere laoreet. Curabitur non ornare purus. Proin ac tellus auctor, sodales metus id, dictum justo. Vestibulum non metus sit amet enim finibus tincidunt ut porttitor erat. Proin efficitur lectus non risus tincidunt mattis. Nulla ac felis arcu. Maecenas ut tempus ipsum. Nullam vestibulum, ligula quis vulputate mollis, sapien turpis fringilla eros, quis pretium massa odio id tortor. Nullam at posuere ipsum. Cras eu malesuada felis. Vivamus sed posuere lacus. ',
            imageUrl: 'https://images.unsplash.com/photo-1698502453332-03fa2ddceb71?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 8,
            name: 'Mvidia TeForce 42',
            price: 3755,
            shortDesc: 'Karta graficzna',
            longDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec accumsan augue. Aliquam et aliquam mi. In hac habitasse platea dictumst. Ut fermentum eleifend quam, quis ultrices nisi euismod in. Sed ac elit non arcu faucibus cursus. Vestibulum tincidunt posuere laoreet. Curabitur non ornare purus. Proin ac tellus auctor, sodales metus id, dictum justo. Vestibulum non metus sit amet enim finibus tincidunt ut porttitor erat. Proin efficitur lectus non risus tincidunt mattis. Nulla ac felis arcu. Maecenas ut tempus ipsum. Nullam vestibulum, ligula quis vulputate mollis, sapien turpis fringilla eros, quis pretium massa odio id tortor. Nullam at posuere ipsum. Cras eu malesuada felis. Vivamus sed posuere lacus. ',
            imageUrl: 'https://images.unsplash.com/photo-1587134160474-cd3c9a60a34a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 9,
            name: 'Untel core u9',
            price: 2820,
            shortDesc: 'Procesor komputerowy',
            longDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec accumsan augue. Aliquam et aliquam mi. In hac habitasse platea dictumst. Ut fermentum eleifend quam, quis ultrices nisi euismod in. Sed ac elit non arcu faucibus cursus. Vestibulum tincidunt posuere laoreet. Curabitur non ornare purus. Proin ac tellus auctor, sodales metus id, dictum justo. Vestibulum non metus sit amet enim finibus tincidunt ut porttitor erat. Proin efficitur lectus non risus tincidunt mattis. Nulla ac felis arcu. Maecenas ut tempus ipsum. Nullam vestibulum, ligula quis vulputate mollis, sapien turpis fringilla eros, quis pretium massa odio id tortor. Nullam at posuere ipsum. Cras eu malesuada felis. Vivamus sed posuere lacus. ',
            imageUrl: 'https://plus.unsplash.com/premium_photo-1681426701125-bed484a8c829?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 10,
            name: 'Counter Assault',
            price: 60,
            shortDesc: 'Gra komputerowa - akcja',
            longDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec accumsan augue. Aliquam et aliquam mi. In hac habitasse platea dictumst. Ut fermentum eleifend quam, quis ultrices nisi euismod in. Sed ac elit non arcu faucibus cursus. Vestibulum tincidunt posuere laoreet. Curabitur non ornare purus. Proin ac tellus auctor, sodales metus id, dictum justo. Vestibulum non metus sit amet enim finibus tincidunt ut porttitor erat. Proin efficitur lectus non risus tincidunt mattis. Nulla ac felis arcu. Maecenas ut tempus ipsum. Nullam vestibulum, ligula quis vulputate mollis, sapien turpis fringilla eros, quis pretium massa odio id tortor. Nullam at posuere ipsum. Cras eu malesuada felis. Vivamus sed posuere lacus. ',
            imageUrl: 'https://media.moddb.com/images/downloads/1/230/229503/8.jpg',
        },
        {
            id: 11,
            name: 'MiniCraft',
            price: 80,
            shortDesc: 'Gra komputerowa - przygodowa',
            longDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec accumsan augue. Aliquam et aliquam mi. In hac habitasse platea dictumst. Ut fermentum eleifend quam, quis ultrices nisi euismod in. Sed ac elit non arcu faucibus cursus. Vestibulum tincidunt posuere laoreet. Curabitur non ornare purus. Proin ac tellus auctor, sodales metus id, dictum justo. Vestibulum non metus sit amet enim finibus tincidunt ut porttitor erat. Proin efficitur lectus non risus tincidunt mattis. Nulla ac felis arcu. Maecenas ut tempus ipsum. Nullam vestibulum, ligula quis vulputate mollis, sapien turpis fringilla eros, quis pretium massa odio id tortor. Nullam at posuere ipsum. Cras eu malesuada felis. Vivamus sed posuere lacus. ',
            imageUrl: 'https://i1.sndcdn.com/artworks-000651213136-wwjt8l-t500x500.jpg',
        },
        {
            id: 12,
            name: 'Veko L233',
            price: 3200,
            shortDesc: 'Pralka',
            longDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec accumsan augue. Aliquam et aliquam mi. In hac habitasse platea dictumst. Ut fermentum eleifend quam, quis ultrices nisi euismod in. Sed ac elit non arcu faucibus cursus. Vestibulum tincidunt posuere laoreet. Curabitur non ornare purus. Proin ac tellus auctor, sodales metus id, dictum justo. Vestibulum non metus sit amet enim finibus tincidunt ut porttitor erat. Proin efficitur lectus non risus tincidunt mattis. Nulla ac felis arcu. Maecenas ut tempus ipsum. Nullam vestibulum, ligula quis vulputate mollis, sapien turpis fringilla eros, quis pretium massa odio id tortor. Nullam at posuere ipsum. Cras eu malesuada felis. Vivamus sed posuere lacus. ',
            imageUrl: 'https://plus.unsplash.com/premium_photo-1675937428916-535f85f41c61?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 13,
            name: 'Gisense NextCooking',
            price: 2960,
            shortDesc: 'Kuchnia gazowa',
            longDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec accumsan augue. Aliquam et aliquam mi. In hac habitasse platea dictumst. Ut fermentum eleifend quam, quis ultrices nisi euismod in. Sed ac elit non arcu faucibus cursus. Vestibulum tincidunt posuere laoreet. Curabitur non ornare purus. Proin ac tellus auctor, sodales metus id, dictum justo. Vestibulum non metus sit amet enim finibus tincidunt ut porttitor erat. Proin efficitur lectus non risus tincidunt mattis. Nulla ac felis arcu. Maecenas ut tempus ipsum. Nullam vestibulum, ligula quis vulputate mollis, sapien turpis fringilla eros, quis pretium massa odio id tortor. Nullam at posuere ipsum. Cras eu malesuada felis. Vivamus sed posuere lacus. ',
            imageUrl: 'https://images.unsplash.com/photo-1623114112815-74a4b9fe505d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 14,
            name: 'Coffe Lite',
            price: 1111,
            shortDesc: 'Ekspres do kawy',
            longDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec accumsan augue. Aliquam et aliquam mi. In hac habitasse platea dictumst. Ut fermentum eleifend quam, quis ultrices nisi euismod in. Sed ac elit non arcu faucibus cursus. Vestibulum tincidunt posuere laoreet. Curabitur non ornare purus. Proin ac tellus auctor, sodales metus id, dictum justo. Vestibulum non metus sit amet enim finibus tincidunt ut porttitor erat. Proin efficitur lectus non risus tincidunt mattis. Nulla ac felis arcu. Maecenas ut tempus ipsum. Nullam vestibulum, ligula quis vulputate mollis, sapien turpis fringilla eros, quis pretium massa odio id tortor. Nullam at posuere ipsum. Cras eu malesuada felis. Vivamus sed posuere lacus. ',
            imageUrl: 'https://coffeeplanet.eu/1056-large_default/ekspres-do-kawy-jura-e6-piano-black.jpg',
        },
        {
            id: 15,
            name: 'Windows 11 Pro',
            price: 99,
            shortDesc: 'System operacyjny',
            longDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec accumsan augue. Aliquam et aliquam mi. In hac habitasse platea dictumst. Ut fermentum eleifend quam, quis ultrices nisi euismod in. Sed ac elit non arcu faucibus cursus. Vestibulum tincidunt posuere laoreet. Curabitur non ornare purus. Proin ac tellus auctor, sodales metus id, dictum justo. Vestibulum non metus sit amet enim finibus tincidunt ut porttitor erat. Proin efficitur lectus non risus tincidunt mattis. Nulla ac felis arcu. Maecenas ut tempus ipsum. Nullam vestibulum, ligula quis vulputate mollis, sapien turpis fringilla eros, quis pretium massa odio id tortor. Nullam at posuere ipsum. Cras eu malesuada felis. Vivamus sed posuere lacus. ',
            imageUrl: 'https://xsoft.com.ua/image/catalog/Windows/11%20Pro%20Box/Windows_11_Pro_box_ru_samete-com-ua.jpg',
        },
        {
            id: 16,
            name: 'MPhone 22 Pro MAX',
            price: 7000,
            shortDesc: 'Telefon komórkowy',
            longDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec accumsan augue. Aliquam et aliquam mi. In hac habitasse platea dictumst. Ut fermentum eleifend quam, quis ultrices nisi euismod in. Sed ac elit non arcu faucibus cursus. Vestibulum tincidunt posuere laoreet. Curabitur non ornare purus. Proin ac tellus auctor, sodales metus id, dictum justo. Vestibulum non metus sit amet enim finibus tincidunt ut porttitor erat. Proin efficitur lectus non risus tincidunt mattis. Nulla ac felis arcu. Maecenas ut tempus ipsum. Nullam vestibulum, ligula quis vulputate mollis, sapien turpis fringilla eros, quis pretium massa odio id tortor. Nullam at posuere ipsum. Cras eu malesuada felis. Vivamus sed posuere lacus. ',
            imageUrl: 'https://www.deviceparts.com/images/detailed/265/81820210806161420.jpg',
        },
        {
            id: 17,
            name: 'Doors XP 2000',
            price: 899,
            shortDesc: 'System operacyjny',
            longDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec accumsan augue. Aliquam et aliquam mi. In hac habitasse platea dictumst. Ut fermentum eleifend quam, quis ultrices nisi euismod in. Sed ac elit non arcu faucibus cursus. Vestibulum tincidunt posuere laoreet. Curabitur non ornare purus. Proin ac tellus auctor, sodales metus id, dictum justo. Vestibulum non metus sit amet enim finibus tincidunt ut porttitor erat. Proin efficitur lectus non risus tincidunt mattis. Nulla ac felis arcu. Maecenas ut tempus ipsum. Nullam vestibulum, ligula quis vulputate mollis, sapien turpis fringilla eros, quis pretium massa odio id tortor. Nullam at posuere ipsum. Cras eu malesuada felis. Vivamus sed posuere lacus. ',
            imageUrl: 'https://proline.pl/pic/windows-xp-prof-pl-1_0.jpg',
        },
        {
            id: 18,
            name: 'Seyheiser 89NC',
            price: 1300,
            shortDesc: 'Słuchawki z NC',
            longDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec accumsan augue. Aliquam et aliquam mi. In hac habitasse platea dictumst. Ut fermentum eleifend quam, quis ultrices nisi euismod in. Sed ac elit non arcu faucibus cursus. Vestibulum tincidunt posuere laoreet. Curabitur non ornare purus. Proin ac tellus auctor, sodales metus id, dictum justo. Vestibulum non metus sit amet enim finibus tincidunt ut porttitor erat. Proin efficitur lectus non risus tincidunt mattis. Nulla ac felis arcu. Maecenas ut tempus ipsum. Nullam vestibulum, ligula quis vulputate mollis, sapien turpis fringilla eros, quis pretium massa odio id tortor. Nullam at posuere ipsum. Cras eu malesuada felis. Vivamus sed posuere lacus. ',
            imageUrl: 'https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 19,
            name: 'EarPods PRO12',
            price: 122,
            shortDesc: 'Słuchawki dokanałowe',
            longDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec accumsan augue. Aliquam et aliquam mi. In hac habitasse platea dictumst. Ut fermentum eleifend quam, quis ultrices nisi euismod in. Sed ac elit non arcu faucibus cursus. Vestibulum tincidunt posuere laoreet. Curabitur non ornare purus. Proin ac tellus auctor, sodales metus id, dictum justo. Vestibulum non metus sit amet enim finibus tincidunt ut porttitor erat. Proin efficitur lectus non risus tincidunt mattis. Nulla ac felis arcu. Maecenas ut tempus ipsum. Nullam vestibulum, ligula quis vulputate mollis, sapien turpis fringilla eros, quis pretium massa odio id tortor. Nullam at posuere ipsum. Cras eu malesuada felis. Vivamus sed posuere lacus. ',
            imageUrl: 'https://images.unsplash.com/photo-1660581283991-d6278d9dce53?q=80&w=2147&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 20,
            name: 'EQUIVALENT MousePad',
            price: 40,
            shortDesc: 'Podkładka pod mysz',
            longDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec accumsan augue. Aliquam et aliquam mi. In hac habitasse platea dictumst. Ut fermentum eleifend quam, quis ultrices nisi euismod in. Sed ac elit non arcu faucibus cursus. Vestibulum tincidunt posuere laoreet. Curabitur non ornare purus. Proin ac tellus auctor, sodales metus id, dictum justo. Vestibulum non metus sit amet enim finibus tincidunt ut porttitor erat. Proin efficitur lectus non risus tincidunt mattis. Nulla ac felis arcu. Maecenas ut tempus ipsum. Nullam vestibulum, ligula quis vulputate mollis, sapien turpis fringilla eros, quis pretium massa odio id tortor. Nullam at posuere ipsum. Cras eu malesuada felis. Vivamus sed posuere lacus. ',
            imageUrl: 'https://images.unsplash.com/photo-1650566301820-ded93a1bb635?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        // więcej produktów
    ]
    getAllProducts() {
        return this.products;
    }

    getProduct(p_id: number) {
        return this.products.find(item => item.id === p_id);
    }
}