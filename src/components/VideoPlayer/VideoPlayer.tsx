import {FC} from "react";

interface IVideoPlayerProps {
    src: string;
}

export const VideoPlayer: FC<IVideoPlayerProps> = () => {
    return (
        <video></video>
    );
};