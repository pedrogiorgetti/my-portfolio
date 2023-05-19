interface IIsVisibleComponentProps {
  children: React.ReactNode;
  when: boolean;
}

export function IsVisibleComponent({
  children,
  when,
}: IIsVisibleComponentProps) {
  return <>{when && children}</>;
}
