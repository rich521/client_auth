import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { IRootState, ILogin } from '../../store/rootStore';
import { AppActions } from '../../actions/actions';
interface InjectedProps {
    setEmail: typeof AppActions.setEmail;
    setPassword: typeof AppActions.setPassword;
    login: ILogin;
}

type Event = React.SyntheticEvent<HTMLInputElement>;

class LoginClass extends React.Component<InjectedProps> {

    handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        const { email, password } = this.props.login;
        // TODO validation
        if (email.length < 5 || password.length < 5) return;

    }

    render() {
        console.log(this.props.login);
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Input
                    label="Email"
                    placeholder="joe@schmoe.com"
                    onChange={(e: Event) => this.props.setEmail(e.currentTarget.value)}
                />
                <Form.Input
                    label="Enter Password"
                    type="password"
                    onChange={(e: Event) => this.props.setPassword(e.currentTarget.value)}

                />
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>
                <Button type='submit'>Login</Button>
            </Form>
        );
    }
}

const mapStateToProps = (state: IRootState) => ({
    login: state.login,
});
  
export const Login = connect(mapStateToProps, {
    setEmail: AppActions.setEmail,
    setPassword: AppActions.setPassword,
})(LoginClass);
