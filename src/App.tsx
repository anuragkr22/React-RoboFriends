import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";
import "tachyons";
import { useEffect, useState, ChangeEvent } from "react";

import { getData } from "./utils/data.utils";
import "./App.css";

export type Robot = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [robots, setRobots] = useState<Robot[]>([]);
  const [searchField, setSearchField] = useState("");
  const [loading, setLoading] = useState(false);
  const [filteredRobots, setFilteredRobots] = useState(robots);

  useEffect(() => {
    setLoading(true);
    const url = "https://jsonplaceholder.typicode.com/users";

    const fetchUsers = async () => {
      const users = await getData<Robot[]>(url);
      setRobots(users);
      setLoading(false);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    setFilteredRobots(newFilteredRobots);
  }, [robots, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void =>
    setSearchField(event.target.value);

  return (
    <div className="tc">
      <h1 className="f1">ROBOFRINEDS</h1>
      <SearchBox searchChange={onSearchChange} />
      {loading ? <h1>{"Loading..."}</h1> : null}
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
};

export default App;
