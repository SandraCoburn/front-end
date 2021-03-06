import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";

import LoginPage from "./components/LoginPage";
import "./App.css";
import UpdatePlantForm from "./components/UpdatePlantForm";
import PlantList from "./components/PlantList";
import AddPlantForm from "./components/AddPlantForm";
import RegistrationForm from "./components/RegistrationForm";

// import TestForm from "./components/TestForm";

function App() {
  const [plant, setPlant] = useState([
    {
      id: 1,
      name: "a plant",
      nickname: "indoor plant",
      species: "undefined",
      h2oFrequency: "once a week"
    },
    {
      id: 2,
      name: "a plant",
      nickname: "indoor plant",
      species: "undefined",
      h2oFrequency: "once a week"
    },
    {
      id: 3,
      name: "a plant",
      nickname: "indoor plant",
      species: "undefined",
      h2oFrequency: "once a week"
    }
  ]);
  const addNewPlant = rec => {
    const newPlant = {
      ...rec,
      id: Date.now()
    };
    setPlant([...plant, newPlant]);
  };

  const [editPlant, setEditPlant] = useState({
    name: "",
    nickname: "",
    species: "",
    h2oFrequency: ""
  });

  const plantToEdit = plant => {
    const editPlant = {
      id: plant.id,
      name: plant.name,
      nickname: plant.nicname,
      species: plant.species,
      h2oFrequency: plant.h2oFrequency
    };
    setEditPlant(editPlant);
  };

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/login" component={LoginPage} />

          <Route
            path="/plants"
            render={props => (
              <div>
                <PlantList
                  {...props}
                  plant={plant}
                  plantToEdit={plantToEdit}
                  editPlant={editPlant}
                  addNewPlant={addNewPlant}
                />
              </div>
            )}
          />

          <Route exact path="/" component={LoginPage} />

          <Route path="/register" component={RegistrationForm} />
          {/* <Route
            path="/plants/:plantid"
            render={props => (
              <UpdatePlantForm {...props} editPlant={editPlant} plant={plant} />
            )}
          /> */}
          <Route
            path="/plants"
            render={props => (
              <AddPlantForm {...props} addNewPlant={addNewPlant} />
            )}
          />

          <PrivateRoute exact path="/plants" component={PlantList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
