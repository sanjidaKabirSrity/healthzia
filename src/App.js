import { BrowserRouter , Switch , Route } from 'react-router-dom';
import NavBar from './Shared/NabBar'
import './App.css';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import AuthProvider from './Context/AuthProvider';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Doctors from './Pages/Doctors';
import ContactUs from './Pages/ContactUs';
import NotFound from './Pages/NotFound';
import Footer from './Shared/Footer';
import DataProvider from './Context/DataProvider';
import ServicesDetails from './Pages/ServicesDetails/ServicesDetails';
import PrivateRoute from './Shared/PrivateRoute';
import useDocumentTitle from './Hooks/useDocumentTitle';
  

function App() {

  // Router Page title  
  function Page(props) {
    const titlePrefix = 'HEALTHZIA | '
    useDocumentTitle(`${titlePrefix}${props.title}`)
    return <h2>{props.content}</h2>
  }
  
  const HomePage = () => {
    return <Page content={<Home></Home>} title='Just For Patient' />
  }
  const SignInPage = () => {
    return <Page content={<SignIn></SignIn>} title='Sign In' />
  }
  const SignUpPage = () => {
    return <Page content={<SignUp></SignUp>} title='Sign Up' />
  }
  const NotFoundPage = () => {
    return <Page content={<NotFound></NotFound>} title='Sign Up' />
  }

  return (
    <div className="font-sans">
      <AuthProvider>
        <DataProvider>
        <BrowserRouter>
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home" component={HomePage}></Route>
            <PrivateRoute exact path="/services/:serviceId">
              <ServicesDetails></ServicesDetails>
            </PrivateRoute>
            <PrivateRoute exact path="/aboutUs">
              <AboutUs></AboutUs>
            </PrivateRoute>
            <PrivateRoute exact path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            <PrivateRoute exact path="/conactUs">
              <ContactUs></ContactUs>
            </PrivateRoute>
            <Route exact path="/signin" component={SignInPage}></Route>
            <Route exact path="/signup" component={SignUpPage}></Route>
            <Route path="*" component={NotFoundPage}></Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
        </DataProvider>
      </AuthProvider>
    </div>
  );
}

export default App;