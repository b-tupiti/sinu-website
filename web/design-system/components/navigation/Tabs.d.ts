export interface TabsProps {
  items: string[];
  active?: string;
  onChange?: (item: string) => void;
  style?: React.CSSProperties;
}
export declare function Tabs(props: TabsProps): JSX.Element;