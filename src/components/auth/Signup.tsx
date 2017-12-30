import * as React from 'react';
import { connect } from 'react-redux';
import { Button, Checkbox, Form, Message, Icon } from 'semantic-ui-react';
import { History } from 'history';
import { IRootState, ILogin } from '../../store/rootStore';
import { AppActions } from '../../actions/actions';
interface InjectedProps {
    setEmail: typeof AppActions.setEmail;
    setPassword: typeof AppActions.setPassword;
    setPasswordConfirm: typeof AppActions.setPasswordConfirm;
    userError: typeof AppActions.userError;
    userSignup: typeof AppActions.userSignup;
    login: ILogin;
    history: History;
    errorMessage: string;
}

type Event = React.SyntheticEvent<HTMLInputElement>;

class SignupClass extends React.Component<InjectedProps> {
    handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        const { password, passwordConfirm, email } = this.props.login;
        console.log(password, passwordConfirm);
        if (password !== passwordConfirm) {
            this.props.userError('Passwords do not match');
            return;
        }

        // TODO validation
        if (email.length < 5 || password.length < 5) return;
        this.props.userSignup({ email, password }, this.props.history);
    }

    render() {
        // console.log(this.props.login);
        return [
            <Form onSubmit={this.handleSubmit} key="S1">
                <Form.Input
                    label="Email"
                    placeholder="joe@schmoe.com"
                    onChange={(e: Event) => this.props.setEmail(e.currentTarget.value)}
                />
                <Form.Input
                    label="New Password"
                    type="password"
                    onChange={(e: Event) => this.props.setPassword(e.currentTarget.value)}

                />
                <Form.Input
                    label="Confirm New Password"
                    type="password"
                    onChange={(e: Event) => this.props.setPasswordConfirm(e.currentTarget.value)}

                />
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>
                <Button type='submit'>Signup</Button>
            </Form>,
            <Message attached='bottom' error hidden={this.props.errorMessage === ''} key="S2">
                <Icon name='exclamation triangle' />
                {this.props.errorMessage}
            </Message>
        ];
    }
}

const mapStateToProps = (state: IRootState) => ({
    login: state.login,
    errorMessage: state.login.error,
});
  
export const Signup = connect(mapStateToProps, {
    setEmail: AppActions.setEmail,
    setPassword: AppActions.setPassword,
    setPasswordConfirm: AppActions.setPasswordConfirm,
    userSignup: AppActions.userSignup,
    userError: AppActions.userError,
})(SignupClass);
