import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import { Switch, Route } from "react-router-dom";
import { Layout } from "./components/Layout";

//Import Pages
import Home from "./components/pages/Home";
import { UserForm } from "./components/Forms/UserForm";
import SearchHome from "./components/search/SearchHome";
import PageNotFound from "./components/pages/PageNotFound";
import ProduceTable from "./components/dataTables/ProduceTable";
import DairyTable from "./components/dataTables/DairyTable";
import BakeryCerealTable from "./components/dataTables/BakeryCerealTable";
import SnacksTable from "./components/dataTables/SnacksTable";
import BeveragesTable from "./components/dataTables/BeveragesTable";
import WomenTopsTable from "./components/dataTables/WomenTopsTable";
import WomenBottomsTable from "./components/dataTables/WomenBottomsTable";
import WomenShoesTable from "./components/dataTables/WomenShoesTable";
import MenTopsTable from "./components/dataTables/MenTopsTable";
import MenBottomsTable from "./components/dataTables/MenBottomsTable";
import MenShoesTable from "./components/dataTables/MenShoesTable";
import LivingRoomTable from "./components/dataTables/LivingRoomTable";
import BedroomTable from "./components/dataTables/BedroomTable";
import StudyTable from "./components/dataTables/StudyTable";
import BiographyTable from "./components/dataTables/BiographyTable";
import FictionTable from "./components/dataTables/FictionTable";
import HealthFitnessTable from "./components/dataTables/HealthFitnessTable";

function App() {
  return (
    <div >
      <Navbar />
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/order" component={UserForm} />
          <Route path="/searchHome" component={SearchHome} />
          <Route path="/produce" component={ProduceTable}   />
          <Route path="/dairy" component={DairyTable}  />
          <Route path="/bakery_and_cereal" component={BakeryCerealTable}  />
          <Route path="/snacks" component={SnacksTable}  />
          <Route path="/beverages" component={BeveragesTable}  />
          <Route path="/Women_Tops" component={WomenTopsTable}  />
          <Route path="/Women_Bottoms" component={WomenBottomsTable}  />
          <Route path="/Women_Shoes" component={WomenShoesTable}  />
          <Route path="/Men_Tops" component={MenTopsTable}  />
          <Route path="/Men_Bottoms" component={MenBottomsTable}  />
          <Route path="/Men_Shoes" component={MenShoesTable}  />
          <Route path="/Living_Room" component={LivingRoomTable}  />
          <Route path="/Bedroom" component={BedroomTable}  />
          <Route path="/Study" component={StudyTable}  />
          <Route path="/Biography" component={BiographyTable}  />
          <Route path="/Fiction" component={FictionTable}  />
          <Route path="/Health_And_Fitness" component={HealthFitnessTable}  />
          <Route component={PageNotFound} />
        </Switch>
      </Layout>
      <br/><br/><br/>
      <Footer />
    </div>
  );
}

export default App;
