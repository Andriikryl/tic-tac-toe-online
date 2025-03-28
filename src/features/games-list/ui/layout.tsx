export function Layout({
  children,
  extions,
}: {
  children: React.ReactNode;
  extions: React.ReactNode;
}) {
  return (
    <div>
      <div>{extions}</div>
      {children}
    </div>
  );
}
