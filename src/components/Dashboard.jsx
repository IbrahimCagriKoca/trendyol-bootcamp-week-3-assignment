import { Route, Router, Switch } from "react-router"
import CharacterFilter from "./CharacterFilter";
import CharacterPage from "./CharacterPage";

const Dashboard = () => {
    return(
        <div>
            <Switch>
                <Route  exact path="/" component={CharacterFilter}></Route>
                <Route  exact path="/characters/:id" component={CharacterPage}></Route>
            </Switch>
        </div>
    )

}

export default Dashboard;