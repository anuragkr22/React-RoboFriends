import { Robot } from "../App";

type CardProps = {
  robot: Robot;
};

const Card = ({ robot }: CardProps) => {
  const { id, name, email } = robot;
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}`} alt="" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
