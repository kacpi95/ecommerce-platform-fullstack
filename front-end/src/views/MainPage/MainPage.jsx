import { Hero } from '../../components/Hero/Hero';
import { Products } from '../../components/Products/Products';
import { useLoaderData, useParams } from 'react-router-dom';
import womenHero from '../../assets/women.jpg';
import menHero from '../../assets/men.jpg';
import childrenHero from '../../assets/children.jpg';

const HERO_MAP = {
  kobieta: womenHero,
  mezczyzna: menHero,
  dziecko: childrenHero,
};

export function MainPage() {
  const { bestsellers } = useLoaderData();
  const { gender } = useParams();

  const heroImage = HERO_MAP[gender || 'kobieta'];

  return (
    <>
      <Hero heroImage={heroImage} />
      <Products
        headerText={'Sprawdź nasze bestsellery'}
        products={bestsellers}
      />
    </>
  );
}
