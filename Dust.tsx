// @ts-nocheck
"use client";
import { useEffect, useState } from "react";
const Dust = () => {
	const [active, setActive] = useState(false);

	// Particle.js configuration
	const json = {
		"particles": {
			"number": {
				"value": 200,
				"density": {
					"enable": true,
					"value_area": 500
				}
			},
			"color": {
				"value": "#fff"
			},
			"shape": {
				"type": "circle",
				"stroke": {
					"width": 0,
					"color": "#000000"
				},
				"polygon": {
					"nb_sides": 5
				},
				"image": {
					"src": "img/github.svg",
					"width": 100,
					"height": 100
				}
			},
			"opacity": {
				"value": 0.5,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 1,
					"opacity_min": 0.1,
					"sync": false
				}
			},
			"size": {
				"value": 1,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 40,
					"size_min": 0.1,
					"sync": false
				}
			},
			"line_linked": {
				"enable": false,
				"distance": 500,
				"color": "#ffffff",
				"opacity": 0.4,
				"width": 2
			},
			"move": {
				"enable": true,
				"speed": 1,
				"direction": "bottom",
				"random": true,
				"straight": false,
				"out_mode": "out",
				"bounce": false,
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 1200
				}
			}
		},
		"interactivity": {
			"detect_on": "window",
			"events": {
				"onhover": {
					"enable": false,
					"mode": "bubble"
				},
				"onclick": {
					"enable": true,
					"mode": "repulse"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 280.1507129632639,
					"line_linked": {
						"opacity": 0.5
					}
				},
				"bubble": {
					"distance": 400,
					"size": 4,
					"duration": 0.3,
					"opacity": 1,
					"speed": 3
				},
				"repulse": {
					"distance": 200,
					"duration": 0.4
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
		"retina_detect": true
	}

	useEffect(() => {
		if (!active) {
			// Ensure the library is dynamically loaded
			import("particles.js").then((module) => {
				if (module && window.particlesJS) {
					window.particlesJS("particles-old-device", json);
					setActive(true);
				}
			});
		}
	}, [active]);

	return (
		<div
			id="particles-old-device"
			className="fixed top-0 left-0 w-full h-full z-0"
		/>
	);
};

export default Dust;