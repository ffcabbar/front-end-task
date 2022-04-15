import styles from './Badge.module.scss';

type Props = {
  children?: React.ReactNode;
};

export const Badge = ({ children }: Props) => {
  return <div className={styles.badge}>{children}</div>;
};
