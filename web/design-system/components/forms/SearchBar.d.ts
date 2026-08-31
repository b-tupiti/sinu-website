import * as React from 'react';
/** @startingPoint section="Components" subtitle="Pill search bar with submit button" viewport="700x120" */
export interface SearchBarProps {
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  placeholder?: string;
  size?: 'md' | 'lg';
  style?: React.CSSProperties;
}
export declare function SearchBar(props: SearchBarProps): JSX.Element;