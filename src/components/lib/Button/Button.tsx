import styles from './Button.module.scss';

type Props = {
  children?: React.ReactNode;
};

export const Button = ({ children }: Props) => {
  return <button className={styles.button}>{children}</button>;
};
