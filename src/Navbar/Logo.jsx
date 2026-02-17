import { Building2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Logo() {
	return (
		<Link to="/" className="flex items-center gap-2">
			<Building2 className="h-8 w-8 text-blue-600" />
			<span className="font-bold text-xl">
				<span className="text-blue-600">SG</span>
				<span className="text-gray-900"> Yapı</span>
				<span className="text-gray-500"> İnşaat</span>
			</span>
		</Link>
	);
}
