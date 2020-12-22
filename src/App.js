import React from 'react';
import { ThemeProvider, createTheme, Arwes, Header} from 'arwes';
import background from './galaxy-background.jpg'
import Landing from './components/landing'
import { Route, Switch, Link} from 'react-router-dom';
import Search from './components/search'
import Highlight from 'arwes/lib/Highlight';
const style = { display: 'inline-block' };

const App = () => {



  return (
  <div>
  <ThemeProvider theme={createTheme()}>
  <Arwes animate show background={background}>
  <Header animate>
                <h1 style={{ margin: 0 }}>Astrola </h1>
                <Highlight style={style}>
                  <ul className="nav-list">
                  <li><Link to="/">Home</Link></li>
                < div className="navs">
                <li><Link to="/search">Search</Link></li>
                </div>
                </ul>
                </Highlight>
  </Header>
  <main>
    <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/search" component={Search}/>
    </Switch>
    </main>
    </Arwes>
  </ThemeProvider>
  </div>

)};


export default App;