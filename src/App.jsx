import { Outlet, Route, Routes } from "react-router";
import Navbar from "./Navbar";
import Anasayfa from "./pages/Anasayfa";
import { Evlerimiz } from "./pages";
import ProjeDetayi from "./pages/ProjeDetayi";
import Hakkimizda from "./pages/Hakkimizda";
import Iletisim from "./pages/Iletisim";

function Layout() {
	return (
		<div>
			<header>
				<Navbar />
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	);
}

function App() {
	const projects = [
		{
			id: 1,
			image: "/Building2.jpg",
			name: "Mavi Residence",
			location: "Kadıköy,İstanbul",
			description:
				"Modern mimarisi ve geniş yaşam alanları ile Kadıköy'ün en prestijli konut projesi.",
			value: "120 Daire",
			extendedDescription:
				"Mavi Residence, Kadıköy'ün en gözde lokasyonunda, modern mimari anlayışı ve üstün yaşam kalitesi sunan prestijli bir konut projesidir. 120 daireden oluşan projemiz, 1+1'den 4+1'e kadar farklı daire seçenekleri sunmaktadır. Akıllı ev sistemleri, enerji verimliliği ve çevre dostu tasarımı ile öne çıkan projemiz, sakinlerine konforlu ve sürdürülebilir bir yaşam vaat etmektedir.",
			birimSayisi: "120 Daire",
			teslimYili: "2023",
			toplamAlan: 25000,
			properties: [
				"Akıllı Ev Sistemleri",
				"7/24 Güvenlik",
				"Kapalı Otopark",
				"Fitness Merkezi",
				"Çocuk Oyun Alanı",
				"Yüzme Havuzu",
			],
		},
		{
			id: 2,
			image: "/Building3.jpg",
			name: "Yeşil Vadi Villaları",
			location: "Beykoz, İstanbul",
			description:
				"Doğayla iç içe, lüks yaşam standartları sunan villa projemiz.",
			value: "45 Villa",
			extendedDescription:
				"Yeşil Vadi Villaları, Beykoz'un eşsiz doğasında, lüks ve huzuru bir arada sunan özel bir villa projesidir. 45 bağımsız villadan oluşan projemiz, geniş bahçeler, özel havuzlar ve panoramik orman manzaraları ile sakinlerine benzersiz bir yaşam deneyimi sunmaktadır. Her villa, modern mimari ile doğal malzemelerin uyumunu yansıtan özenli bir tasarıma sahiptir.",
			birimSayisi: "45 Villa",
			teslimYili: "2024",
			toplamAlan: 50000,
			properties: [
				"Özel Havuz",
				"Akıllı Ev Sistemleri",
				"Orman Manzarası",
				"Geniş Bahçe",
				"Güvenlik",
				"Barbekü Alanı",
			],
		},
		{
			id: 3,
			image: "/Building4.jpg",
			name: "Modern Park Evleri",
			location: "Ataşehir, İstanbul",
			description:
				"Merkezi konumu ve sosyal alanları ile şehir yaşamının merkezinde.",
			value: "200 Daire",
			extendedDescription:
				"Modern Park Evleri, Ataşehir'in kalbinde, şehir yaşamının tüm avantajlarını sunan dinamik bir konut projesidir. 200 daireden oluşan projemiz, metro ve ana ulaşım arterlerine yakınlığı ile öne çıkmaktadır. Geniş sosyal alanları, yeşil peyzajı ve modern tasarımı ile sakinlerine aktif ve konforlu bir yaşam sunmaktadır.",
			birimSayisi: "200 Daire",
			teslimYili: "2025",
			toplamAlan: 35000,
			properties: [
				"Metro Yakınlığı",
				"Spor Salonu",
				"Yeşil Alanlar",
				"Alışveriş Merkezi",
				"Sosyal Tesisler",
				"Kapalı Otopark",
			],
		},
		{
			id: 4,
			image: "/Building1.jpg",
			name: "Sahil Konakları",
			location: "Bakırköy, İstanbul",
			description: "Deniz manzaralı, ferah ve aydınlık daireler.",
			value: "85 Daire",
			extendedDescription:
				"Sahil Konakları, Bakırköy sahilinde eşsiz deniz manzarasına sahip prestijli bir konut projesidir. 85 daireden oluşan projemiz, geniş balkonları ve ferah yaşam alanları ile sakinlerine huzurlu bir yaşam sunmaktadır. Sahile yürüme mesafesinde konumuyla, deniz havasının ve şehir yaşamının keyfini bir arada yaşamanızı sağlar.",
			birimSayisi: "85 Daire",
			teslimYili: "2022",
			toplamAlan: 18000,
			properties: [
				"Deniz Manzarası",
				"Geniş Balkonlar",
				"Güvenlik",
				"Sahile Yakın",
				"Kapalı Otopark",
				"Çocuk Oyun Alanı",
			],
		},
		{
			id: 5,
			image: "/Building3.jpg",
			name: "Bahçe Evleri",
			location: "Çekmeköy, İstanbul",
			description: "Geniş bahçeli, aile dostu villa projemiz.",
			value: "60 Villa",
			extendedDescription:
				"Bahçe Evleri, Çekmeköy'ün huzurlu atmosferinde, aileler için tasarlanmış özel bir villa projesidir. 60 villadan oluşan projemiz, geniş bahçeleri ve çocuk dostu tasarımı ile öne çıkmaktadır. Doğayla iç içe, güvenli bir ortamda kaliteli bir yaşam sunan projemiz, aile yaşamı için ideal bir seçenektir.",
			birimSayisi: "60 Villa",
			teslimYili: "2024",
			toplamAlan: 40000,
			properties: [
				"Geniş Bahçe",
				"Güvenlikli Site",
				"Barbekü Alanı",
				"Çocuk Oyun Alanı",
				"Otopark",
				"Yürüyüş Parkurları",
			],
		},
		{
			id: 6,
			image: "/Building4.jpg",
			name: "Merkez Residence",
			location: "Şişli, İstanbul",
			description:
				"Şehrin kalbinde, akıllı ev sistemleri ile donatılmış modern konutlar.",
			value: "150 Daire",
			extendedDescription:
				"Merkez Residence, Şişli'nin en prestijli lokasyonunda, iş ve sosyal yaşamın merkezinde yer alan modern bir konut projesidir. 150 daireden oluşan projemiz, son teknoloji akıllı ev sistemleri ve enerji verimliliği ile öne çıkmaktadır. Metro, alışveriş merkezleri ve iş merkezlerine yürüme mesafesinde konumuyla, dinamik şehir yaşamını sevenler için ideal bir seçenektir.",
			birimSayisi: "150 Daire",
			teslimYili: "2023",
			toplamAlan: 22000,
			properties: [
				"Akıllı Ev Sistemleri",
				"Concierge Hizmeti",
				"Toplantı Salonları",
				"Metro Yakınlığı",
				"ÇFitness Merkezi",
				"Teras Bahçe",
			],
		},
	];
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Anasayfa />} />
				<Route path="/evlerimiz" element={<Evlerimiz projects={projects} />} />
				<Route
					path="/evlerimiz/:id"
					element={<ProjeDetayi projects={projects} />}
				/>
				<Route path="/hakkimizda" element={<Hakkimizda />} />
				<Route path="/iletisim" element={<Iletisim />} />
			</Routes>
		</>
	);
}

export default App;
