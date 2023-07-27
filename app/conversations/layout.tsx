import getConversations from "../actions/getConversations";
import Sidebar from "../components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";
export default async function ConversationLayout({
	children,
}: {
	children: React.ReactNode;
}) {
    const convesations = await getConversations();
	return (
		<Sidebar>
			<div className="h-full">{children}</div>
            <ConversationList
                initialItems={convesations}
            
            />
		</Sidebar>
	);
}
