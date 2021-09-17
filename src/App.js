import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, withRouter, Switch} from "react-router-dom"
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./common/Preloader/Preloader";
import store from "./redux/redux-store";

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer')) ;
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer')) ;


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized){
            return <Preloader />
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                    <Route path='/login' render={() => <Login/>}/>

                    <Route path='/dialogs' render={() => {
                        return <React.Suspense fallback={<div>Loading...</div>}>
                        <DialogsContainer/>
                        </React.Suspense>}} />

                    <Route path='/profile/:userId?' render={() =>{
                        return <React.Suspense fallback={<div>Loading...</div>}>
                            <ProfileContainer/>
                        </React.Suspense>}} />

                    <Route path='/users'
                           render={() => <UsersContainer/>}/>

                    <Route path='/music' render={() => <Music/>}/>

                    <Route path='/settings' render={() => <Settings/>}/>
                    </Switch>
                    </div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>({
    initialized:state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);


const SamuraiJSApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp