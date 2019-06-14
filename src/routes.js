import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Importar paginas
import Feed from './pages/Feed';
import New from './pages/New';

function Routes() {
    return (
        // o Switch garente que a vai ser chamado apenas uma url quando o usuario acessar
        <Switch>
            <Route path="/" exact component={Feed} />
            <Route path="/new" component={New} />
        </Switch>
    );
}

export default Routes;