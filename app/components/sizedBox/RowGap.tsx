interface Props {
  gap: number;
}
function RowGap(props: Props) {
  const style = {
    width: props.gap,
  };
  return <div style={style}></div>;
}

export default RowGap;
