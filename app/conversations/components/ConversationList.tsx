import { FullConversationType } from '@/types';
 import React from 'react'

interface ConversationListProps {
  initialItems : FullConversationType[];
}

const ConversationList: React.FC<ConversationListProps> = ({ initialItems}) => {
  return (
    <div>ConversationList</div>
  )
}

export default ConversationList