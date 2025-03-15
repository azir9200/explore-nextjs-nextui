export default function Container({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className="container mx-auto max-w-7xl pt-16 px-6 flex-grow"
      style={style}
    >
      {children}
    </div>
  );
}
