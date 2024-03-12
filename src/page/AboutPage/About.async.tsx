import {lazy} from "react";

export const AboutAsync = lazy(()=> {
    // @ts-ignore
    return import('./About');
})