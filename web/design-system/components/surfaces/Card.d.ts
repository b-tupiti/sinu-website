import * as React from 'react';
export interface CardProps {
  hover?: boolean;
  padded?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
}
export declare function Card(props: CardProps): JSX.Element;