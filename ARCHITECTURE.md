# Glowify E-commerce Architecture

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx
│   ├── Input.jsx
│   ├── LoadingSpinner.jsx
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   └── ...
│
├── context/            # React Context providers
│   ├── AuthContext.jsx    # Authentication state
│   ├── CartContext.jsx    # Shopping cart state
│   ├── ThemeContext.jsx   # Theme (light/dark) state
│   └── index.js
│
├── constants/          # App-wide constants
│   ├── config.js          # App configuration
│   ├── routes.js          # Route definitions
│   └── index.js
│
├── data/               # Static data & mock data
│   └── products.js       # Product data
│
├── hooks/              # Custom React hooks
│   ├── useDebounce.js
│   ├── useLocalStorage.js
│   ├── useMediaQuery.js
│   ├── useProducts.js
│   └── index.js
│
├── pages/              # Route-level components
│   ├── Homepage.jsx
│   ├── Products.jsx
│   ├── Cart.jsx
│   ├── ProductListing.jsx
│   └── ...
│
├── services/           # API service layer
│   ├── api.js            # Base API service
│   ├── authService.js    # Authentication API
│   ├── orderService.js   # Orders API
│   ├── productService.js # Products API
│   └── index.js
│
├── types/              # TypeScript/JSDoc types
│   └── index.js
│
├── utils/              # Utility functions
│   ├── formatters.js     # Data formatting
│   ├── helpers.js        # General helpers
│   ├── storage.js        # LocalStorage helpers
│   ├── validators.js     # Form validation
│   └── index.js
│
└── App.js              # Root component
```

## 🏗️ Architecture Principles

### 1. **Separation of Concerns**
- **Components**: UI only, no business logic
- **Context**: Global state management
- **Services**: API calls and external integrations
- **Utils**: Pure functions, no side effects
- **Hooks**: Reusable stateful logic

### 2. **Scalability**
- Modular structure allows easy addition of features
- Services layer ready for backend integration
- Context providers can be extended
- Hooks promote code reuse

### 3. **Maintainability**
- Clear folder structure
- Consistent naming conventions
- Centralized constants and configuration
- Reusable components and utilities

## 📦 Key Features

### Context Providers
- **CartContext**: Manages shopping cart state with localStorage persistence
- **AuthContext**: Handles user authentication state
- **ThemeContext**: Manages light/dark theme switching

### Custom Hooks
- **useLocalStorage**: Syncs state with localStorage
- **useProducts**: Product data fetching and filtering
- **useDebounce**: Debounces values for search/input
- **useMediaQuery**: Responsive design helpers

### Services Layer
- **api.js**: Base HTTP client with error handling
- **productService.js**: Product CRUD operations
- **authService.js**: Authentication operations
- **orderService.js**: Order management

### Utilities
- **formatters.js**: Currency, date, text formatting
- **validators.js**: Form validation helpers
- **storage.js**: LocalStorage wrapper with error handling
- **helpers.js**: General utility functions (debounce, throttle, etc.)

## 🚀 Usage Examples

### Using Context
```jsx
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

function MyComponent() {
  const { addToCart, cartItems } = useCart();
  const { user, isAuthenticated } = useAuth();
  // ...
}
```

### Using Custom Hooks
```jsx
import { useProducts, useDebounce } from '../hooks';

function ProductSearch() {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);
  const { products, loading } = useProducts({ searchTerm: debouncedSearch });
  // ...
}
```

### Using Services
```jsx
import { productService } from '../services';

async function fetchProducts() {
  try {
    const products = await productService.getAll();
    return products;
  } catch (error) {
    console.error('Failed to fetch products:', error);
  }
}
```

### Using Utilities
```jsx
import { formatCurrency, isValidEmail, storage } from '../utils';

const price = formatCurrency(29.99); // "$29.99"
const isValid = isValidEmail('user@example.com'); // true
const user = storage.get('user'); // Get from localStorage
```

## 🔧 Configuration

Edit `src/constants/config.js` to configure:
- API base URL
- Storage keys
- App name and version
- Currency settings
- Categories

## 📝 Adding New Features

### Add a New Context
1. Create `src/context/NewContext.jsx`
2. Export from `src/context/index.js`
3. Wrap in `App.js`

### Add a New Service
1. Create `src/services/newService.js`
2. Use `apiService` from `src/services/api.js`
3. Export from `src/services/index.js`

### Add a New Hook
1. Create `src/hooks/useNewHook.js`
2. Export from `src/hooks/index.js`

### Add a New Component
1. Create `src/components/NewComponent.jsx`
2. Add corresponding CSS file if needed
3. Import and use in pages

## 🎯 Best Practices

1. **Components**: Keep them small and focused
2. **Hooks**: Extract reusable logic
3. **Services**: Handle all API calls here
4. **Utils**: Keep functions pure and testable
5. **Context**: Use for global state only
6. **Constants**: Centralize all magic strings/numbers

## 🔄 Data Flow

```
User Action → Component → Hook/Context → Service → API
                ↓
            Update State
                ↓
            Re-render UI
```

## 📚 Next Steps

- Add TypeScript for type safety
- Add unit tests for utilities and hooks
- Add error boundaries
- Add loading states
- Add error handling UI
- Add form validation components
- Add toast notifications
