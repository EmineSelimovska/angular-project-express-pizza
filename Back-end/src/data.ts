

export const sample_foods: any[] = [
    {
        id: "1",
        name: "Margherita",
        price: 11.90,
        tags:["Mozzarella", "Pizza"],
        favorite: true,
        stars: 4.5,
        imageUrl: "assets/topimage-pizza-special17-800x500.jpg",
        origins: ["italy", "rome"],
        cookTime: "15-20",
    },
    {
        id: "2",
        name: "Tripple Mushroom",
        price: 12.90,
        tags:["Mushroom", "Vegetarian"],
        favorite: false,
        stars: 4.0,
        imageUrl: "assets/2002_pizza7_345x345@2x.webp",
        origins: ["italy"],
        cookTime: "15-20",
    },
    {
        id: "3",
        name: "Vegetarian",
        price: 12.90,
        tags:["Vegetarian", "Pizza"],
        favorite: false,
        stars: 3.5,
        imageUrl: "assets/vegetarian-pizza_4988.jpg",
        origins: ["italy"],
        cookTime: "15-20",
    },
    {
        id: "4",
        name: "Pepperoni",
        price: 12.90,
        tags:["Express", "Meat"],
        favorite: true,
        stars: 5.0,
        imageUrl: "assets/Pepperoni-Pizza-Recipe-Sip-Bite-Go.jpg",
        origins: ["italy"],
        cookTime: "15-25",
    },
    {
        id: "5",
        name: "Capricciosa",
        price: 15.90,
        tags:[ "Meat"],
        favorite: false,
        stars: 4.0,
        imageUrl: "assets/Pizza-CAPRICCIOSA-Italian-National-Food-By-Travel-S-Helper-3.jpg",
        origins: ["italy", "sicilia"],
        cookTime: "15-25",
    },
    {
        id: "6",
        name: "Prosciutto crudo",
        price: 15.80,
        tags:["Pizza", "Meat"],
        favorite: true,
        stars: 5.0,
        imageUrl: "assets/fit_640_400.png",
        origins: ["italy"],
        cookTime: "15-25",
    },
    {
        id: "7",
        name: "Prosciutto funghi",
        price: 15.80,
        tags:["Meat"],
        favorite: true,
        stars: 5.0,
        imageUrl: "assets/prosciuttoefunghi.jpg",
        origins: ["italy"],
        cookTime: "15-20",
    },
    {
        id: "8",
        name: "Quattro formaggi",
        price: 15.80,
        tags:["Express", "Cheese"],
        favorite: true,
        stars: 5.0,
        imageUrl: "assets/6421b870c3a0c85a9d35a3f2_quattro-fromaggi-pizza.jpg",
        origins: ["italy", "positano"],
        cookTime: "15-20",
    },
    {
        id: "9",
        name: "Quattro di carne",
        price: 15.80,
        tags:["Express", "Mozzarella"],
        favorite: false,
        stars: 4.0,
        imageUrl: "assets/pizza-quattro-carne-1.jpg",
        origins: ["italy"],
        cookTime: "15-20",
    },
    {
        id: "10",
        name: "Jalapeno Pizza",
        price: 16.80,
        tags:["Express", "Pizza"],
        favorite: true,
        stars: 4.7,
        imageUrl: "assets/Jalapeno-Popper-Pizza-7b.jpg",
        origins: ["italy"],
        cookTime: "15-25",
    }

]

export const sample_tags: any[] = [
    {name: "All", count: 10},
    {name: 'Mozzarella', count: 2},
    {name: 'Cheese', count: 1},
    {name: 'Pizza', count: 4},
    {name: 'Vegetarian', count: 2},
    {name: 'Meat', count: 4},
    {name:'Express', count: 4}
]

export const sample_users: any[] = [
    {
       
        name: "Emily Smith",
        email: "emily@abv.bg",
        password: "12345",
        address: "Bulgaria" ,
        isAdmin: true,
    },
    {
       
        name: "Mishel Simsan",
        email: "mishel@abv.bg",
        password: "12345",
        address: "Romania" ,
        isAdmin: false,
    }
]