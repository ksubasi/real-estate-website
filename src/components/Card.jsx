import { Link } from "react-router-dom";

export default function Card({
	id,
	image,
	name,
	location,
	description,
	value,
}) {
	return (
		<div className="border rounded-xl overflow-hidden border-gray-400/50 hover:shadow-lg transition-all duration-200 group">
			<div className="w-full h-60 overflow-hidden">
				<img
					src={image}
					alt={name}
					className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
				/>
			</div>
			<div className="text-black font-semibold px-5 text-xl pt-3">
				<h2>{name}</h2>
				<div className="flex text-[#627084] text-base py-3">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="1.5em"
						viewBox="0 -960 960 960"
						width="1.5em"
						fill="currentColor">
						<path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
					</svg>

					<p>{location}</p>
				</div>
				<p className="text-[#627084] text-base pb-4">{description}</p>
				<hr className="border-gray-500/50" />
				<div className="flex justify-between py-4 text-sm">
					<p className="text-black font-semibold">{value} </p>
					<Link to={`/evlerimiz/${id}`}>
						<button className="text-blue-700 flex gap-2 hover:bg-[#F59F0A] px-4 py-2 rounded-md">
							Detaylı Bilgi
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="1.5em"
								viewBox="0 -960 960 960"
								width="1.5em"
								fill="currentColor">
								<path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
							</svg>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
