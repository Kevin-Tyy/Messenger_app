import ActiveStatus from "./components/ActiveStatus";
import AuthContext from "./context/AuthContext";
import ToasterContext from "./context/ToasterContext";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Messenger",
	description: "Messenger application",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<AuthContext>
					<ToasterContext />
					<ActiveStatus/>
					{children}
				</AuthContext>
			</body>
		</html>
	);
}
