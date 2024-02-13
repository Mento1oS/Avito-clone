import { StyledFooter } from './styles';
export default function Footer() {
  return (
    <StyledFooter>
      <div className="footer__container">
        <div className="footer__img">
          <a href="" target="_self">
            <img src="img/icon_01.png" alt="home" />
          </a>
        </div>
        <div className="footer__img">
          <a href="" target="_self">
            <img src="img/icon_02.png" alt="home" />
          </a>
        </div>
        <div className="footer__img">
          <a href="" target="_self">
            <img src="img/icon_03.png" alt="home" />
          </a>
        </div>
      </div>
    </StyledFooter>
  );
}
