// Centralized product data
// This can be replaced with API calls later

export const products = [
  {
    id: 1,
    name: 'Rose Lip Balm',
    price: 15,
    category: 'Lips',
    image: 'https://placehold.co/300x300?text=Lip+Balm',
    discount: 20,
    description: 'Moisturizing lip balm with rose extract for soft, hydrated lips.',
  },
  {
    id: 2,
    name: 'Hydrating Serum',
    price: 25,
    category: 'Skincare',
    image: 'https://placehold.co/300x300?text=Serum',
    discount: 35,
    description: 'Deep hydrating serum for glowing, radiant skin.',
  },
  {
    id: 3,
    name: 'Glow Foundation',
    price: 30,
    category: 'Makeup',
    image: 'https://placehold.co/300x300?text=Foundation',
    discount: 40,
    description: 'Lightweight foundation that gives you a natural glow.',
  },
  {
    id: 4,
    name: 'Matte Lipstick',
    price: 18,
    category: 'Lips',
    image: 'https://placehold.co/300x300?text=Lipstick',
    discount: 25,
    description: 'Long-lasting matte lipstick in various shades.',
  },
];

// Helper functions
export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const getProductsByCategory = (category) => {
  return products.filter(product => product.category.toLowerCase() === category.toLowerCase());
};

export const searchProducts = (searchTerm) => {
  const term = searchTerm.toLowerCase();
  return products.filter(product =>
    product.name.toLowerCase().includes(term) ||
    product.category.toLowerCase().includes(term) ||
    product.description.toLowerCase().includes(term)
  );
};
