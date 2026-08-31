export interface BreadcrumbProps {
  items: Array<string | { label: string; href?: string }>;
  style?: React.CSSProperties;
}
export declare function Breadcrumb(props: BreadcrumbProps): JSX.Element;