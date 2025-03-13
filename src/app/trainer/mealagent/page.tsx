"use client";

import React, { useEffect } from "react";

declare global {
  interface Window {
    voiceflow?: {
      chat: {
        load: (config: {
          verify: { projectID: string };
          url: string;
          versionID: string;
          voice: { url: string };
          render: { mode: string; target: HTMLElement | null };
        }) => void;
      };
    };
  }
}

function MealAgent() {
  useEffect(() => {
    if (!document.getElementById("voiceflow-script")) {
      const script = document.createElement("script");
      script.id = "voiceflow-script";
      script.type = "text/javascript";
      script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
      script.async = true;

      script.onload = () => {
        const chatContainer = document.getElementById("voiceflow-chat-container");
        if (window.voiceflow && chatContainer) {
          window.voiceflow.chat.load({
            verify: { projectID: "67d2524e904c545408e5e55e" },
            url: "https://general-runtime.voiceflow.com",
            versionID: "production",
            voice: {
              url: "https://runtime-api.voiceflow.com",
            },
            render: {
              mode: "embedded",
              target: chatContainer,
            },
          });
        }
      };

      document.body.appendChild(script);
    }
  }, []);

  return (
    <div style={{height:"80vh"}}>
      <h2>Meal Agent Chat</h2>
      <div id="voiceflow-chat-container" style={{ width: "100%", height: "500px" }} />
    </div>
  );
}

export default MealAgent;