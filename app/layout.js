import { Noto_Serif } from 'next/font/google';
import './globals.css';

const noto_serif = Noto_Serif({ subsets: ['latin'] });

export const metadata = {
  title: 'Palette Perk',
  description: 'Unlock Your Creative Palette with PalettePerk!',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={noto_serif.className}>
        <header>
          <h1>Palette Perk</h1>
          <div className='input'>
            <label htmlFor='file'>Upload Image</label>
            <input type='file' id='file' hidden />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
