import React from 'react';
import { Redirect } from 'react-router-dom';

import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'', password:''});
            return <Redirect to='/'/>;
        } catch (err) {
            console.log(err);
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        label="Email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required />
                    <FormInput
                        type="password"
                        name="password"
                        label="Password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required />
                    <div className='buttons'>
                        <CustomButton type="submit" value="Submit Form" onClick={ this.handleSubmit }> Sign in </CustomButton>
                        <CustomButton type="button" formNoValidate onClick={ signInWithGoogle } isGoogleSignIn>
                        {' '} 
                        Sign in with Google {' '}
                        </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;