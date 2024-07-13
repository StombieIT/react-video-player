import type { FC } from "react";
import { useLayoutEffect, useRef } from "react";

import type { NumberedValue } from "@/models";

interface IPlayerProps {
    src: string;
    width: NumberedValue;
    height: NumberedValue;
}

export const Player: FC<IPlayerProps> = ({ src }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useLayoutEffect(() => {

    },[]);

    return (
        <div>
            <video src={src} ref={videoRef}></video>
        </div>
    );
};
