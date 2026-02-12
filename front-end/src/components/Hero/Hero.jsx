import { CenteredContent } from '../CenteredContent/CenteredContent';
import style from './Hero.module.css';
import { FullWidthButton } from '../FullWidthButton/FullWidthButton';
import { useParams, useNavigate } from 'react-router-dom';

export function Hero({ heroImage }) {
  const { gender } = useParams;
  const navigate = useNavigate();

  const currentGender = gender || 'kobieta';
  return (
    <div
      className={style.hero}
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <CenteredContent>
        <div className={style.contentWrapper}>
          <h2>Letnie promocje do -70%</h2>
          <p>Tylko najlepsze okazje!</p>
          <FullWidthButton onClick={() => navigate(`/${currentGender}/odziez`)}>
            Sprawdź produkty
          </FullWidthButton>
        </div>
      </CenteredContent>
    </div>
  );
}
