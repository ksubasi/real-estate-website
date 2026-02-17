import Footer from "../components/Footer";

export default function Iletisim() {
	return (
		<div className="animate-slideIn">
			<div className="bg-blue-700 text-white text-center py-20">
				<h1 className="font-semibold text-4xl">İletişim</h1>
				<p className="text-2xl text-white/50 pt-10 ">
					Sorularınız, önerileriniz veya projelerimiz hakkında bilgi almak için
					bizimle iletişime geçin. Size yardımcı olmaktan mutluluk duyarız.
				</p>
			</div>
			<div className="flex gap-9 mt-10 pb-10">
				<div className="group w-full rounded-xl bg-white p-6 shadow-md hover:shadow-4xl">
					<div className="mb-3 flex items-center justify-center  p-3 text-blue-700">
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
							<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
						</svg>
					</div>

					<h2 className="text-center text-xl font-bold text-black">Telefon</h2>

					<p className="mt-2 text-center text-gray-400">+90 (212) 555 00 00</p>
					<p className="mt-2 text-center text-gray-400">+90 (212) 555 00 01</p>
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
							<rect width="20" height="16" x="2" y="4" rx="2"></rect>
							<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
						</svg>
					</div>

					<h2 className="text-center text-xl font-bold text-black">E-posta</h2>

					<p className="mt-2 text-center text-gray-400"> info@sginsaat.com</p>
					<p className="mt-2 text-center text-gray-400">satis@sginsaat.com</p>
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
							<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
							<circle cx="12" cy="10" r="3"></circle>
						</svg>
					</div>

					<h2 className="text-center text-xl font-bold text-black">Adres</h2>

					<p className="mt-2 text-center text-gray-400">
						Levent Mahallesi, İş Kuleleri Kule 1, Kat 15 - Beşiktaş/İstanbul
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
							<circle cx="12" cy="12" r="10"></circle>
							<polyline points="12 6 12 12 16 14"></polyline>
						</svg>
					</div>

					<h2 className="text-center text-xl font-bold text-black">
						Çalışma Saatleri
					</h2>

					<p className="mt-2 text-center text-gray-400">
						Pazartesi-Cuma: 09.000-18.00
					</p>
					<p className="mt-2 text-center text-gray-400">
						Cumartesi: 10.00-14.00
					</p>
				</div>
			</div>
			<div className="mt-10 bg-gray-300 rounded-xl p-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="bg-white rounded-lg shadow-lg p-8">
						<h2 className="text-2xl font-semibold text-black mb-6">
							Bize Yazın
						</h2>

						<form className="flex flex-col gap-5">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div className="flex flex-col gap-1">
									<label
										htmlFor="name"
										className="text-lg font-semibold text-black">
										Ad Soyad
									</label>
									<input
										id="name"
										type="text"
										placeholder="Ad Soyad"
										className="border border-gray-300 bg-gray-200 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-gray-400/50"
									/>
								</div>

								<div className="flex flex-col gap-1">
									<label
										htmlFor="email"
										className="text-lg font-semibold text-black">
										E-mail
									</label>
									<input
										id="email"
										type="email"
										placeholder="E-posta"
										className="border border-gray-300 bg-gray-200 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-gray-400/50"
									/>
								</div>

								<div className="flex flex-col gap-1">
									<label
										htmlFor="telefon"
										className="text-lg font-semibold text-black">
										Telefon
									</label>
									<input
										id="telefon"
										type="tel"
										placeholder="+90 (5xx) xxx xx xx"
										className="border border-gray-300 bg-gray-200 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-gray-400/50"
									/>
								</div>

								<div className="flex flex-col gap-1">
									<label
										htmlFor="konu"
										className="text-lg font-semibold text-black">
										Konu
									</label>
									<input
										id="konu"
										type="text"
										placeholder="Mesaj konusu"
										className="border border-gray-300 bg-gray-200 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-gray-400/50"
									/>
								</div>
							</div>

							<div className="flex flex-col gap-1">
								<label
									htmlFor="mesaj"
									className="text-lg font-semibold text-black">
									Mesajınız
								</label>
								<textarea
									id="mesaj"
									rows={5}
									placeholder="Mesajınızı buraya yazın..."
									className="border border-gray-300 bg-gray-200 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-gray-400/50 resize-none"
								/>
							</div>

							<button
								type="submit"
								className="mt-2 bg-blue-700 text-white py-3 rounded-md hover:bg-blue-800 transition">
								Gönder
							</button>
						</form>
					</div>
					<div className="w-full rounded-lg overflow-hidden shadow-lg h-full">
						<iframe
							title="Google Maps"
							src="https://www.google.com/maps?q=Levent,%20&İstanbul&z=15&output=embed"
							className="w-full h-full border-0"
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
