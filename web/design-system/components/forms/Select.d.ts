import * as React from 'react';
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options?: Array<string | { value: string; label: string }>;
  hint?: string;
  error?: string;
  style?: React.CSSProperties;
}
export declare function Select(props: SelectProps): JSX.Element;