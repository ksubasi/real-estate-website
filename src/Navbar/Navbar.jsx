import { NavLink } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
	return (
		<nav className="sticky top-0 left-0 right-0 z-50 bg-white shadow-sm">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					<Logo />

					<div className="flex items-center gap-6">
						<NavLink to="/" end>
							{({ isActive }) => (
								<p
									className={`${isActive ? "text-blue-600" : "text-gray-600"} hover:text-blue-600`}>
									Ana Sayfa
								</p>
							)}
						</NavLink>
						<NavLink to="/evlerimiz">
							{({ isActive }) => (
								<p
									className={`${isActive ? "text-blue-600" : "text-gray-600"} hover:text-blue-600`}>
									Evlerimiz
								</p>
							)}
						</NavLink>
						<NavLink to="/hakkimizda">
							{({ isActive }) => (
								<p
									className={`${isActive ? "text-blue-600" : "text-gray-600"} hover:text-blue-600`}>
									Hakkımızda
								</p>
							)}
						</NavLink>
						<NavLink to="/iletisim">
							{({ isActive }) => (
								<p
									className={`${isActive ? "text-blue-600" : "text-gray-600"} hover:text-blue-600`}>
									İletişim
								</p>
							)}
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
	);
}
