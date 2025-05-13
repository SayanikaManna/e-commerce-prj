
// Sample product data with ratings and categories
/*const products = [
  {
    id: 1,
    name: "AirMax Running Shoes",
    price: 59.99,
    category: "shoes",
    image: "images/shoe1.jpg",
    rating: 4.5
  },
  {
    id: 2,
    name: "Elegant Handbag",
    price: 79.99,
    category: "handbags",
    image: "images/handbag1.webp",
    rating: 4.8
  },
  {
    id: 3,
    name: "Leather Office Bag",
    price: 65.50,
    category: "bags",
    image: "images/bag1.jpg",
    rating: 4.2
  },
  {
    id: 4,
    name: "Canvas Sneakers",
    price: 49.99,
    category: "sneakers",
    image: "images/sneaker1.jpg",
    rating: 4.3
  },
  {
    id: 5,
    name: "Denim Jacket",
    price: 99.00,
    category: "clothes",
    image: "images/jacket1.jpg",
    rating: 4.6
  },
  {
    id: 6,
    name: "Summer Floral Dress",
    price: 45.99,
    category: "clothes",
    image: "images/dress1.jpg",
    rating: 4.7
  },
  {
    id: 7,
    name: "Leather Boots",
    price: 89.99,
    category: "shoes",
    image: "images/shoe2.jpg",
    rating: 4.4
  },
  {
    id: 8,
    name: "Classic Wallet",
    price: 25.00,
    category: "accessories",
    image: "images/wallet1.jpg",
    rating: 4.1
  },

  {
    id: 9,
    name: "Floral Summer Dress",
    price: 39.99,
    rating: 4.5,
    image: "https://via.placeholder.com/300x300?text=Floral+Dress",
    category: "clothes"
  },
  {
    id: 10,
    name: "Elegant Evening Gown",
    price: 89.99,
    rating: 4.8,
    image: "https://via.placeholder.com/300x300?text=Evening+Gown",
    category: "clothes"
  },
  {
    id: 11,
    name: "Casual T-Shirt Dress",
    price: 25.99,
    rating: 4.2,
    image: "https://via.placeholder.com/300x300?text=T-Shirt+Dress",
    category: "clothes"
  },
  {
    id: 12,
    name: "Polka Dot Midi Dress",
    price: 45.00,
    rating: 4.4,
    image: "https://via.placeholder.com/300x300?text=Polka+Midi",
    category: "clothes"
  },
  {
    id: 13,
    name: "Linen Wrap Dress",
    price: 55.00,
    rating: 4.6,
    image: "https://via.placeholder.com/300x300?text=Linen+Wrap",
    category: "clothes"
  },

  // 👜 BAGS
  {
    id: 14,
    name: "Classic Leather Tote",
    price: 49.99,
    rating: 4.7,
    image: "images/bag2.jpg",
    category: "bags"
  },
  {
    id: 15,
    name: "Canvas Shoulder Bag",
    price: 29.99,
    rating: 4.1,
    image: "images/bag3.webp",
    category: "bags"
  },
  {
    id: 16,
    name: "Mini Crossbody Purse",
    price: 34.99,
    rating: 4.3,
    image: "images/bag4.webp",
    category: "bags"
  },
  {
    id: 17,
    name: "Fringe Suede Bag",
    price: 59.00,
    rating: 4.5,
    image: "images/bag5.jpg",
    category: "bags"
  },
  {
    id: 18,
    name: "Quilted Chain Bag",
    price: 64.99,
    rating: 4.6,
    image: "images/bag6.avif",
    category: "bags"
  },

  // 👟 SHOES
  {
    id: 19,
    name: "White Running Sneakers",
    price: 74.99,
    rating: 4.7,
    image: "images/shoe3.jpg",
    category: "shoes"
  },
  {
    id: 20,
    name: "Black High Heels",
    price: 89.00,
    rating: 4.6,
    image: "images/shoe4.webp",
    category: "shoes"
  },
  {
    id: 21,
    name: "Leather Ankle Boots",
    price: 99.99,
    rating: 4.8,
    image: "images/shoe5.webp",
    category: "shoes"
  },
  {
  id: 22,
  name: "AirTech Running Sneakers",
  price: 69.99,
  rating: 4.6,
  image: "images/sneaker2.jpg",
  category: "sneakers"
},
{
  id: 23,
  name: "StreetStyle High Tops",
  price: 79.99,
  rating: 4.4,
  image: "images/sneaker3.webp",
  category: "sneakers"
},
  {
    id: 24,
    name: "Flat Loafers",
    price: 59.99,
    rating: 4.3,
    image: "images/shoe6.webp",
    category: "shoes"
  },
  {
  id: 25,
  name: "Gold Hoop Earrings",
  price: 19.99,
  rating: 4.5,
  image: "https://via.placeholder.com/300x300?text=Gold+Hoops",
  category: "accessories"
},
{
  id: 26,
  name: "Silk Printed Scarf",
  price: 24.99,
  rating: 4.6,
  image: "https://via.placeholder.com/300x300?text=Printed+Scarf",
  category: "accessories"
},
{
  id: 27,
  name: "Leather Wristwatch",
  price: 49.99,
  rating: 4.7,
  image: "https://via.placeholder.com/300x300?text=Leather+Watch",
  category: "accessories"
},
{
  id: 28,
  name: "Boho Charm Bracelet",
  price: 14.99,
  rating: 4.3,
  image: "https://via.placeholder.com/300x300?text=Charm+Bracelet",
  category: "accessories"
},
{
  id: 29,
  name: "Sunglasses – UV Protection",
  price: 29.99,
  rating: 4.6,
  image: "https://via.placeholder.com/300x300?text=UV+Sunglasses",
  category: "accessories"
},
{
  id: 30,
  name: "Elegant Leather Handbag",
  price: 89.99,
  rating: 4.7,
  image: "images/handbag2.jpg",
  category: "handbags"
},
{
  id: 31,
  name: "Mini Crossbody Bag",
  price: 49.99,
  rating: 4.4,
  image: "images/handbag3.jpg",
  category: "handbags"
},
{
  id: 32,
  name: "Canvas Tote Handbag",
  price: 39.99,
  rating: 4.5,
  image: "images/handbag4.webp",
  category: "handbags"
},
{
  id: 33,
  name: "Stylish Quilted Purse",
  price: 59.99,
  rating: 4.6,
  image: "images/handbag5.webp",
  category: "handbags"
},

  {
    id: 34,
    name: "Casual Flip Flops",
    price: 19.99,
    rating: 4.0,
    image: "images/shoe7.jpg",
    category: "shoes"
  }
];
*/

