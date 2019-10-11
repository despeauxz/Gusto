/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../shared/Sidebar';
import Header from '../../shared/Header';
import { Card } from '../../shared/utilities';
import Cardish from '../../shared/Card';
import './index.scss';

class Welcome extends React.PureComponent {
  render() {
    return (
      <>
        <div className="antialiased h-screen flex">
          <Sidebar />

          <div className="flex-1 flex flex-col overflow-y-scroll">
            <Header name="Overview" />

            <div className="lg:px-10 px-4 py-4">
              <div className="flex flex-wrap cards">
                <Card name="Unresolved" active count={60} id="first" />
                <Card name="Overdue" count={16} />
                <Card name="Open" count={43} />
                <Card name="On hold" count={64} id="last" />
              </div>
              <Cardish className="mt-6">
                <div className="flex justify-center items-center chart">
                  <div className="chart__diagram text-center">
                    Chart
                  </div>
                  <div className="chart__stats border-l">
                    <div className="flex flex-col">
                      <div className="p-4 text-center border-b">
                        <h3 className="text-gray-500 font-semibold text-sm">Resolved</h3>
                        <h1 className="text-2xl font-semibold text-gray-800">449</h1>
                      </div>
                      <div className="p-4 text-center border-b">
                        <h3 className="text-gray-500 font-semibold text-sm">Received</h3>
                        <h1 className="text-2xl font-semibold text-gray-800">242</h1>
                      </div>
                      <div className="p-4 text-center border-b">
                        <h3 className="text-gray-500 font-semibold text-sm">Average first response time</h3>
                        <h1 className="text-2xl font-semibold text-gray-800">24m</h1>
                      </div>
                      <div className="p-4 text-center border-b">
                        <h3 className="text-gray-500 font-semibold text-sm">Average response time</h3>
                        <h1 className="text-2xl font-semibold text-gray-800">3h 8m</h1>
                      </div>
                      <div className="p-4 text-center border-b">
                        <h3 className="text-gray-500 font-semibold text-sm">Resolution with SLA</h3>
                        <h1 className="text-2xl font-semibold text-gray-800">24%</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </Cardish>
              <div className="mt-8">
                <div className="flex cards">
                  <div className="my-1 px-1 w-full md:w-1/2 h-auto lg:my-4 lg:px-6 lg:w-1/2 text-center relative" id="first">
                    <div className="border rounded-lg">
                      <div className="flex justify-between items-center p-6">
                        <h3 className="font-semibold text-gray-700 text-lg">Unresolved tickets</h3>
                        <h5 className="text-purple-600 text-sm font-medium">View details</h5>
                      </div>
                      <div className="border-b text-gray-800 py-3">
                        <div className="px-6 flex items-center justify-between">
                          <h3 className="text-sm font-medium">Waiting on Feature Request</h3>
                          <span className="text-gray-400 text-sm">4223</span>
                        </div>
                      </div>
                      <div className="border-b text-gray-700 py-3">
                        <div className="px-6 flex items-center justify-between">
                          <h3 className="text-sm">Awaiting Customer Response</h3>
                          <span className="text-gray-400 text-sm">1002</span>
                        </div>
                      </div>
                      <div className="border-b text-gray-700 py-3">
                        <div className="px-6 flex items-center justify-between">
                            <h3 className="text-sm">Awaiting Developer Fix</h3>
                          <span className="text-gray-400 text-sm">914</span>
                        </div>
                      </div>
                      <div className="text-gray-700 py-3">
                        <div className="px-6 flex items-center justify-between">
                            <h3 className="text-sm">Pending</h3>
                          <span className="text-gray-400 text-sm">281</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-1 px-1 w-full md:w-1/2 h-auto lg:my-4 lg:px-6 lg:w-1/2 text-center relative" id="last">
                    <div className="border rounded-lg">
                      <div className="flex justify-between items-center p-6">
                        <h3 className="font-semibold text-gray-700 text-lg">Tasks</h3>
                        <h5 className="text-purple-600 text-sm font-medium">View all</h5>
                      </div>
                      <div className="border-b text-gray-800 py-3">
                        <div className="px-6 flex items-center justify-between">
                          <h3 className="text-sm font-medium text-gray-400">Create new task</h3>
                          <Link to="#" className="px-3 py-1 rounded-full bg-gray-300">
                            <i className="icon ion-md-add text-gray-700" />
                          </Link>
                        </div>
                      </div>
                      <div className="border-b text-gray-700 py-3">
                        <div className="px-6 flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="checkbox checkbox-circle">
                              <label className="text-gray-800 text-sm">
                                <input type="checkbox" className="styled" /> Finish ticket update
                              </label>
                            </div>
                          </div>
                          <span className="tag py-1 px-3 text-white bg-yellow-400 text-xs rounded-full">
                            <h4>Urgent</h4>
                          </span>
                        </div>
                      </div>
                      <div className="border-b text-gray-700 py-3">
                        <div className="px-6 flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="checkbox checkbox-circle">
                              <label className="text-gray-800 text-sm">
                                <input type="checkbox" className="styled" /> Create new ticket example
                              </label>
                            </div>
                          </div>
                          <span className="tag py-1 px-3 text-white bg-green-400 text-xs rounded-full">
                            <h4>New</h4>
                          </span>
                        </div>
                      </div>
                      <div className="border-b text-gray-700 py-3">
                        <div className="px-6 flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="checkbox checkbox-circle">
                              <label className="text-gray-800 text-sm">
                                <input type="checkbox" className="styled" /> Update ticket report
                              </label>
                            </div>
                          </div>
                          <span className="tag py-1 px-3 text-white bg-gray-400 text-xs rounded-full">
                            <h4>Default</h4>
                          </span>
                        </div>
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