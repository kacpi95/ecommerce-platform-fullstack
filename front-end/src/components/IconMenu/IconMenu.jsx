import { Link } from 'react-router-dom';
import BAG_ICON from '../../assets/bag.svg';
import HEART from '../../assets/heart.svg';
import styles from './IconMenu.module.css';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

export function IconMenu() {
  const [cartItems] = useContext(CartContext);
  const count = cartItems.length;

  return (
    <div>
      <ul className={styles.iconMenu}>
        <li>
          <Link to='/ulubione'>
            <img src={HEART} alt='heart-icon' />
          </Link>
        </li>
        <li>
          <Link to='/koszyk'>
            <img src={BAG_ICON} alt='bag-icon' />
            {count > 0 && (
              <div className={styles.numberOfProducts}>{count}</div>
            )}
          </Link>
        </li>
      </ul>
    </div>
  );
}
