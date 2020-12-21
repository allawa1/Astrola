import React from 'react';
import { ThemeProvider, createTheme, Arwes, Header} from 'arwes';
import background from '/Users/alexiaallaway/Astrola_/src/galaxy-background.jpg'
import Landing from './components/landing'
import { Route, Switch, Link} from 'react-router-dom';
import Search from './components/search'
import Highlight from 'arwes/lib/Highlight';
import Game from './components/game'
const style = { display: 'inline-block' };

const App = () => (
  <div>
  <ThemeProvider theme={createTheme()}>
  <Arwes animate show background={background}>
  <Header animate>
                <h1 style={{ margin: 0 }}>Pic Of the Day </h1>
                <Highlight style={style}>
                  <Link to="/">Home</Link></Highlight>
                < div className="navs">
                <Link to="/search">Search</Link>
                <Link to="/play">Play</Link>
                </div>
  </Header>
  <main>
    <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/search" component={Search}/>
    <Route exact path="/play" component={Game}/>
    </Switch>
    </main>
    </Arwes>
  </ThemeProvider>
  </div>
);

export default App;