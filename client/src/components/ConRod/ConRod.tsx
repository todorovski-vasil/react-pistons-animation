import "./ConRod.scss";

interface Props {
  period?: number;
  offset?: string;
}

function ConRod(props: Props) {
  const conRodStyle = {
    animationDelay: props.offset,
    animationDuration: `${props.period}s`,
  };

  return (
    <div style={conRodStyle} className="conrodContainer">
      <div style={conRodStyle} className="conrod">
        <div className="pistonBolt" />
        <div className="crankJournal" />
      </div>
    </div>
  );
}

export default ConRod;
