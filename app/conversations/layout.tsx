import getConversations from "../actions/getConversations";
import getUsers from "../actions/getUsers";
import Sidebar from "../components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";
export default async function ConversationLayout({
	children,
}: {
	children: React.ReactNode;
}) {
    const convesations = await getConversations();
	const users = await getUsers();
	return (
		<Sidebar>
			<div className="h-full">{children}</div>
            <ConversationList
				users={users}
                initialItems={convesations}
            
            />
		</Sidebar>
	);
}
