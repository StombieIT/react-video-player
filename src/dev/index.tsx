import { createRoot } from "react-dom/client";

import { VideoPlayer } from "@/components/VideoPlayer/VideoPlayer";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <div>
        <VideoPlayer src="test" />
    </div>,
);
