import styles from './Header.module.scss';
import {ThemeSwitcher} from 'components/ThemeSwitcher';

export const Header = () => (
  <div className={styles.header}>
    <div className={styles.logo}>devfinder</div>
    <ThemeSwitcher/>
  </div>
);
