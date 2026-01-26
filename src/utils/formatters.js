// Format currency
export const formatCurrency = (amount, currency = '$') => {
  return `${currency}${parseFloat(amount).toFixed(2)}`;
};

// Format price with discount
export const formatPrice = (price, discount = 0) => {
  if (discount > 0) {
    const discountedPrice = price * (1 - discount / 100);
    return {
      original: formatCurrency(price),
      discounted: formatCurrency(discountedPrice),
      discount: discount,
    };
  }
  return {
    original: formatCurrency(price),
    discounted: null,
    discount: 0,
  };
};

// Format date
export const formatDate = (date, locale = 'en-US') => {
  return new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// Truncate text
export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

// Format product name (capitalize)
export const formatProductName = (name) => {
  return name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};
