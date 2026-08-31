import * as React from 'react';
export interface DialogProps {
  open: boolean;
  title?: string;
  onClose?: () => void;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}
export declare function Dialog(props: DialogProps): JSX.Element | null;