import React from 'react'

function Profile() {
  return (
    <body>
      
<div class="profback"></div>
<div class="wrapper3">
  <div class="prof">
    <div class="content90">
        <center>
      <p class="editprof">Edit Profile</p></center>
      <form action="">
        <fieldset>
          <div class="grid-35">Your Photo
          </div>
          <div class="grid-65">
            <span class="photo" title="Upload your Avatar!"></span>
            <input type="file" class="btn" />
          </div>
        </fieldset>
        <fieldset>
          <div class="grid-35">
             Name
          </div>
            <div class="grid-65">
            <input type="text" class="inf" tabindex="1" />
          </div>
        </fieldset>
        <fieldset>
          <div class="grid-35">
            Email-id
          </div>
          <div class="grid-65">
            <input type="email" class="inf" tabindex="6" />
          </div>
        </fieldset>
        <fieldset>
          <div class="grid-35">
            Password
          </div>
          <div class="grid-65">
            <input type="password" class="inf" tabindex="5" />
          </div>
        </fieldset>
        <fieldset>
          <div class="grid-35">
            City
          </div>
          <div class="grid-65">
            <input type="text" class="inf" tabindex="4" />
          </div>
        </fieldset>
        <fieldset>
          <div class="grid-35">
            Contact-no
          </div>
          <div class="grid-65">
            <input type="text" class="inf" tabindex="4" />
          </div>
        </fieldset>
       
        <fieldset>
          <input type="button" class="Btn cancel" value="Cancel" />
          <input type="submit" class="Btn" value="Save Changes" />
        </fieldset>

      </form>
    </div>
  </div>
</div>

</body>
  )
}

export default Profile