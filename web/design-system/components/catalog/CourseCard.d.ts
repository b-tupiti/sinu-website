import * as React from 'react';
/** @startingPoint section="Catalog" subtitle="Course listing card with code, credits, semester" viewport="700x200" */
export interface CourseCardProps {
  code: string;
  title: string;
  school?: string;
  credits?: number | string;
  semester?: string;
  level?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function CourseCard(props: CourseCardProps): JSX.Element;