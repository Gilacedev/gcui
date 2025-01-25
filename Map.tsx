"use client";
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useRef } from "react";
import mapboxgl from 'mapbox-gl'
import Button from "@/components/Button";
import ColorTypes from "@/components/functions/ColorTypes";

const Map: React.FC<{ settings: any }> = ({ settings }) => {
	const mapRef = useRef<mapboxgl.Map | null>(null);
	const mapContainerRef = useRef<HTMLDivElement | null>(null);

	const handleClickGeo = () => {
		window.location.href = `geo:${settings.latitude},${settings.longitude}`;
	}

	useEffect(() => {
		if (settings && settings.mapbox_api) {
			mapboxgl.accessToken = settings.mapbox_api;

			if (mapboxgl.getRTLTextPluginStatus() === 'unavailable') {
				mapboxgl.setRTLTextPlugin(
					'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
					(): void => {},
					true // Lazy load the plugin only when text is in arabic
				)
			}
			mapRef.current = new mapboxgl.Map({
				style: "mapbox://styles/mapbox/dark-v10",
				container: mapContainerRef.current!,
				center: [settings.longitude, settings.latitude],
				zoom: 1,
				pitch: 1,
				bearing: -45,
				antialias: true,
			});
			mapRef.current.on("load", () => {
				mapRef.current && mapRef.current.flyTo({
					center: [settings.longitude, settings.latitude],
					zoom: 15,
					essential: true,
					speed: 1,
					curve: 1,
					pitch: 80,
				});
				mapRef.current && mapRef.current.addSource("mapbox", {
					type: "vector",
					url: "mapbox://mapbox.3d-buildings",
				});
				mapRef.current && mapRef.current.addLayer({
					id: "3d-buildings",
					source: "mapbox",
					"source-layer": "building",
					type: "fill-extrusion",
					minzoom: 15,
					paint: {
						"fill-extrusion-color": "#aaa",
						"fill-extrusion-height": [
							"interpolate",
							["linear"],
							["zoom"],
							15,
							0,
							15.05,
							["get", "height"],
						],
						"fill-extrusion-base": [
							"interpolate",
							["linear"],
							["zoom"],
							15,
							0,
							15.05,
							["get", "min_height"],
						],
						"fill-extrusion-opacity": 0.6,
					},
				});

				// Add a marker at the center
				new mapboxgl.Marker()
					.setLngLat([settings.longitude, settings.latitude])
					.addTo(mapRef.current!);
			});

			return () => {
				mapRef.current && mapRef.current.remove();
			};
		}
	}, [settings]);

	return (
		<div className={"h-full w-full"}>
			<div className={"absolute top-0 left-0 p-2 z-[2]"}>
				<Button
					className={"!gap-0"}
					particular={true}
					color={ColorTypes.primary}
					tag={"span"}
					onClick={() => handleClickGeo()}
				>
					<span className={"fa fa-location-arrow-up"} />
				</Button>
			</div>
			<div
				className={
					"absolute left-0 top-0 w-full h-full bg-slate-800 bg-blend-luminosity radial-mask pointer-events-none z-[1]"
				}
			/>
			<div id="map-container" ref={mapContainerRef} className={"h-full w-full"}></div>
		</div>
	);
};
export default Map