const products = [
  {
    id: 1,
    name: "AirMax Running Shoes",
    price: 59.99,
    category: "shoes",
    image: "images/shoe1.jpg",
    rating: 4.5
  },
  {
    id: 2,
    name: "Elegant Handbag",
    price: 79.99,
    category: "handbags",
    image: "images/handbag1.webp",
    rating: 4.8
  },
  {
    id: 3,
    name: "Leather Office Bag",
    price: 65.50,
    category: "bags",
    image: "images/bag1.jpg",
    rating: 4.2
  },
  {
    id: 4,
    name: "Canvas Sneakers",
    price: 49.99,
    category: "sneakers",
    image: "images/sneaker1.jpg",
    rating: 4.3
  },
  {
    id: 5,
    name: "Denim Jacket",
    price: 99.00,
    category: "clothes",
    image: "images/cloth1.jpg",
    rating: 4.6
  },
  {
    id: 6,
    name: "Summer Floral Dress",
    price: 45.99,
    category: "clothes",
    image: "images/cloth2.webp",
    rating: 4.7
  },
  {
    id: 7,
    name: "Leather Boots",
    price: 89.99,
    category: "shoes",
    image: "images/shoe2.jpg",
    rating: 4.4
  },
  {
    id: 8,
    name: "Classic Wallet",
    price: 25.00,
    category: "accessories",
    image: "images/acce1.jpg",
    rating: 4.1
  },

  {
    id: 9,
    name: "Floral Summer Dress",
    price: 39.99,
    rating: 4.5,
    image: "images/cloth3.jpg",
    category: "clothes"
  },
  {
    id: 10,
    name: "Elegant Evening Gown",
    price: 89.99,
    rating: 4.8,
    image: "images/cloth4.jpg",
    category: "clothes"
  },
  {
    id: 11,
    name: "Casual T-Shirt Dress",
    price: 25.99,
    rating: 4.2,
    image: "images/cloth5.webp",
    category: "clothes"
  },
  {
    id: 12,
    name: "Polka Dot Midi Dress",
    price: 45.00,
    rating: 4.4,
    image: "images/cloth6.jpg",
    category: "clothes"
  },
  {
    id: 13,
    name: "Linen Wrap Dress",
    price: 55.00,
    rating: 4.6,
    image: "images/cloth7.jpg",
    category: "clothes"
  },

  // 👜 BAGS
  {
    id: 14,
    name: "Classic Leather Tote",
    price: 49.99,
    rating: 4.7,
    image: "images/bag2.jpg",
    category: "bags"
  },
  {
    id: 15,
    name: "Canvas Shoulder Bag",
    price: 29.99,
    rating: 4.1,
    image: "images/bag3.webp",
    category: "bags"
  },
  {
    id: 16,
    name: "Mini Crossbody Purse",
    price: 34.99,
    rating: 4.3,
    image: "images/bag4.webp",
    category: "bags"
  },
  {
    id: 17,
    name: "Fringe Suede Bag",
    price: 59.00,
    rating: 4.5,
    image: "images/bag5.jpg",
    category: "bags"
  },
  {
    id: 18,
    name: "Quilted Chain Bag",
    price: 64.99,
    rating: 4.6,
    image: "images/bag6.avif",
    category: "bags"
  },

  // 👟 SHOES
  {
    id: 19,
    name: "White Running Sneakers",
    price: 74.99,
    rating: 4.7,
    image: "images/shoe3.jpg",
    category: "shoes"
  },
  {
    id: 20,
    name: "Black High Heels",
    price: 89.00,
    rating: 4.6,
    image: "images/shoe4.webp",
    category: "shoes"
  },
  {
    id: 21,
    name: "Leather Ankle Boots",
    price: 99.99,
    rating: 4.8,
    image: "images/shoe5.webp",
    category: "shoes"
  },
  {
  id: 22,
  name: "AirTech Running Sneakers",
  price: 69.99,
  rating: 4.6,
  image: "images/sneaker2.jpg",
  category: "sneakers"
},
{
  id: 23,
  name: "StreetStyle High Tops",
  price: 79.99,
  rating: 4.4,
  image: "images/sneaker3.webp",
  category: "sneakers"
},
  {
    id: 24,
    name: "Flat Loafers",
    price: 59.99,
    rating: 4.3,
    image: "images/shoe6.webp",
    category: "shoes"
  },
  {
  id: 25,
  name: "Gold Hoop Earrings",
  price: 19.99,
  rating: 4.5,
  image: "images/acce2.webp",
  category: "accessories"
},
{
  id: 26,
  name: "Silk Printed Scarf",
  price: 24.99,
  rating: 4.6,
  image: "images/acce3.jpg",
  category: "accessories"
},
{
  id: 27,
  name: "Leather Wristwatch",
  price: 49.99,
  rating: 4.7,
  image: "images/acce4.jpg",
  category: "accessories"
},
{
  id: 28,
  name: "Boho Charm Bracelet",
  price: 14.99,
  rating: 4.3,
  image: "images/acce5.jpg",
  category: "accessories"
},
{
  id: 29,
  name: "Sunglasses – UV Protection",
  price: 29.99,
  rating: 4.6,
  image: "images/acce6.jpg",
  category: "accessories"
},
{
  id: 30,
  name: "Elegant Leather Handbag",
  price: 89.99,
  rating: 4.7,
  image: "images/handbag2.jpg",
  category: "handbags"
},
{
  id: 31,
  name: "Mini Crossbody Bag",
  price: 49.99,
  rating: 4.4,
  image: "images/handbag3.jpg",
  category: "handbags"
},
{
  id: 32,
  name: "Canvas Tote Handbag",
  price: 39.99,
  rating: 4.5,
  image: "images/handbag4.webp",
  category: "handbags"
},
{
  id: 33,
  name: "Stylish Quilted Purse",
  price: 59.99,
  rating: 4.6,
  image: "images/handbag5.webp",
  category: "handbags"
},

  {
    id: 34,
    name: "Casual Flip Flops",
    price: 19.99,
    rating: 4.0,
    image: "images/shoe7.jpg",
    category: "shoes"
  }
];

