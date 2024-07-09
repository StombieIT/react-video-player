import {FC} from "react";

import classes from "./ButtonDummy.module.styl";

export const ButtonDummy: FC = () => {
    return (
        <button className={classes["btn"]}>
            test
        </button>
    );
}