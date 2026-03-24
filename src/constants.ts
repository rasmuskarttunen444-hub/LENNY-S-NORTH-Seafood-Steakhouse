export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'starters' | 'steaks' | 'seafood' | 'pasta' | 'sides' | 'desserts';
  featured?: boolean;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Prime Aged Ribeye',
    description: '24oz bone-in, dry-aged for 28 days, char-broiled to perfection.',
    price: '68',
    category: 'steaks',
    featured: true,
  },
  {
    id: '2',
    name: 'Chilean Sea Bass',
    description: 'Pan-seared with a lemon-caper butter sauce and sautéed spinach.',
    price: '48',
    category: 'seafood',
    featured: true,
  },
  {
    id: '3',
    name: 'Homemade Pappardelle Bolognese',
    description: 'Traditional slow-cooked meat ragu with fresh herbs and parmigiano.',
    price: '32',
    category: 'pasta',
    featured: true,
  },
  {
    id: '4',
    name: 'Colossal Shrimp Cocktail',
    description: 'Four jumbo shrimp served with house-made spicy cocktail sauce.',
    price: '24',
    category: 'starters',
  },
  {
    id: '5',
    name: 'Filet Mignon',
    description: '12oz center-cut, exceptionally tender, finished with herb butter.',
    price: '58',
    category: 'steaks',
  },
  {
    id: '6',
    name: 'Lobster Fra Diavolo',
    description: 'Spicy tomato sauce, linguine, and a whole Maine lobster.',
    price: '54',
    category: 'seafood',
  }
];

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Robert M.',
    text: 'The best steakhouse in Westchester. The service is impeccable and the ribeye is consistently perfect.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Sarah L.',
    text: 'Perfect for our anniversary. They made us feel so special and the seafood was incredibly fresh.',
    rating: 5,
  },
  {
    id: '3',
    name: 'James T.',
    text: 'A true neighborhood gem. Large portions, classic atmosphere, and always dependable.',
    rating: 5,
  }
];
