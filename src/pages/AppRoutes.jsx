import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import NotLoggedLayout from './Main/NotLoggedLayout/NotLoggedLayout';
import LoggedLayout from './Main/LoggedLayout/LoggedLayout';
import Landing from './Main/Landing/Landing';
import Seller from './Main/Seller/Seller';
import SellerAdv from './Main/SellerAdv/SellerAdv';
import Profile from './Main/Profile/Profile';
import MyAdv from './Main/MyAdv/MyAdv';
import SignIn from './SignIn/SignIn/SignIn';
import SignUp from './SignUp/SignUp/SignUp';
import Reviews from './Main/Reviews/Reviews';
import NotFoundPage from './NotFound/NotFoundPage/NotFoundPage';
import { useSelector } from 'react-redux';
import EditAd from './Main/EditAd/EditAd';

export default function AppRoutes() {
  const isAllowed = useSelector((state) => state.auth.isAuthorized);
  return (
    <Routes>
      <Route path="/" element={<NotLoggedLayout />}>
        <Route index element={<Landing />} />
        <Route path="/seller/:id" element={<Seller />} />
        <Route path="/seller/adv/:id" element={<SellerAdv />} />
        <Route path="/seller/adv/:id/comments" element={<Reviews />} />
      </Route>
      <Route element={<ProtectedRoute isAllowed={isAllowed} />}>
        <Route path="/profile" element={<LoggedLayout />}>
          <Route index element={<Profile />} />
          <Route path="/profile/main" element={<Landing />} />
          <Route path="/profile/myadv/:id" element={<MyAdv />} />
          <Route path="/profile/seller/:id" element={<Seller />} />
          <Route path="/profile/seller/adv/:id" element={<SellerAdv />} />
          <Route
            path="/profile/seller/adv/:id/comments"
            element={<Reviews />}
          />
          <Route path="/profile/myadv/:id/edit" element={<EditAd />} />
        </Route>
      </Route>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
