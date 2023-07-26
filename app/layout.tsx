import ToasterContext from "./context/toasterContext";
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
				<ToasterContext />
				{children}
			</body>
		</html>
	);
}
