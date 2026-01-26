/**
 * @typedef {Object} Product
 * @property {number} id - Product ID
 * @property {string} name - Product name
 * @property {number} price - Product price
 * @property {string} category - Product category
 * @property {string} image - Product image URL
 * @property {number} [discount] - Discount percentage
 * @property {string} [description] - Product description
 */

/**
 * @typedef {Object} CartItem
 * @property {number} id - Product ID
 * @property {string} name - Product name
 * @property {number} price - Product price
 * @property {number} quantity - Item quantity
 * @property {string} [image] - Product image URL
 */

/**
 * @typedef {Object} User
 * @property {number} id - User ID
 * @property {string} name - User name
 * @property {string} email - User email
 * @property {string} [phone] - User phone number
 */

/**
 * @typedef {Object} Order
 * @property {number} id - Order ID
 * @property {number} userId - User ID
 * @property {CartItem[]} items - Order items
 * @property {number} total - Order total
 * @property {string} status - Order status
 * @property {Date} createdAt - Order creation date
 */

/**
 * @typedef {Object} Address
 * @property {string} street - Street address
 * @property {string} city - City
 * @property {string} state - State/Province
 * @property {string} zipCode - ZIP/Postal code
 * @property {string} country - Country
 */

// Export types for JSDoc usage
export const Product = {};
export const CartItem = {};
export const User = {};
export const Order = {};
export const Address = {};
