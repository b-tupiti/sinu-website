import * as React from 'react';
/** @startingPoint section="Catalog" subtitle="Program card with school eyebrow and meta pills" viewport="700x220" */
export interface ProgramCardProps {
  title: string;
  school?: string;
  level?: string;
  duration?: string;
  intake?: string;
  featured?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function ProgramCard(props: ProgramCardProps): JSX.Element;