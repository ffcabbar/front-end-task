import styles from './Input.module.scss';

type InputProps = {
  icon?: React.ReactElement;
};

type A = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type Props = InputProps & A;

export const Input = ({ icon, ...rest }: Props) => {
  return (
    <div className={styles.wrapper}>
      {icon && <span>{icon}</span>}
      <input className={styles.input} {...rest} />
    </div>
  );
};
