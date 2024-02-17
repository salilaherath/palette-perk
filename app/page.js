'use client';
import styles from './page.module.css';
import ImageContainer from '@/components/ImageContainer';
import ColorThief from 'colorthief';
import { useState } from 'react';
import { IoImages } from 'react-icons/io5';

export default function Home() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [colorPalette, setColorPalette] = useState(null);

  const uploadImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = async (event) => {
      const img = new Image();

      img.onload = () => {
        const colorThief = new ColorThief();
        const colorPalette = colorThief.getPalette(img, 6);

        setUploadedImage(event.target.result);
        setColorPalette(colorPalette);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.h1}>Palette Perk</h1>
        <div className='input'>
          <label htmlFor='file' className={styles.label}>
            <IoImages />
            Upload Image
          </label>
          <input type='file' id='file' hidden onChange={uploadImage} />
        </div>
      </header>
      <main className={styles.main}>
        <ImageContainer
          uploadedImage={uploadedImage}
          colorPalette={colorPalette}
        />
      </main>
    </>
  );
}
