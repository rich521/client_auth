import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { AppActions } from '../actions/actions';
import { IRootState } from '../store/rootStore';
import { History } from 'history';

interface InjectedProps {
    userLogout: typeof AppActions.userLogout;
    authenticated: boolean;
    history: History;
}

class FeatureClass extends React.Component<InjectedProps> {
    onLogout = () => {
        this.props.userLogout();
        window.localStorage.removeItem('token');
        this.props.history.push('/login');
    }

    render() {
        return (
            <div>
                <h1>Im the feature page</h1>
                <Button onClick={this.onLogout}>
                    Signout
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
