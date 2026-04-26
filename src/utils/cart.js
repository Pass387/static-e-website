// utils/cart.js
// Simple in-memory cart with event-based reactivity
// Since this is a static site, cart state lives in memory (resets on refresh)
// You can replace with localStorage if you want persistence

let cart = [];
const listeners = new Set();

export function getCart() {
  return [...cart];
}

export function addToCart(product) {
  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  notifyListeners();
}

export function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  notifyListeners();
}

export function updateQty(productId, qty) {
  if (qty < 1) {
    removeFromCart(productId);
    return;
  }
  const item = cart.find((i) => i.id === productId);
  if (item) item.qty = qty;
  notifyListeners();
}

export function clearCart() {
  cart = [];
  notifyListeners();
}

export function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

export function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function notifyListeners() {
  listeners.forEach((fn) => fn(getCart()));
}

export function subscribeToCart(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn); // returns unsubscribe
}
