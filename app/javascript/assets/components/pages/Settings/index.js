/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Sidebar from '../../shared/Sidebar';
import Header from '../../shared/Header';
import Button from '../../shared/Button';
import TextInput from '../../shared/Form/TextInput';
import { Avatar } from '../../../public/img';
import { Img } from '../../shared/utilities';


class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      oldPassword: '*********',
      newPassword: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { oldPassword, newPassword } = this.state;
    return (
      <>
        <div className="antialiased h-screen flex">
          <Sidebar />

          <div className="flex-1 flex flex-col overflow-y-scroll">
            <Header name="Settings" />

            <div className="lg:px-10 px-4 py-4">
                <div className="mb-4">
                  <Button type="button" variant={700} color="blue" size="medium">Account</Button>
                </div>
                <div className="rounded-lg border">
                  <div className="border-b">
                    <div className="p-6">
                      <h3 className="text-base font-semibold text-gray-800">Account Settings</h3>
                    </div>
                  </div>
                  <div className="border-b">
                    <div className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex justify-center text-center flex-col">
                          <h4 className="text-gray-500 text-sm mb-2">Current Photo</h4>
                          <Img src={Avatar} alt="Malik berry" className="h-8 w-8 rounded-full" />
                        </div>
                        <Button type="button" outline size="medium" variant={600} color="purple"className="bg-transparent">Upload New Photo</Button>
                      </div>
                    </div>
                  </div>
                  <div className="border-b">
                    <div className="p-6">
                      <h3 className="text-gray-700 text-base font-medium">Security</h3>
                      <div className="flex flex-wrap form">
                        <div className="my-1 px-1 w-full md:w-1/2 h-auto lg:my-4 lg:pr-6 lg:w-1/2 relative first">
                          <TextInput
                            id="old-password"
                            type="password"
                            name="oldPassword"
                            value={oldPassword}
                            label="Old Password"
                            className="bg-transparent py-2"
                            handleChange={this.handleChange}
                          />
                        </div>
                        <div className="my-1 px-1 w-full md:w-1/2 h-auto lg:my-4 lg:px-6 lg:w-1/2 relative">
                          <TextInput
                            id="new-password"
                            type="password"
                            name="newPassword"
                            value={newPassword}
                            label="New Password"
                            className="bg-transparent py-2"
                            handleChange={this.handleChange}
                          />
                        </div>
                      </div>
                      <div className="flex justify-end form">
                        <div className="my-1 px-1 w-full md:w-1/2 h-auto lg:my-4 lg:pr-6 lg:w-1/2 relative last">
                          <TextInput
                            id="old-password"
                            type="password"
                            name="oldPassword"
                            value={oldPassword}
                            label="Confirm Password"
                            className="bg-transparent py-2"
                            handleChange={this.handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Welcome;