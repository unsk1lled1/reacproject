import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout/MainLayout';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';

import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import DashboardPage from '../pages/DashboardPage/DashboardPage';
import ServicesPage from '../pages/ServicesPage/ServicesPage';
import AnalyticsPage from '../pages/AnalyticsPage/AnalyticsPage';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route
                        path="/dashboard"
                        element={
                            <PrivateRoute>
                                <DashboardPage />
                            </PrivateRoute>
                        }
                    />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/analytics" element={<AnalyticsPage />} />
                    <Route path="/contacts" element={<ContactsPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
