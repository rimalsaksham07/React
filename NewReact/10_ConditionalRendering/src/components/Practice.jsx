import React, { useState } from "react";

function Practice() {
  const [unreadMessages, setUnreadMessages] = useState(["a", "b"]);

  let messageText = "";
  if (unreadMessages.length === 0) {
    messageText = "You're all caught up";
  } else {
    messageText = `You have ${unreadMessages.length} message${
      unreadMessages.length > 1 ? "s" : ""
    }`;
  }

  return (
    <div>
      <h1>{messageText}</h1>
    </div>
  );
}

export default Practice;
