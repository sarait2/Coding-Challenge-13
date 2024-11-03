// Task 2 - Fetch Products from the API Using Fetch and Promises
const productList = document.getElementById('productList');

// Fetch data from the supplier's product API
fetch(https://www.course-api.com/javascript-store-products')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response as JSON
    })
    .then(products => {
        products.forEach(product => {
            const listItem = document.createElement('li');
            listItem.textContent = `${product.title} - $${product.price}`;
            productList.appendChild(listItem);
        });
    })
    // task 4 
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

// Task 3 - Display Product Details Dynamically
    const products = [
        {
            company: 'Walmart',
            name: 'Coffee Cup',
            price: 12.19,
            image: 'https://images.app.goo.gl/cMHgVqDqcGz2ew3y8'
        },
        {
            company: 'Amazon',
            name: 'Milk Frother',
            price: 5.99,
            image: 'https://images.app.goo.gl/KNJMbdvK5ytaanZi6'
        },
        {
            company: 'Starbucks',
            name: 'Coffee K Cups',
            price: 19.99,
            image: 'https://images.app.goo.gl/fm3Ub9kF6vLR4oHA7'
        },
        {
            company: 'Keurig',
            name: 'Coffee Maker',
            price: 99.99,
            image: 'https://images.app.goo.gl/N5a6o4FtydVvMdji9'
        }
    ];


