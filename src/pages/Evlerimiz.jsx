import { Link } from "react-router-dom";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Evlerimiz({ projects }) {
	return (
		<div className="animate-slideIn">
			<div className="bg-blue-700 text-white text-center py-20">
				<h1 className="font-semibold text-4xl">Evlerimiz</h1>
				<p className="text-2xl text-white/50 pt-10">
					Hayalinizdeki yaşam alanlarını keşfedin. Tamamlanmış ve devam eden
					projelerimizi inceleyerek size en uygun evi bulun.
				</p>
			</div>
			<div className="grid grid-cols-3 gap-10 px-10 pt-10 pb-20">
				{projects.map((project) => (
					<Card
						image={project.image}
						name={project.name}
						description={project.description}
						location={project.location}
						value={project.value}
						key={project.id}
						id={project.id}
					/>
				))}
			</div>

			<div className="bg-gray-200 text-center pt-10 pb-10 px-4">
				<h2 className="text-black font-semibold text-2xl">
					Size Uygun Evi Bulmak İçin
				</h2>

				<p className="text-gray-500 mt-2">
					Uzman ekibimiz size yardımcı olmaktan mutluluk duyacaktır. Hemen
					iletişime geçin.
				</p>
				<Link to={"/iletisim"}>
					<button className="bg-blue-600 text-white rounded-md px-4 py-3 mt-6 inline-flex items-center gap-2 hover:bg-blue-700 transition">
						İletişime Geçin
						<svg
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 -960 960 960"
							className="w-6 h-6"
							fill="currentColor">
							<path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
						</svg>
					</button>
				</Link>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}
