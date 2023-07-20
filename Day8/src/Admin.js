import React from 'react'
import { Link} from 'react-router-dom'
function Admin() {
  return (
    <div>
        <div class="adminback">
          </div>
          <div class="admin4">
            <Link to="/Add"><button class="adbut">Add Details</button></Link>
            <Link to="/Update"><button class="adbut">Update Details</button></Link>
           <Link to="/Get"><button class="adbut">Get Details</button></Link>
            <Link to="/Delete"><button class="adbut">Delete Details</button></Link>
          </div>
    </div>
  )
}

export default Admin