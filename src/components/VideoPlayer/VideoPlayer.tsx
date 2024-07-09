import {FC} from "react";

import classes from "./VideoPlayer.module.styl";

interface IVideoPlayerProps {
    src: string;
}

export const VideoPlayer: FC<IVideoPlayerProps> = () => {
    return (
        <video className={classes["player"]}></video>
    );
};