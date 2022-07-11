type Props = {
  title?: string;
  input?: string;
};

export default function RenderOption({ title, input }: Props) {
  return <div className="p-2 mx-2 border-b-2 border-white">{title}</div>;
}
