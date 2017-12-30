import * as React from 'react';
import { connect } from 'react-redux';
import { IRootState, ILogin } from '../../store/rootStore';
import { History } from 'history';

interface IAuthHoC {
    login: ILogin;
    history: History;
}

export const RequireAuth = (ComposedComponent: React.ComponentClass| React.StatelessComponent) => {
  class Authentication extends React.Component<IAuthHoC> {
    componentWillMount() {
      if (!this.props.login.authenticated) {
        this.props.history.push('/');
      }
    }

    componentWillUpdate(nextProps: IAuthHoC) {
      if (!nextProps.login.authenticated) {
        this.props.history.push('/');
      } 
    }

    render() {
      return <ComposedComponent />;
    }
  }

  function mapStateToProps(state: IRootState) {
    console.log(state.login);
    return { login: state.login };
  }
  
  return connect(mapStateToProps)(Authentication);
}
