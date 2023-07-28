import { LocalGithubUser } from 'types';
import styles from './UserTitle.module.scss';

interface UserTitleProps extends Pick <LocalGithubUser, 'name' | 'login' | 'created'>{}

const LocalDate = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric', 
})

export const UserTitle = ({created, login, name}: UserTitleProps) => {
  const joinedDate = LocalDate.format(new Date(created));
  return(
  <div className={styles.userTitle}>
    <h2>{name}</h2>
    <h3>{login}</h3>
    <span>{joinedDate}</span>
  </div>
);
}
