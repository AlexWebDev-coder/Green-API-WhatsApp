export interface IProps {
  value: string;
  name?: string;
  placeholder?: string;
  onChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}
