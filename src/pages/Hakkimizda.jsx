import Footer from "../components/Footer";

export default function Hakkimizda() {
	return (
		<div className="animate-slideIn">
			<div className="bg-blue-700 text-white text-center py-20">
				<h1 className="font-semibold text-4xl">Hakkımızda</h1>
				<p className="text-2xl text-white/50 pt-10">
					1994'ten bu yana güven ve kaliteyi bir araya getirerek ailelerin
					hayallerindeki evleri inşa ediyoruz.
				</p>
			</div>
			<div className="p-10 grid grid-cols-2 gap-3">
				<div>
					<h2 className="text-black py-5 font-semibold text-3xl">Hikayemiz</h2>
					<p className="text-gray-400 text-lg mt-7">
						SG Yapı İnşaat, 1994 yılında küçük bir müteahhitlik firması olarak
						yola çıktı. Kurucumuz Ahmet Yılmaz'ın "Kalite ve güvenin adresi
						olmak" vizyonuyla başlayan yolculuğumuz, bugün 150'den fazla
						tamamlanmış proje ve 5,000'den fazla mutlu aileye ulaştı.
					</p>
					<p className="text-gray-400 text-lg mt-5">
						Yıllar içinde büyüdük,ancak temel değerlerimizden hiç ödün vermedik.
						Her projemizde aynı titizlikle çalışarak müşterilerimize söz
						verdiğimiz kaliteyi sunuyoruz.{" "}
					</p>
					<p className="text-gray-400 text-lg mt-5">
						Bugün İstanbul'un dört bir yanında modern konut projeleri, lüks
						villalar ve karma kullanımlı projeler geliştirmeye devam ediyoruz.
					</p>
				</div>
				<div className="rounded-lg overflow-hidden shadow-2xl">
					<img src="/Building1.jpg" />
				</div>
			</div>
			<div className="bg-gray-200/50 pt-30 shadow-2xl">
				<div className="mx-auto max-w-6xl px-6 pb-30">
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
						<div className="rounded-xl bg-white p-6 shadow-xl">
							<div className="flex items-center gap-4 text-blue-600">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="2em"
									height="2em"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round">
									<circle cx="12" cy="12" r="10"></circle>
									<circle cx="12" cy="12" r="6"></circle>
									<circle cx="12" cy="12" r="2"></circle>
								</svg>

								<h2 className="text-3xl font-semibold text-black">
									Misyonumuz
								</h2>
							</div>

							<p className="mt-3 text-gray-500">
								Ailelere güvenli, konforlu ve estetik yaşam alanları sunarak
								hayallerindeki evlere kavuşmalarını sağlamak. Her projemizde
								kalite standartlarını en üst düzeyde tutarak sektöre öncülük
								etmek.
							</p>
						</div>

						<div className="rounded-xl bg-white p-6 shadow-xl">
							<div className="flex items-center gap-4 text-blue-600">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="2em"
									height="2em"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round">
									<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
									<circle cx="12" cy="12" r="3"></circle>
								</svg>

								<h2 className="text-3xl font-semibold text-black">
									Vizyonumuz
								</h2>
							</div>

							<p className="mt-3 text-gray-500">
								Türkiye'nin en güvenilir ve yenilikçi inşaat şirketi olmak.
								Sürdürülebilir ve çevre dostu yapılar inşa ederek geleceğe değer
								katmak ve sektörde öncü konumda olmayı sürdürmek.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-white p-20">
				<h2 className="text-black text-3xl text-center font-semibold">
					Değerlerimiz
				</h2>
				<p className="text-center text-gray-400 text-md mt-4">
					Her projemizde bizi yönlendiren temel değerlerimiz
				</p>
				<div className="flex gap-9 mt-7">
					<div className="group w-full rounded-xl bg-white p-6 shadow-md hover:shadow-4xl">
						<div className="mb-3 flex items-center justify-center  p-3 text-blue-700">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="2em"
								height="2em"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round">
								<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
							</svg>
						</div>

						<h2 className="text-center text-xl font-bold text-black">
							Güvenilirlik
						</h2>

						<p className="mt-2 text-center text-gray-400">
							30 yılı aşkın tecrübemizle verdiğimiz sözlerin arkasında
							duruyoruz.
						</p>
					</div>
					<div className="group w-full max-w-sm rounded-xl bg-white p-6 shadow-xl">
						<div className="mb-3 flex items-center justify-center p-3 text-blue-700">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="2em"
								height="2em"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round">
								<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
								<circle cx="12" cy="8" r="6"></circle>
							</svg>
						</div>

						<h2 className="text-center text-xl font-bold text-black">Kalite</h2>

						<p className="mt-2 text-center text-gray-400">
							En kaliteli malzemeler ve işçilikle uzun ömürlü yapılar inşa
							ediyoruz.
						</p>
					</div>
					<div className="group w-full max-w-sm rounded-xl bg-white p-6 shadow-xl">
						<div className="mb-3 flex items-center justify-center p-3 text-blue-700">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="2em"
								height="2em"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round">
								<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
							</svg>
						</div>

						<h2 className="text-center text-xl font-bold text-black">
							Müşteri Odaklılık
						</h2>

						<p className="mt-2 text-center text-gray-400">
							Müşterilerimizin memnuniyeti bizim için her şeyden önemli.
						</p>
					</div>
					<div className="group w-full max-w-sm rounded-xl bg-white p-6 shadow-xl">
						<div className="mb-3 flex items-center justify-center p-3 text-blue-700">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="2em"
								height="2em"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round">
								<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
								<circle cx="9" cy="7" r="4"></circle>
								<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
								<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
							</svg>
						</div>

						<h2 className="text-center text-xl font-bold text-black">
							Takım Çalışması
						</h2>

						<p className="mt-2 text-center text-gray-400">
							Deneyimli ekibimizle birlikte başarıya ulaşıyoruz.
						</p>
					</div>
				</div>
			</div>
			<div className="pt-30 bg-blue-700">
				<h2 className="text-center text-white text-3xl font-semibold">
					Kilometre Taşlarımız
				</h2>
				<div className="flex flex-col gap-6 max-w-2xl mx-auto px-6 mt-6 pb-20 text-xl">
					<div className="flex items-center gap-4 ">
						<span className="w-16 font-semibold text-orange-400">1994</span>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 -960 960 960"
							className="h-8 w-8 text-orange-400"
							fill="currentColor">
							<path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
						</svg>

						<span className="flex-1 text-gray-400/70">
							Şirketimizin kuruluşu
						</span>
					</div>

					<div className="flex items-center gap-4">
						<span className="w-16 font-semibold text-orange-400">2000</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 -960 960 960"
							className="h-8 w-8 text-orange-400"
							fill="currentColor">
							<path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
						</svg>
						<span className="flex-1 text-gray-400/70">
							İlk büyük konut projemiz: 500 daire
						</span>
					</div>

					<div className="flex items-center gap-4">
						<span className="w-16 font-semibold text-orange-400">2008</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 -960 960 960"
							className="h-8 w-8 text-orange-400"
							fill="currentColor">
							<path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
						</svg>
						<span className="flex-1 text-gray-400/70">
							ISO 9001 kalite belgesi alındı
						</span>
					</div>
					<div className="flex items-center gap-4">
						<span className="w-16 font-semibold text-orange-400">2015</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 -960 960 960"
							className="h-8 w-8 text-orange-400"
							fill="currentColor">
							<path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
						</svg>
						<span className="flex-1 text-gray-400/70">
							100. proje tamamlandı
						</span>
					</div>
					<div className="flex items-center gap-4">
						<span className="w-16 font-semibold text-orange-400">2020</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 -960 960 960"
							className="h-8 w-8 text-orange-400"
							fill="currentColor">
							<path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
						</svg>
						<span className="flex-1 text-gray-400/70">
							Yeşil bina sertifikası
						</span>
					</div>
					<div className="flex items-center gap-4">
						<span className="w-16 font-semibold text-orange-400">2024</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 -960 960 960"
							className="h-8 w-8 text-orange-400"
							fill="currentColor">
							<path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
						</svg>
						<span className="flex-1 text-gray-400/70">
							150+ proje ve 5,000+ mutlu aile
						</span>
					</div>
				</div>
			</div>

			<div className="p-10 grid grid-cols-2 gap-5">
				<div className="rounded-lg overflow-hidden shadow-2xl">
					<img src="/Building2.jpg" />
				</div>
				<div>
					<h2 className="text-black mt-6 font-semibold text-3xl">
						Uzman Ekibimiz
					</h2>
					<p className="text-gray-400 text-lg mt-7">
						200'den fazla deneyimli mühendis, mimar ve uzman personelimiz ile
						projelerinizi hayata geçiriyoruz. Ekibimiz, sektördeki en güncel
						teknolojileri ve standartları takip ederek size en iyi hizmeti
						sunar.
					</p>
					<div className="grid grid-cols-2 grid-rows-2 mt-10 gap-10">
						<div>
							<p className="text-blue-700 text-2xl font-semibold">200+</p>
							<span className="text-gray-400">Çalışan</span>
						</div>
						<div>
							<p className="text-blue-700 text-2xl font-semibold">50+</p>
							<span className="text-gray-400">Mühendis</span>
						</div>
						<div>
							<p className="text-blue-700 text-2xl font-semibold">30+</p>
							<span className="text-gray-400">Mimar</span>
						</div>
						<div>
							<p className="text-blue-700 text-2xl font-semibold">15+</p>
							<span className="text-gray-400">Şantiye</span>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
