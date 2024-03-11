interface Props {
  gap: number;
}
function ColumnGap(props: Props) {
  const style = {
    height: props.gap,
  };
  return <div style={style}></div>;
}

export default ColumnGap;
