import React, { useState } from "react";

function Practice() {
  const [unreadMessages, setUnreadMessages] = useState([]);
  return (
    <div>
      {unreadMessages.length >= 0 &&  (
        <h1>You have {unreadMessages.length} unread messages</h1>
      )}
    </div>
  );
}

export default Practice;
