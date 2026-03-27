type MenuLink = {
  title: string;
  link: string;
};

export type MegaMenuDataType = {
  image: string;
  title: string;
  links: MenuLink[];
};

export type SubMenuDataType = {
  title: string;
  link: string;
  submenu?: MenuLink[];
};

export type CountryMenuItemType = {
  name: string;
  flag: string;
  link: string;
};

export type MenuItemDataType = {
  title: string;
  link: string;
  megamenu?: MegaMenuDataType[];
  submenu?: SubMenuDataType[];
  countrymenu?: CountryMenuItemType[];
};

export const studyAbroadCountries: CountryMenuItemType[] = [
  { name: 'Australia', flag: 'https://flagcdn.com/w40/au.png', link: '/study-abroad/australia' },
  { name: 'USA', flag: 'https://flagcdn.com/w40/us.png', link: '/study-abroad/usa' },
  { name: 'Canada', flag: 'https://flagcdn.com/w40/ca.png', link: '/study-abroad/canada' },
  { name: 'UK', flag: 'https://flagcdn.com/w40/gb.png', link: '/study-abroad/uk' },
  { name: 'Ireland', flag: 'https://flagcdn.com/w40/ie.png', link: '/study-abroad/ireland' },
  { name: 'Germany', flag: 'https://flagcdn.com/w40/de.png', link: '/study-abroad/germany' },
  { name: 'New Zealand', flag: 'https://flagcdn.com/w40/nz.png', link: '/study-abroad/new-zealand' },
  { name: 'Singapore', flag: 'https://flagcdn.com/w40/sg.png', link: '/study-abroad/singapore' },
  { name: 'Poland', flag: 'https://flagcdn.com/w40/pl.png', link: '/study-abroad/poland' },
  { name: 'Italy', flag: 'https://flagcdn.com/w40/it.png', link: '/study-abroad/italy' },
  { name: 'Malta', flag: 'https://flagcdn.com/w40/mt.png', link: '/study-abroad/malta' },
  { name: 'France', flag: 'https://flagcdn.com/w40/fr.png', link: '/study-abroad/france' },
  { name: 'Portugal', flag: 'https://flagcdn.com/w40/pt.png', link: '/study-abroad/portugal' },
  { name: 'Spain', flag: 'https://flagcdn.com/w40/es.png', link: '/study-abroad/spain' },
  { name: 'Sweden', flag: 'https://flagcdn.com/w40/se.png', link: '/study-abroad/sweden' },
  { name: 'Switzerland', flag: 'https://flagcdn.com/w40/ch.png', link: '/study-abroad/switzerland' },
  { name: 'Hungary', flag: 'https://flagcdn.com/w40/hu.png', link: '/study-abroad/hungary' },
  { name: 'Belgium', flag: 'https://flagcdn.com/w40/be.png', link: '/study-abroad/belgium' },
  { name: 'Finland', flag: 'https://flagcdn.com/w40/fi.png', link: '/study-abroad/finland' },
  { name: 'India', flag: 'https://flagcdn.com/w40/in.png', link: '/study-abroad/india' },
  { name: 'China', flag: 'https://flagcdn.com/w40/cn.png', link: '/study-abroad/china' },
  { name: 'South Korea', flag: 'https://flagcdn.com/w40/kr.png', link: '/study-abroad/south-korea' },
  { name: 'Japan', flag: 'https://flagcdn.com/w40/jp.png', link: '/study-abroad/japan' },
];


export const menuData: MenuItemDataType[] = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Study Abroad',
    link: '#',
    countrymenu: studyAbroadCountries,
  },
  {
    title: 'Services',
    link: '#',
    submenu: [
      { title: 'Visa Processing & Guidance', link: '/services/visa-processing' },
      {
        title: 'Immigration',
        link: '/',
        submenu: [
          { title: 'Canada Immigration', link: '/immigration/canada' },
          { title: 'Australia PR Visa', link: '/immigration/australia' },
          { title: 'UK Skilled Worker Visa', link: '/immigration/uk' },
        ],
      },
      { title: 'Travel & Accommodation Assistance', link: '/services/travel-assistance' },
      { title: 'Test Preparation', link: '/services/test-preparation' },
    ],
  },
  {
    title: 'Apply',
    link: '#',
    submenu: [
      { title: 'Student Application Portal Login', link: '/student-login' },
      { title: 'New Application', link: '/student-login' },
    ],
  },
  {
    title: 'Blog',
    link: '/news',
  },
  {
    title: 'Contact',
    link: '/contact',
  },
];

export const menuDataAuthenticated: MenuItemDataType[] = [
  ...menuData.filter(item => item.title !== 'Apply'),
  {
    title: 'Dashboard',
    link: '/student-portal',
  },
  {
    title: 'Logout',
    link: '#logout',
  },
];

export const menuDataAdmin: MenuItemDataType[] = [
  ...menuData.filter(item => item.title !== 'Apply'),
  {
    title: 'Admin Hub',
    link: '/admin-portal',
  },
  {
    title: 'Logout',
    link: '#logout',
  },
];
