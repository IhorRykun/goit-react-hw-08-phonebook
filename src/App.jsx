import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Layout } from './Layout/Layout';
import { Home } from './pages/Home/Home';
import { Register } from './pages/Register';
import { Login } from './pages/Login/Login';
import { PhoneBook } from 'pages/PhoneBook';
import { useAuth } from 'hooks';
import { refreshUser } from 'Redux/Auth/AuthOperation';
import { RestrictedRoute } from './components/RestrictedRoute';
import { PrivateRoute } from './components/PrivateRoute';
import { Loader } from 'components/Loader/Loader';

export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<PhoneBook />} />
          }
        />
      </Route>
    </Routes>
  );
}
