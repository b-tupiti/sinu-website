export interface RadioProps {
  label?: string;
  checked?: boolean;
  onSelect?: () => void;
  name?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export declare function Radio(props: RadioProps): JSX.Element;