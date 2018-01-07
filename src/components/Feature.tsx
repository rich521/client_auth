import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { AppActions } from '../actions/actions';
import { IRootState } from '../store/rootStore';
import { ROOT_URL } from '../store/constants';

interface InjectedProps {
    userLogout: typeof AppActions.userLogout;
    authenticated: boolean;
}

class FeatureClass extends React.Component<InjectedProps> {
    componentWillMount() {
        // fetch asset data from mongodb
        fetch(ROOT_URL, {
            method: 'GET',
            headers: { authorization: window.localStorage.getItem('token') }
        })
        .then(res => res.json())
        .then(data => console.log(data));
    }

    onLogout = () => {
        this.props.userLogout();
        window.localStorage.removeItem('token');
    }

    render() {
        // top nav, side vav, main view
        return (
            <div>
                <h1>Im the feature page</h1>
                <Button onClick={this.onLogout}>
                    Log out
                </Button>
            </div>
        );
    }
}

const mapStateToProps = (state: IRootState) => ({
    authenticated: state.login.authenticated,
});
  
export const Feature = connect(mapStateToProps, {
    userLogout: AppActions.userLogout,
})(FeatureClass);
