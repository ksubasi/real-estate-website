import { Link } from "react-router";

export default function Anasayfa() {
	return (
		<div>
			<div className="relative bg-[url('/Building1.jpg')] bg-no-repeat bg-cover bg-center">
				<div className="absolute top-0 left-0 bg-[hsl(217_91%_20%/0.75)] h-full w-full"></div>
				<div className="relative">
					<div className="py-40 px-6 font-semibold animate-slideIn">
						<h1 className="text-7xl text-white">Hayalinizdeki Evi</h1>
						<h2 className="text-yellow-400 text-7xl text-white">
							İnşa Ediyoruz
						</h2>
						<div className="py-10 text-xl">
							<p className="text-white font-semibold ">
								30 yılı aşkın tecrübemizle kaliteli, güvenilir ve modern yaşam
								alanları sunuyoruz.
							</p>
							<p className="text-white font-semibold">
								Aileniz için en iyisini hak ediyorsunuz.
							</p>
						</div>
						<div className="flex gap-10">
							<Link to={"/evlerimiz"}>
								<button className="border-amber-200 bg-yellow-500 rounded-md px-4 py-3 flex hover:bg-yellow-500/80 transition-colors duration-200 cursor-pointer">
									Projelerimizi inceleyin
									<svg
										xmlns="http://www.w3.org/2000/svg"
										height="24px"
										viewBox="0 -960 960 960"
										width="24px"
										fill="#1f1f1f">
										<path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
									</svg>
								</button>
							</Link>
							<Link to={"/iletisim"}>
								<button className="flex border-black rounded-md px-4 py-3 bg-white hover:bg-gray-200/80 transition-colors duration-200 cursor-pointer">
									Bize Ulaşın
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="flex gap-20 items-center bg-blue-700 justify-center">
				<div className="py-10 flex flex-col items-center text-center h-full">
					<div className="text-xl px-5">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="h-[3em] w-[3em] text-yellow-500">
							<path d="M12 10h.01"></path>
							<path d="M12 14h.01"></path>
							<path d="M12 6h.01"></path>
							<path d="M16 10h.01"></path>
							<path d="M16 14h.01"></path>
							<path d="M16 6h.01"></path>
							<path d="M8 10h.01"></path>
							<path d="M8 14h.01"></path>
							<path d="M8 6h.01"></path>
							<path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path>
							<rect x="4" y="2" width="16" height="20" rx="2"></rect>
						</svg>
					</div>
					<div className="text-xl px-5 ">
						<p className="text-white font-semibold px-2 text-5xl py-2">150+</p>
						<p className="text-gray-400/80">Tamamlanan Proje</p>
					</div>
				</div>
				<div className="py-10 flex flex-col items-center text-center h-full">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="h-[3em] w-[3em] text-yellow-500">
						<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
						<circle cx="9" cy="7" r="4"></circle>
						<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
						<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
					</svg>
					<div className="text-xl px-5 ">
						<p className="text-white font-semibold px-2 text-5xl py-2">
							5,000+
						</p>
						<p className="text-gray-400/80">Mutlu Aile</p>
					</div>
				</div>
				<div className="py-10 flex flex-col items-center text-center h-full">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="h-[3em] w-[3em] text-yellow-500">
						<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
						<circle cx="12" cy="8" r="6"></circle>
					</svg>
					<div className="text-xl px-5 ">
						<p className="text-white font-semibold px-2 text-5xl py-2">30+</p>
						<p className="text-gray-400/80">Yıllık Tecrübe</p>
					</div>
				</div>
				<div className="py-10 flex flex-col items-center text-center h-full">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="h-[3em] w-[3em] text-yellow-500">
						<circle cx="12" cy="12" r="10"></circle>
						<polyline points="12 6 12 12 16 14"></polyline>
					</svg>
					<div className="text-xl px-5 ">
						<p className="text-white font-semibold px-2 text-5xl py-2">100%</p>
						<p className="text-gray-400/80">Zamanında Teslim</p>
					</div>
				</div>
			</div>
		</div>
	);
}
