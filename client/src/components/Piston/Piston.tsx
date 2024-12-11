import "./Piston.scss";

interface Props {
  width: string;
  period: number;
  offset?: string;
}

function Piston(props: Props) {
  const { period } = props;

  const customStyle = {
    width: props.width ? props.width : "4rem",
  };

  const customAnimation = {
    animationDelay: props.offset,
    animationDuration: `${period}s`,
  };

  const pistonStyle = {
    ...customStyle,
    ...customAnimation,
  };

  return (
    <div style={pistonStyle} className="piston">
      <div className="ring1"></div>
      <div className="ring2"></div>
      <div className="conBolt"></div>
    </div>
  );
}

export default Piston;
