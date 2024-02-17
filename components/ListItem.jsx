import { useState } from 'react';
import styles from '../app/page.module.css';
import { FaCopy } from 'react-icons/fa6';

const copy = <FaCopy />;

function ListItem({ rgb, hex }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (e) => {
    const color = e.target.innerText;
    navigator.clipboard.writeText(color);
  };

  return (
    <li className={styles.colorName} style={{ background: hex }}>
      <span
        onClick={(e) => {
          copyToClipboard(e);
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 1000);
        }}
      >
        {copied ? 'Copied!' : hex}
        {copy}
      </span>
    </li>
  );
}

export default ListItem;
