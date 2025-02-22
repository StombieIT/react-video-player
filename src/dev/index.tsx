import { createRoot } from "react-dom/client";

import { Player } from "@/components/Player/Player";

import "./resets.styl";
import videoTemplateSrc from "./assets/video-template.mp4";

import classes from "./styles.module.styl";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <main className={classes["playground-wrapper"]}>
        <Player src={videoTemplateSrc} width="400" height="500" />
    </main>,
);
