import React from 'react'

function Ticket() {
  return (
    <div>

<div class="tback"></div>
<div class="ticket">
	<div class="left">
		<div class="image">
			<div class="ticket-number">
			</div>
		</div>
		<div class="ticket-info">
			<p class="date">
				<span>SUNDAY</span>
				<span class="june-29">AUG 20TH</span>
				<span>2023</span>
			</p>
			<div class="show-name">
				<h1 class="th">Marakuma Nenjam</h1>
				<h2>A R Rahman</h2>
			</div>
			<div class="time">
				<p>8:00 PM <span>TO</span> 11:00 PM</p>
				<p>DOORS <span>@</span> 7:00 PM</p>
			</div>
			<p class="location"><span>Codissia Grounds</span>
				<span class="separator"><i class="far fa-smile"></i></span><span>Coimbatore</span>
			</p>
		</div>
	</div>
	<div class="right">
		<div class="right-info-container">
			<div class="show-name">
				<h1></h1>
			</div>
			<div class="time">
				<p>8:00 PM <span>TO</span> 11:00 PM</p>
				<p>DOORS <span>@</span> 7:00 PM</p>
			</div>
			<div class="barcode">
				<img src="https://external-preview.redd.it/cg8k976AV52mDvDb5jDVJABPrSZ3tpi1aXhPjgcDTbw.png?auto=webp&s=1c205ba303c1fa0370b813ea83b9e1bddb7215eb" alt="QR code"/>
			</div>
			<p class="ticket-number">
				#20030220
			</p>
		</div>
	</div>
</div>
    </div>
  )
}

export default Ticket