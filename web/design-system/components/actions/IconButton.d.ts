import * as React from 'react';
export interface IconButtonProps {
  label: string;
  size?: number;
  variant?: 'ghost' | 'outline' | 'solid';
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;