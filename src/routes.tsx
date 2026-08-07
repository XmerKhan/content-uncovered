import { Navigate, type RouteObject } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import CategoryPage from './pages/CategoryPage';
import AboutPage from './pages/AboutPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import ContactPage from './pages/ContactPage';
import AdvertisementDisclosurePage from './pages/AdvertisementDisclosurePage';
import DisclaimerPage from './pages/DisclaimerPage';
import NotFoundPage from './pages/NotFoundPage';

export const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/games/:slug', element: <GamePage /> },
      { path: '/category/kids', element: <Navigate to="/category/brainstorming" replace /> },
      { path: '/category/:category', element: <CategoryPage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/privacy-policy', element: <PrivacyPage /> },
      { path: '/terms', element: <TermsPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/advertisement-disclosure', element: <AdvertisementDisclosurePage /> },
      { path: '/disclaimer', element: <DisclaimerPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
];
