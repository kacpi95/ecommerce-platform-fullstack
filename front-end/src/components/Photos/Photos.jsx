import styles from './Photos.module.css';
import { FlexContainer } from '../FlexContainer/FlexContainer';
import { useState } from 'react';

export function Photos({ product }) {
  const photos = product?.photos ?? [];
  const [currentPhoto, setCurrentPhoto] = useState(photos[0]?.url);

  return (
    <FlexContainer>
      <div className={styles.thumbnails}>
        {photos.map((photo) => (
          <img
            className={currentPhoto === photo.url ? styles.active : ''}
            key={photo.id ?? photo.url}
            src={photo.url}
            alt=''
            onClick={() => setCurrentPhoto(photo.url)}
          />
        ))}
      </div>

      <img className={styles.mainPhoto} src={currentPhoto} alt='' />
    </FlexContainer>
  );
}
