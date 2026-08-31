import * as React from 'react';
export interface ToastProps {
  tone?: 'success' | 'info' | 'warning' | 'danger';
  children?: React.ReactNode;
  onDismiss?: () => void;
  style?: React.CSSProperties;
}
export declare function Toast(props: ToastProps): JSX.Element;