import { useContext } from "react";
import { workoutsContext } from "../context/WorkoutContext";

export const useWorkoutsContext = () => {
  const context = useContext(workoutsContext);

  return context;
};
