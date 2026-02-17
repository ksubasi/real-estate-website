import { Link, useParams } from "react-router-dom";
import Properties from "../components/Properties";
import Footer from "../components/Footer";

export default function ProjeDetayi({ projects }) {
	let { id } = useParams();
	const currentProject = projects[id - 1];
	return (
		<div className="animate-slideIn">
			<div className="relative h-100">
				<img
					className="w-full object-cover h-full"
					src={currentProject.image}
				/>
				<div className="absolute bg-linear-to-t from-white via-white/30 to-transparent h-full w-full top-0 left-0"></div>
				<div className="absolute bottom-0 left-0 px-10">
					<h2 className="text-black font-semibold text-5xl ">
						{currentProject.name}
					</h2>
					<div className="flex text-[#627084] text-base py-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="1.5em"
							viewBox="0 -960 960 960"
							width="1.5em"
							fill="currentColor">
							<path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
						</svg>

						<p>{currentProject.location}</p>
					</div>
				</div>
			</div>
			<div className="px-10 py-20 flex">
				<div className="w-2/3">
					<h3 className="text-black font-semibold mb-4 text-2xl">
						Proje Hakkında
					</h3>
					<p className="text-[#627084] text-base">
						{currentProject.extendedDescription}
					</p>
					<h3 className="text-black font-semibold mb-4 text-2xl pt-6">
						Özellikler
					</h3>
					<div className="grid grid-rows-4 grid-cols-2 gap-6">
						{currentProject.properties.map((property, index) => (
							<Properties key={index} text={property} />
						))}
					</div>
				</div>
				<div className="px-20 py-10 w-1/3">
					<div className="border border-gray-400/50 shadow-2xl rounded-lg p-4">
						<h3 className="text-xl font-semibold">Proje Bilgileri</h3>
						<div className="mt-3 flex flex-col gap-4">
							<div className="flex items-center gap-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="1.5em"
									viewBox="0 -960 960 960"
									width="1.5em"
									fill="currentColor"
									className="text-blue-700">
									<path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
								</svg>
								<div className="flex flex-col">
									<p className="text-gray-400">Birim Sayısı</p>
									<p className="text-black text-lg font-semibold flex-col">
										{currentProject.birimSayisi}
									</p>
								</div>
							</div>
							<div className="flex items-start gap-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="1.5em"
									viewBox="0 -960 960 960"
									width="1.5em"
									fill="currentColor"
									className="text-blue-700">
									<path d="M291.5-411.5Q280-423 280-440t11.5-28.5Q303-480 320-480t28.5 11.5Q360-457 360-440t-11.5 28.5Q337-400 320-400t-28.5-11.5Zm160 0Q440-423 440-440t11.5-28.5Q463-480 480-480t28.5 11.5Q520-457 520-440t-11.5 28.5Q497-400 480-400t-28.5-11.5Zm160 0Q600-423 600-440t11.5-28.5Q623-480 640-480t28.5 11.5Q680-457 680-440t-11.5 28.5Q657-400 640-400t-28.5-11.5ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" />
								</svg>
								<div className="flex flex-col">
									<p className="text-gray-400">Teslim Yılı</p>
									<p className="text-black text-lg font-semibold flex-col">
										{currentProject.teslimYili}
									</p>
								</div>
							</div>
							<div className="flex items-start gap-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="1.5em"
									viewBox="0 -960 960 960"
									width="1.5em"
									fill="currentColor"
									className="text-blue-700">
									<path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
								</svg>
								<div className="flex flex-col">
									<p className="text-gray-400">Toplam Alan</p>
									<p className="text-black text-lg font-semibold flex-col">
										{currentProject.toplamAlan} m<sup>2</sup>
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="mt-4 rounded-lg bg-blue-800 p-4">
						<h4 className="text-white font-semibold">
							Bu Proje Hakkında Bilgi Alın
						</h4>
						<p className="mt-3 text-gray-400">
							Uzman ekibimiz size yardımcı olmaktan mutluluk duyacaktır.
						</p>
						<Link to={"/iletisim"}>
							<button className="mt-4 flex items-center justify-center gap-2 rounded-md bg-white px-10 py-2 font-medium text-black shadow-sm transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="1.5em"
									viewBox="0 -960 960 960"
									width="1.5em"
									fill="currentColor">
									<path d="M162-120q-18 0-30-12t-12-30v-162q0-13 9-23.5t23-14.5l138-28q14-2 28.5 2.5T342-374l94 94q38-22 72-48.5t65-57.5q33-32 60.5-66.5T681-524l-97-98q-8-8-11-19t-1-27l26-140q2-13 13-22.5t25-9.5h162q18 0 30 12t12 30q0 125-54.5 247T631-329Q531-229 409-174.5T162-120Zm556-480q17-39 26-79t14-81h-88l-18 94 66 66ZM360-244l-66-66-94 20v88q41-3 81-14t79-28Zm358-356ZM360-244Z" />
								</svg>
								<span>İletişime Geçin</span>
							</button>
						</Link>
					</div>
				</div>
			</div>
			<Link to={"/evlerimiz"}>
				<div className="pt-10 pb-10 px-4 bg-gray-100">
					<button className="border border-gray-300 rounded-md pt-1 bg-white hover:bg-[#F59F0A] flex px-4 py-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="1.5em"
							viewBox="0 -960 960 960"
							width="1.5em"
							fill="currentColor">
							<path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
						</svg>
						<span className="pl-2">Tüm Projelere Dön</span>
					</button>
				</div>
			</Link>
			<Footer />
		</div>
	);
}
