import React, { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutHook";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = { title, reps, load };
    const response = await fetch("/api/workouts/", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      setLoad("");
      setReps("");
      setTitle("");
      console.log("The Workout has been added", json);
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };

  return (
    <div>
      <form className="create">
        <h3>Add a new Workout</h3>
        <label>Exercise</label>
        <input
          placeholder="Title"
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <input
          placeholder="Load"
          type="number"
          onChange={(e) => {
            setLoad(e.target.value);
          }}
          value={load}
        />
        <input
          placeholder="Reps"
          type="number"
          onChange={(e) => {
            setReps(e.target.value);
          }}
          value={reps}
        />
        <button onClick={handleSubmit}>Workout</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default WorkoutForm;
