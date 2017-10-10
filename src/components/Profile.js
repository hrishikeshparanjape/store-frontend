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
<div className="col-md-9  admin-content" id="profile">
                <div className="panel panel-info margin-1em">
                    <div className="panel-heading">
                        <h3 className="panel-title">Facebook</h3>
                    </div>
                    <div className="panel-body">
                        Hrishikesh Paranjape
                    </div>
                </div>
                <div className="panel panel-info margin-1em">
                    <div className="panel-heading">
                        <h3 className="panel-title">Notification Preferences</h3>
                    </div>
                    <div className="panel-body">
 <div className="checkbox">
   <label><input type="checkbox" value=""/>Popular Kitchens Notifications</label>
</div>
<div className="checkbox">
  <label><input type="checkbox" value=""/>Food Ready Notifications</label>
</div>
<div className="checkbox">
  <label><input type="checkbox" value=""/>Daily Deals Notifications</label>
</div>
<button className="btn btn-primary">Save Preferences</button>
                    </div>
                </div>
                <div className="panel panel-info margin-1em">
                    <div className="panel-heading">
                        <h3 className="panel-title">Last Login</h3>

                    </div>
                    <div className="panel-body">
                        4 days Ago
                    </div>
                </div>

            </div>    );
  }
}

export default Profile;