// 🔧 Add: Global reference for all products container
const ALL_PRODUCTS_CONTAINER = "product-list";


// Helper: Render star ratings
function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let stars = "★".repeat(fullStars);
  if (half) stars += "½";
  return `<span class="stars">${stars}</span>`;
}

// Display products dynamically
function displayProducts(containerId, filterCategory = null, limit = null, customFilter = null) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let filtered = [...products];

  if (filterCategory) {
    filtered = filtered.filter(p => p.category === filterCategory);
  }

  if (customFilter) {
    filtered = filtered.filter(customFilter);
  }

  if (limit) filtered = filtered.slice(0, limit);

  container.innerHTML = filtered.map(product => {
    const isWishlisted = (JSON.parse(localStorage.getItem("wishlist")) || []).some(item => item.id === product.id);
    const heartStyle = isWishlisted ? 'color:red;' : '';
    return `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <div class="rating">${renderStars(product.rating)} (${product.rating})</div>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})" class="btn add-to-cart">Add to Cart</button>
        <button onclick="toggleWishlist(${product.id})" class="btn wishlist-btn">
          <span id="wishlist-heart-${product.id}" class="heart-icon" style="${heartStyle}">❤️</span>
        </button>
      </div>
    `;
  }).join('');
}

// 🔧 Add: Search logic
function handleSearch() {
  const query = document.getElementById("search-input")?.value.toLowerCase();
  document.getElementById("search-btn")?.addEventListener("click", handleSearch);
  if (!query) return;
  displayProducts(ALL_PRODUCTS_CONTAINER, null, null, product =>
    product.name.toLowerCase().includes(query)
  );
}

