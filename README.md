# Breadify 🥪
🔗 **Live demo:** (https://breadify-itno-pi.vercel.app)
Breadify is a responsive sandwich restaurant website built with React. Users can browse a menu loaded from a public API, filter it, add items to a shopping cart, and view everything in a slide-in cart panel.

> Fast food that's actually good for you.

## Features

- **Menu from a live API**: sandwiches are fetched from [TheMealDB](https://www.themealdb.com/api.php) with loading and error states.
- **Filtering**: filter menu items by badge (Popular, New, Chef's pick).
- **Show more / Show less**: the menu starts with a few items and expands on demand.
- **Shopping cart**: add items, increase or decrease quantity, remove items, and see the total quantity in the navbar.
- **Cart drawer**: a slide-in panel (React-Bootstrap Offcanvas) listing every cart item with image, title, price, quantity and line total.
- **Smooth scrolling navigation**: navbar links and hero buttons scroll to the Home, About, Rates (menu), Reviews and Happy Moments sections.
- **Happy Moments gallery**: an image grid loaded from the API.
- **Global state with Context API**: cart state lives in a `ShoppingCartContext` provider and is available to any component through a custom `useShoppingCart` hook.

## Tech Stack

- [React](https://react.dev/) (Create React App)
- [React Router](https://reactrouter.com/)
- [React-Bootstrap](https://react-bootstrap.github.io/) / Bootstrap 5 (Offcanvas cart)
- [Font Awesome](https://fontawesome.com/) icons
- Plain CSS, one stylesheet per component
- [TheMealDB API](https://www.themealdb.com/api.php)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- npm

### Installation

```bash
git clone https://github.com/patarakaci1/breadify.git
cd breadify
npm install
```

### Run in development

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page reloads when you edit files.

### Build for production

```bash
npm run build
```

The optimized build is created in the `build` folder.

## Project Structure

```
src/
├── components/
│   ├── about/          # About section
│   ├── card/           # Single menu item card
│   ├── cartItems/      # One row inside the cart drawer
│   ├── end/            # Happy Moments gallery
│   ├── footer/
│   ├── Hero/           # Landing section
│   ├── Meallist/       # Menu list, filters, show more/less
│   ├── NavBar/
│   ├── reviewPage/     # Reviews section
│   └── shoppingCart/   # Cart drawer (Offcanvas)
├── constants/          # API URL, filters, initial visible count
├── context/            # ShoppingCartContext (cart state + actions)
├── pages/
│   └── Home/           # Page that assembles all sections
├── App.js
└── index.js
```

## How the Cart Works

1. `ShoppingCartProvider` wraps the app in `App.js` and stores `cartItems` and `isOpen`.
2. A `Card` calls `increaseCartQuantity(id, { image, title, price })` to add an item. The extra details are saved with the item so the cart can display it.
3. `cartQuantity` is the sum of all item quantities and is shown on the navbar cart button.
4. Clicking the cart button calls `openCart()`, which opens the Offcanvas drawer.
5. The drawer renders a `CartItem` for each entry in `cartItems` and shows the total price.

## Notes

- Prices, calories, protein and badges are generated from the meal ID for demo purposes. TheMealDB does not provide them.
- Cart state is kept in memory, so it resets on page reload.

## Possible Improvements

- Persist the cart in `localStorage`
- Checkout flow
- Search by meal name
- Tests for the cart context

## Author

Made by [patarakaci1](https://github.com/patarakaci1) as a frontend  development practice project.
