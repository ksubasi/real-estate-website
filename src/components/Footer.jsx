import { Building2 } from "lucide-react";
import { Link } from "react-router-dom";

function Logo() {
	return (
		<Link to="/" className="flex items-center gap-2">
			<Building2 className="h-8 w-8 text-white" />
			<span className="font-bold text-xl">
				<span className="text-yellow-500">SG</span>
				<span className="text-white"> Yapı</span>
				<span className="text-yellow-500"> İnşaat</span>
			</span>
		</Link>
	);
}

export default function Footer() {
	return (
		<div className="bg-blue-700 p-10">
			<div className="grid grid-cols-4 gap-5 [&>div]:flex [&>div]:flex-col">
				<div className="text-white">
					<Logo />
					<p className="text-gray-300 pt-5">
						30 yılı aşkın tecrübemizle hayalinizdeki evleri inşa ediyoruz.
						Kalite ve güven bizim için öncelik.
					</p>
				</div>
				<div className="text-white gap-2">
					<h2 className="font-semibold text-lg">Hızlı Erişim</h2>
					<div className="flex flex-col gap-2 text-gray-300">
						<Link
							to={"/"}
							className="hover:text-white transition-colors duration-200">
							Ana Sayfa{" "}
						</Link>
						<Link
							to={"/evlerimiz"}
							className="hover:text-white transition-colors duration-200">
							Evlerimiz
						</Link>
						<Link
							to={"/hakkimizda"}
							className="hover:text-white transition-colors duration-200">
							Hakkımızda
						</Link>
						<Link
							to={"/iletisim"}
							className="hover:text-white transition-colors duration-200">
							İletişim
						</Link>
					</div>
				</div>
				<div className="gap-3">
					<h2 className="text-white font-semibold text-lg">İletişim</h2>
					<div className="flex gap-2 text-gray-300">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round">
							<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
						</svg>
						<span className="text-gray-300">+90 (212) 555 00 00</span>
					</div>
					<div className="flex gap-2 text-gray-300">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round">
							<rect width="20" height="16" x="2" y="4" rx="2"></rect>
							<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
						</svg>
						<span className="text-gray-300"> info@yapigrup.com</span>
					</div>
					<div className="flex gap-2 text-gray-300">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round">
							<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
							<circle cx="12" cy="10" r="3"></circle>
						</svg>
						<span>Levent, İstanbul, Türkiye</span>
					</div>
				</div>
				<div className="gap-3">
					<h2 className="font-semibold text-white text-lg">Çalışma Saatleri</h2>
					<div className="flex flex-col text-gray-300 pr-10">
						<div className="flex justify-between">
							<span>Pazartesi-Cuma</span>
							<span>09:00 - 18:00</span>
						</div>
						<div className="flex justify-between">
							<span>Cumartesi</span>
							<span>10:00 - 14:00</span>
						</div>
						<div className="flex justify-between">
							<span>Pazar</span>
							<span>Kapalı</span>
						</div>
					</div>
				</div>
			</div>
			<hr className="text-gray-400/30 my-6" />
			<div className="text-gray-300 text-center">
				<span>© 2024 SGYapıİnşaat. Tüm hakları saklıdır.</span>
			</div>
		</div>
	);
}
