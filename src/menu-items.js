// assets
import NavigationOutlinedIcon from '@mui/icons-material/NavigationOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import ChromeReaderModeOutlinedIcon from '@mui/icons-material/ChromeReaderModeOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import StoreIcon from '@mui/icons-material/Store';
import PaymentsIcon from '@mui/icons-material/Payments';
import PropaneTankIcon from '@mui/icons-material/PropaneTank';
import HomeIcon from '@mui/icons-material/Home';
import ScannerIcon from '@mui/icons-material/Scanner';
// import { FaBeer } from 'react-icons/fa';
// import { FaSalesforce } from 'react-icons/fa';

const icons = {
  NavigationOutlinedIcon: NavigationOutlinedIcon,
  HomeOutlinedIcon: HomeOutlinedIcon,
  ChromeReaderModeOutlinedIcon: ChromeReaderModeOutlinedIcon,
  HelpOutlineOutlinedIcon: HelpOutlineOutlinedIcon,
  SecurityOutlinedIcon: SecurityOutlinedIcon,
  AccountTreeOutlinedIcon: AccountTreeOutlinedIcon,
  BlockOutlinedIcon: BlockOutlinedIcon,
  AppsOutlinedIcon: AppsOutlinedIcon,
  ContactSupportOutlinedIcon: ContactSupportOutlinedIcon,
  AccountBalanceIcon: AccountBalanceIcon,
  LoyaltyIcon: LoyaltyIcon,
  ShoppingBasketIcon: ShoppingBasketIcon,
  ProductionQuantityLimitsIcon: ProductionQuantityLimitsIcon,
  ContactMailIcon: ContactMailIcon,
  StoreIcon: StoreIcon,
  PaymentsIcon: PaymentsIcon,
  PropaneTankIcon: PropaneTankIcon,
  HomeIcon: HomeIcon,
  ScannerIcon: ScannerIcon
};

// eslint-disable-next-line
export default {
  items: [
    {
      id: 'navigation',
      type: 'group',
      icon: icons['HomeIcon'],
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          icon: icons['HomeIcon'],
          url: '/dashboard/default'
        }
      ]
    },
    {
      // id: 'pages',
      // title: 'Pages',
      // caption: 'Prebuild Pages',
      type: 'group',
      icon: icons['NavigationOutlinedIcon'],
      children: [
        // {
        //   id: 'sample-page',
        //   title: 'Sample Page',
        //   type: 'item',
        //   url: '/sample-page',
        //   icon: icons['ChromeReaderModeOutlinedIcon']
        // },
        {
          id: 'auth',
          title: 'Authentication',
          type: 'collapse',
          icon: icons['SecurityOutlinedIcon'],
          children: [
            {
              id: 'login-1',
              title: 'Login',
              type: 'item',
              url: '/application/login'
              // target: true
            }
            // {
            //   id: 'register',
            //   title: 'Register',
            //   type: 'item',
            //   url: '/application/register'
            //   // target: true
            // }
          ]
        }
      ]
    },
    {
      type: 'group',
      icon: icons[''],
      children: [
        {
          id: 'auth',
          title: 'Financial Management',
          type: 'collapse',
          icon: icons['AccountBalanceIcon'],
          children: [
            {
              id: 'Payment',
              title: 'Payment',
              type: 'collapse',
              icon: icons['PaymentsIcon'],
              children: [
                {
                  id: 'payment-list',
                  title: 'Payment List',
                  type: 'item',
                  url: '/paymentlist'
                },
                {
                  id: 'payment-recieve',
                  title: 'Payment Recieve',
                  type: 'item',
                  url: '/paymentrecieve'
                }
              ]
            },
            {
              id: 'sale-management',
              title: 'Sale Management',
              type: 'collapse',
              icon: icons['LoyaltyIcon'],
              children: [
                {
                  id: 'order',
                  title: 'Order',
                  type: 'item',
                  url: '/addorder'
                },
                {
                  id: 'order-processing',
                  title: 'Order Processing',
                  type: 'item',
                  url: '/orders'
                }
              ]
            },
            {
              id: 'auth',
              title: 'Purchase Management',
              type: 'collapse',
              icon: icons['ShoppingBasketIcon'],
              children: [
                {
                  id: 'Purchase Orders',
                  title: 'Purchase Orders',
                  type: 'item',
                  url: '/purchaselist'
                }
              ]
            },
            {
              id: 'expense',
              title: 'Expense',
              type: 'item',
              url: '/expenselist'
            }
          ]
        }
      ]
    },
    {
      type: 'group',
      icon: icons['ProductionQuantityLimitsIcon'],
      children: [
        {
          id: 'auth',
          title: 'Production Management',
          type: 'collapse',
          icon: icons['ProductionQuantityLimitsIcon'],
          children: [
            {
              id: 'production',
              title: 'Production',
              type: 'item',
              url: '/productionlist'
            },
            {
              id: 'product',
              title: 'Product',
              type: 'item',
              url: '/products'
            }
          ]
        }
      ]
    },
    {
      type: 'group',
      icon: icons['ContactMailIcon'],
      children: [
        {
          id: 'auth',
          title: 'Employee Management',
          type: 'collapse',
          icon: icons['ContactMailIcon'],
          children: [
            {
              id: 'Employee Directory',
              title: 'Employee Directory',
              type: 'item',
              url: '/employeedirectory'
            },
            {
              id: 'Performance Management',
              title: 'Performance Management',
              type: 'item',
              url: '/performanceemployee'
            }
          ]
        }
      ]
    },
    {
      type: 'group',
      icon: icons['StoreIcon'],
      children: [
        {
          id: 'auth',
          title: 'Company Management',
          type: 'collapse',
          icon: icons['StoreIcon'],
          children: [
            {
              id: 'Company Profile',
              title: 'Company Profile',
              type: 'item',
              url: '/profile'
            },
            {
              id: 'Company',
              title: 'Company',
              type: 'item',
              url: '/companylist'
            }
          ]
        }
      ]
    },
    {
      type: 'group',
      icon: icons['PropaneTankIcon'],
      children: [
        {
          id: 'auth',
          title: 'Stoke Management',
          type: 'collapse',
          icon: icons['PropaneTankIcon'],
          children: [
            {
              id: 'Stoke',
              title: 'Total Stoke',
              type: 'item',
              url: '/stock'
            }
          ]
        }
      ]
    },
    {
      type: 'group',
      icon: icons['ScannerIcon'],
      children: [
        {
          id: 'Machine Management',
          title: 'Machine Management',
          type: 'collapse',
          icon: icons['ScannerIcon'],
          children: [
            {
              id: 'Machine Inventory',
              title: 'Machine Inventory',
              type: 'item',
              url: '/machineinventory'
            }
          ]
        }
      ]
    },
    {
      id: 'support',
      title: 'Support',
      type: 'group',
      icon: icons['ContactSupportOutlinedIcon'],
      children: [
        // {
        //   id: 'disabled-menu',
        //   title: 'Disabled Menu',
        //   type: 'item',
        //   url: '#',
        //   icon: icons['BlockOutlinedIcon'],
        //   disabled: true
        // },
        {
          id: 'Report',
          title: 'Report',
          type: 'item',
          // url: 'https://codedthemes.gitbook.io/materially-react-material-documentation/',
          icon: icons['HelpOutlineOutlinedIcon'],
          external: true,
          target: true
        }
      ]
    }
  ]
};
