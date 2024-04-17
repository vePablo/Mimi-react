# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Navbar from './components/navigability/Navbar'
import HomeContainer from './components/home/HomeContainer'
import ItemDetailContainer from './components/products/productDetail/ItemDetailContainer'
import ItemListContainer from './components/products/productsList/ItemListContainer'
import Contacts from './components/contacts/Contacts'
import Cuadernos from './components/products/productsList/Cuadernos'
import Remeras from './components/products/productsList/Remeras'





