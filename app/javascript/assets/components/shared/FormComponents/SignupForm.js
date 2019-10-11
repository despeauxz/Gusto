import React from 'react';
import TextInput from '../Form/TextInput';
import Button from '../Button';


class SignupForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        const { email, password } = this.state;

        return (
            <>
                <div className="wrapper">
                    <form onSubmit={this.handleSubmit}>
                        <div className="flex-col">
                            <TextInput
                                id="email"
                                name="email"
                                placeholder="Email Address"
                                value={email}
                                label="Email"
                                handleChange={this.handleChange}
                            />
                        </div>
                        <div className="flex-col">
                            <TextInput
                                id="password"
                                name="password"
                                placeholder="Password"
                                value={password}
                                label="Password"
                                handleChange={this.handleChange}
                            />
                        </div>

                        <div className="mx-auto">
                            <Button color="blue" variant={500} size="medium" round outline>Get Started</Button>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

export default SignupForm;
