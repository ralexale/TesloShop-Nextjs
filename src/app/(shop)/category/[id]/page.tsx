interface Props {
  params: { id: string };
}

export default function ({ params }: Props) {
  return (
    <div>
      <h1>{params.id} Page</h1>
    </div>
  );
}