// 🔧 Add: Sale filter logic (e.g., under $50)
function handleSaleFilter() {
  displayProducts(ALL_PRODUCTS_CONTAINER, null, null, product => product.price < 50);
}

// 🔧 Add: Category button handling
function setupCategoryButtons() {
  document.querySelectorAll("[data-category]").forEach(btn => {
    btn.addEventListener("click", () => {
      const category = btn.getAttribute("data-category");
      displayProducts(ALL_PRODUCTS_CONTAINER, category);
    });
  });
}

// Cart logic with localStorage
function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    const product = products.find(p => p.id === productId);
    cart.push({ ...product, qty: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Added to cart!");
}

// Wishlist toggle functionality
function toggleWishlist(productId) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const heartIcon = document.getElementById(`wishlist-heart-${productId}`);

  const existing = wishlist.find(item => item.id === productId);
  if (existing) {
    wishlist = wishlist.filter(item => item.id !== productId);
    if (heartIcon) heartIcon.style.color = "";
  } else {
    const product = products.find(p => p.id === productId);
    wishlist.push({ ...product });
    if (heartIcon) heartIcon.style.color = "red";
  }

  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  updateWishlistCount();
}

// Update cart count
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const countEl = document.getElementById("cart-count");
  if (countEl) countEl.textContent = totalCount;
}

// Update wishlist count
function updateWishlistCount() {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const totalCount = wishlist.length;
  const countEl = document.getElementById("wishlist-count");
  if (countEl) countEl.textContent = totalCount;
}

// Display cart and wishlist items
document.addEventListener("DOMContentLoaded", () => {
  displayProducts("featured-products", null, 4);

  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  displayProducts(ALL_PRODUCTS_CONTAINER, category);

  const cartContainer = document.getElementById("cart-items");
  const totalContainer = document.getElementById("cart-total");
  if (cartContainer) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;
    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
      cartContainer.innerHTML = cart.map(product => `
        <div class="cart-item">
          <img src="${product.image}" alt="${product.name}" width="80">
          <div>
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <p>Rating: ${product.rating} ⭐</p>
            <p>Quantity: ${product.qty}</p>
          </div>
        </div>
      `).join('');
      total = cart.reduce((sum, product) => sum + product.price * product.qty, 0);
      totalContainer.innerHTML = `<h2>Total: $${total.toFixed(2)}</h2>`;
    }
  }

  const wishlistContainer = document.getElementById("wishlist-items");
  if (wishlistContainer) {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (wishlist.length === 0) {
      wishlistContainer.innerHTML = "<p>Your wishlist is empty.</p>";
    } else {
      wishlistContainer.innerHTML = wishlist.map(product => `
        <div class="wishlist-item">
          <img src="${product.image}" alt="${product.name}" width="80">
          <div>
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <p>Rating: ${product.rating} ⭐</p>
          </div>
        </div>
      `).join('');
    }
  }

  // 🔧 Setup buttons
  updateCartCount();
  updateWishlistCount();
  setupCategoryButtons();

  document.getElementById("search-btn")?.addEventListener("click", handleSearch);
  document.getElementById("sale-btn")?.addEventListener("click", handleSaleFilter);
});
