import React from 'react';
import {Link} from 'react-router-dom';
function Info() {
  return (
    
    <body>
        
    <div class="infoback">
    <div class="row">
      <div class="mt">
        <div class="car">
          <div class="pppp">
            <img class="profile_img" src="https://i.scdn.co/image/ab6761610000e5eb16d0fd3c703d4fdb9733b2b6" alt="dp"/>
            <h3>Janani</h3>
            <Link to="/Profile"><button class="editp">Edit Profile</button></Link>
          </div>
         
        </div>
      </div>
      <div class="col-lg-8">
        <div class="geninf">
          <div class="card-header bg-transparent border-0">
            <h3 class="geninf1"><i class="far fa-clone pr-1"></i>General Information</h3>
          </div>
          <div class="geninf2">
            <table class="table table-bordered">
              <tr>
                <th width="30%">Name</th>
                <td width="2%">:</td>
                <td>Janani</td>
              </tr>
              <tr>
                <th width="30%">Email-id</th>
                <td width="2%">:</td>
                <td>Jan123@gmail.com</td>
              </tr>
              <tr>
                <th width="30%">Password</th>
                <td width="2%">:</td>
                <td>Jan939291&</td>
              </tr>
              <tr>
                <th width="30%">City</th>
                <td width="2%">:</td>
                <td>Coimbatore</td>
              </tr>
              <tr>
                <th width="30%">Contact-no</th>
                <td width="2%">:</td>
                <td>7550129183</td>
              </tr>
            </table>
          </div>
        



         
          
          
      
      </div>
    </div>
  </div>
</div>
    </body>
    
  )
}

export default Info