import React from 'react'

function Contact() {
  return (
    <div>
        <div class="contactback">
        
        <form class="formcontact">
  <h2 class="contactus">CONTACT US</h2>
  <p type="Name:" class="conp"><input placeholder="Write your name here.." class="contactinp"></input></p>
  <p type="Email:" class="conp"><input placeholder="Let us know how to contact you back.." class="contactinp"></input></p>
  <p type="Message:" class="conp"><input placeholder="What would you like to tell us.." class="contactinp"></input></p>
  <button class="conbutton">Send Message</button>
  <p class="conp2">Contact:1234567894  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email: livetix@gmail.com</p>
  
</form>
        </div>
        
    </div>
  )
}

export default Contact