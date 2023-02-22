import React from 'react';
import './logoutButton.css'


function LogoutView(props) {
    return (
        <div>
            <button className="signoutButton" onClick= {props.signOut}>logout</button>
        </div>
    );

}

export default LogoutView;

