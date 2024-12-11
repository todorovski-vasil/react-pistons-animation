import Piston from "../Piston/Piston.tsx";
import ConRod from "../ConRod/ConRod.tsx";

import "./Cylinder.scss";

interface Props {
  width: string;
  angle: number;
  period: number;
  offset?: string;
}

interface CylinderStyle {
  transform: string;
  left?: string;
}

function Cylinder(props: Props) {
  const style: CylinderStyle = { transform: `rotate(${props.angle}deg)` };
  if (props.width) {
    style.left = `calc((4rem - ${props.width}) / 2)`;
  }

  return (
    <div style={style} className="cylinder">
      <div className="leftWall" />
      <div className="workingArea">
        <Piston
          width={props.width}
          period={props.period}
          offset={props.offset}
        />
        <ConRod period={props.period} offset={props.offset} />
      </div>
      <div className="rightWall" />
    </div>
  );
}

export default Cylinder;
