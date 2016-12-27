/* eslint max-len: 0 */

import React from 'react';
import { Link } from 'react-router';
import flows from '../flows.js';
import _ from 'underscore';

const Home = () => (
  <div className="row home">
    <div className="col-md-12">
      <div className="row">
        <div className="col-md-7">
          <h3>Welcome to IZ Services</h3>
          <p>
            IZ Services is a privately owned company that is not owned or operated by any state government agency.
          </p>
          <p>
            Through our online intake and chat portal, you may access information and documents <b>free of your charge</b>.
            Issues may include Renewal, Transfer, etc etc...
            To continue, please select one of the options below.
            If you need assistance with a issue that is not related or if you are not sure what kind of issue you have, please call our hotline at 1-310-123-5467
          </p>
        </div>
        <div className="col-md-5 text-center">
          <h3>What do you need help with?</h3>
          {_.map(flows, (item, index) => (
            <div key={item.title}>
              <Link to={item.link} className="btn btn-default btn-lg btn-block" key={index} >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Home;
