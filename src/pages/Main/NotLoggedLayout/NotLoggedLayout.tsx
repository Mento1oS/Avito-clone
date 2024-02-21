import { Outlet } from 'react-router-dom';
import Container from '../Container/Container';
import NLHeader from '../NLHeader/NLHeader';
import Footer from '../Footer/Footer';
export default function NotLoggedLayout() {
  return (
    <Container>
      <NLHeader />
      <Outlet />
      <Footer />
    </Container>
  );
}
