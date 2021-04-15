import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import PrivateRoute from './Routes/PrivateRoute';
import HiddenRoute from './Routes/HiddenRoute';
import Search from './pages/Search/Search';
import './App.css';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className="container-fluid">
       <Layout>
        <PrivateRoute path="/home" component={Home}/>
        <PrivateRoute path="/search" component={Search}/>
      </Layout>
      <HiddenRoute path="/login" component={Login}/>
    </div>
  );
}

export default App;
