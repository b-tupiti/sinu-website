import * as React from 'react';
export interface EventCardProps {
  day: string | number;
  month: string;
  title: string;
  time?: string;
  location?: string;
  tag?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function EventCard(props: EventCardProps): JSX.Element;