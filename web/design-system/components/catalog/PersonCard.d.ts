import * as React from 'react';
export interface PersonCardProps {
  name: string;
  role?: string;
  school?: string;
  email?: string;
  initials?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function PersonCard(props: PersonCardProps): JSX.Element;