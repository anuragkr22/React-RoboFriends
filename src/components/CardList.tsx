import { Robot } from "../App";
import Card from "./Card";

type CardListProps = {
  robots: Robot[];
};

const CardList = ({ robots }: CardListProps) => {
  const cardArray = robots.map((robot) => (
    <Card key={robot.id} robot={robot} />
  ));

  return <div>{cardArray}</div>;
};

export default CardList;
