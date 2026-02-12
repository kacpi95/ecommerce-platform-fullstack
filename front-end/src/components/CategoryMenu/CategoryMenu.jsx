import { NavLink, useParams } from 'react-router-dom';
import { CATEGORIES } from '../../constants/category';
import styles from './CategoryMenu.module.css';

export function CategoryMenu() {
  const params = useParams();
  const gender = params.gender || 'kobieta';

  return (
    <div className={styles.categoryMenu}>
      <ul>
        {CATEGORIES.map((category) => {
          return (
            <li key={category.path}>
              <NavLink to={`/${gender}/${category.path}`}>
                {category.categoryName}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
