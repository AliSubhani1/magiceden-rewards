import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PrivateRoute, NoMatch, PublicRoute } from './RouteType'
import Home from '../pages/Home'
import Login from '../pages/Login'

const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route
                path="/"
                element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                }
            />
            <Route
                path="/home"
                element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                }
            />
            <Route
                path="*"
                element={
                    <NoMatch />
                }
            />
        </Routes>
    </BrowserRouter>
)

export default AppRouter