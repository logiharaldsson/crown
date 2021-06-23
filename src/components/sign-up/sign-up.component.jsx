import React from 'react';

// components
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// firebase
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

// Styles
import './sign-up.styles.scss';


class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    } // end of constructor

    // When user submits a sign-up it clears the form and connects to firebase
    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state; 

        if(password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password); // registering the user in firebase

            await createUserProfileDocument(user, { displayName }); // awaiting firebase response

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }) // this will clear our form when user has clicked submit

        } catch (error) {
            console.error(error);
        } // end of try catch
    } // end of handleSubmit function

    // When user is writing to the form. It is setting state when writing
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    render () {
        // Destructuring the state
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <div className='sign-up'>
                <h2 className="title">I do not hava an account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />

                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />

                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        ) // end of return
    } // end of render
} // end of class SignUp

export default SignUp;