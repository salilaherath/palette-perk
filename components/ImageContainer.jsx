import styles from '../app/page.module.css';
import ListItem from './ListItem';

function ImageContainer({ uploadedImage, colorPalette }) {
  const toHex = (rbg) => {
    let hex = Number(rbg).toString(16);
    if (hex.length < 2) {
      hex = '0' + hex;
    }

    return hex;
  };
  return (
    <div className={styles.content}>
      <div className={styles.image}>
        {uploadedImage ? (
          <img src={uploadedImage} alt='uploaded' />
        ) : (
          <h2 className={styles.imageText}>
            Upload your image to get started!
          </h2>
        )}
      </div>
      {colorPalette && (
        <ul className={styles.colors}>
          {colorPalette.map((color, index) => {
            const rgb = `rbg(${color.join(',')})`;
            const hex = `#${toHex(color[0])}${toHex(color[1])}${toHex(
              color[2]
            )}`;
            return <ListItem key={index} rgb={rgb} hex={hex} />;
          })}
        </ul>
      )}
    </div>
  );
}

export default ImageContainer;
