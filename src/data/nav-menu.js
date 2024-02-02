const menuItems = [
  {
    link: '/',
    title: 'Home',
    hasDropdown: true,
    megamenu: false,
    dropdownItems: [
      { link: '/', title: 'Home Style 1' },
      { link: '/home-2', title: 'Home Style 2' },
      { link: '/home-3', title: 'Home Style 3' },
    ]
  },
  {
    link: '/shop',
    title: 'Marketplace',
    hasDropdown: true,
    megamenu: false,
    dropdownItems: [
      { link: '/shop', title: 'Marketplace' },
      { link: '/shop-grid', title: 'Marketplace Grid' },
      { link: '/product-details', title: 'Product Details',class:'has-dropdown',
      hasDropdownChild:[
        { link: '/product-details-tab', title: 'Product Details Tab' },
        { link: '/product-details-grid', title: 'Product Details Grid' },
      ]
     },
     { link: '/product-carousel', title: 'Product Carousel' },
     { link: '/product-filter', title: 'Product Filter' },
     { link: '/product-grid', title: 'Product Grid' },
     { link: '/product-list', title: 'Product List' },
     { link: '/product-live', title: 'Product Live' },
     { link: '/product-live-carousel', title: 'Product Live Carousel' },
     { link: '/product-simple', title: 'Product Simple' },
     { link: '/product-tab', title: 'Product Tab' },
    ]
  },
  {
    link: '/about',
    title: 'Pages',
    hasDropdown: true,
    megamenu: true,
    dropdownItems: [
      { link: '/about', title: 'About' },
      { link: '/login', title: 'Login' },
      { link: '/creator', title: 'Creators' },
      { link: '/shop', title: 'Our Shop' },
      { link: '/contact', title: 'Contact Us' },
      { link: '/register', title: 'Register' },
      { link: '/creator-grid', title: 'Creators Grid' },
      { link: '/shop-grid', title: 'Shop Grid' },
      { link: '/activity', title: 'Activity' },
      { link: '/forget', title: 'Forget Password' },
      { link: '/creator-list', title: 'Creators List' },
      { link: '/product-details', title: 'Product Details' },
      { link: '/edit-profile', title: 'Edit Profile' },
      { link: '/auction', title: 'Live Auction' },
      { link: '/creator-list-2', title: 'Creators List Square' },
      { link: '/support', title: 'Support/FAQ' },
      { link: '/blog', title: 'Blog' },
      { link: '/collection', title: 'Collection' },
      { link: '/create', title: 'Create NFT' },
      { link: '/terms', title: 'Terms & Conditions' },
      { link: '/blog-details', title: 'Blog Details' },
      { link: '/collection-grid', title: 'Collection Grid' },
      { link: '/create-single', title: 'Create Sinle NFT' },
      { link: '/privacy', title: 'Privacy & Policy' },
      { link: '/ranking', title: 'NFT Ranking' },
      { link: '/collection-grid-2', title: 'Collection Grid Square' },
      { link: '/create-multiple', title: 'Create Multiple NFT' },
      { link: '/maintenance', title: 'Maintenance' },
      { link: '/upcoming', title: 'Upcoming Projects' },
      { link: '/wallet', title: 'Connect Wallet' },
      { link: '/coming-soon', title: 'Coming Soon' },
      { link: '/404', title: '404 Error' },
    ]
  },
  {
    link: '/collection',
    title: 'Collections',
  },
  {
    link: '/profile',
    title: 'Profile',
  },
  {
    link: '/creator',
    title: 'Creators',
  },
]

export default menuItems;