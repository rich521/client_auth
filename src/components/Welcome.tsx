import * as React from 'react';
import { Button } from 'semantic-ui-react';
import { History } from 'history';
import { paths } from '../store/constants';

interface IWelcome {
    history: History;
}

export const Welcome: React.SFC<IWelcome> = (props) => {

    function gotoPage(path: string) {
        console.log(`./${path}`);
        props.history.push(`./${path}`);
    }

    return (
        <div>
            <h1>This is the Welcome page</h1>
            <Button onClick={() => gotoPage(paths.signup)}>Signup</Button>
            <Button onClick={() => gotoPage(paths.login)}>Signin</Button>
            <p>Things about this page 1</p>
            <p>Things about this page 2</p>
            <p>Things about this page 3</p>
            <p>Things about this page 4</p>
        </div>
    );
}

