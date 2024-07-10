// Task 1: Check if a user is logged in
let isLoggedIn = true; // Change this to false to simulate a user not being logged in

if (isLoggedIn) {
    console.log("You are logged in. You can add items to your cart.");
} else {
    console.log("Please log in to add items to your cart.");
}

// Task 2: List of available products
const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Tablet", price: 300 },
    { id: 4, name: "Headphones", price: 100 }
];

// Display available products
console.log("Available Products:");
products.forEach(product => {
    console.log(`${product.id}. ${product.name} - $${product.price}`);
});

// Cart to store selected products
let cart = [];

// Function to add products to the cart
function addToCart(productId) {
    if (isLoggedIn) {
        const product = products.find(p => p.id === productId);
        if (product) {
            cart.push(product);
            console.log(`${product.name} has been added to your cart.`);
        } else {
            console.log("Product not found.");
        }
    } else {
        console.log("Please log in to add items to your cart.");
    }
}

// Example: Adding items to the cart
addToCart(1); // Adds Laptop to the cart
addToCart(3); // Adds Tablet to the cart

// Task 3: Calculate the total cost of items in the cart
function calculateTotal() {
    let total = cart.reduce((sum, product) => sum + product.price, 0);
    console.log("Total cost of your cart: $" + total);
}

// Call the function to calculate the total
calculateTotal();
