import React from 'react';

import testemonials from "../../testemonials";
import "./ClientTestemonials.css";

function ClientTestimonials() {
  return (
		<section className="testimonials">
			<h2 className="h2-client-testimonials">Client Testemonials</h2>
			<div className="clients">
				{testemonials.map((client) => (
					<div className="client-testemonial">
						<img className="client-photo" src={client.picture} alt="client" />
						<p className="p-testemonial">{client.testemonial}</p>
						<p className="p-name-client">{client.name}</p>
						<p className="p-function-client">{client.function}</p>
					</div>
				))}
			</div>
		</section>
	);
}

export default ClientTestimonials;