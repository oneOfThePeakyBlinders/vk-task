import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {AdaptivityProvider, ConfigProvider} from "@vkontakte/vkui";
import bridge from '@vkontakte/vk-bridge';
import React from "react";

bridge.send("VKWebAppInit");

ReactDOM.createRoot(document.getElementById("root")!).render(
    <ConfigProvider>
        <AdaptivityProvider>
            <App />
        </AdaptivityProvider>
    </ConfigProvider>,
);
