import { Link, useFetcher } from 'react-router-dom';
import styles from './Product.module.css';
import { ENDPOINT_TO_PATH_MAPPING } from '../../constants/api';
import { Price } from '../Price/Price';

export function Product({ product }) {
  const { Form } = useFetcher();
  const firstPhotoUrl = product?.photos?.[0]?.url;

  return (
    <Link
      to={`/${ENDPOINT_TO_PATH_MAPPING[product.gender]}/${product.category}/${product.subcategory}/${product.id}`}
      className={styles.product}
    >
      <img src={firstPhotoUrl} alt={product.productName} />
      <h3>{product.productName}</h3>
      <p>
        <Price product={product} />
      </p>

      <Form
        onClick={(e) => e.stopPropagation()}
        method='POST'
        action={`/add-to-favourites/${product.id}`}
      >
        <button type='submit' aria-label='Dodaj do ulubionych'>
          <div className={styles.heart}></div>
        </button>
      </Form>
    </Link>
  );
}
