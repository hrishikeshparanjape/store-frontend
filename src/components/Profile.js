import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {  

  componentWillUnmount() {
    console.log("Profile unmounting");
  }

  componentDidMount() {
    console.log("Profile mounted");
  }

  render() {
    return (
<div>
My Profile
</div>
    );
  }
}

export default Profile;
