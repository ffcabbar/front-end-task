import React from 'react';
import styles from './NoDataMessage.module.scss';

type Props = {
  children: React.ReactNode;
};

export const NoDataMessage = ({ children }: Props) => {
  return <span className={styles.noDataMessage}>{children}</span>;
};
