import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Users = ({ users }) => (
  <div className="text-container">
    {users ? (
      <div>
        <h1>People currently chatting:</h1>
        <div className="active-container">
          <h2>
            {users.map(({ name }) => (
              <div key={name} className="active-users">
                {name}
                <FontAwesomeIcon icon={faCircle} color="lawngreen" />
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);

export default Users;
