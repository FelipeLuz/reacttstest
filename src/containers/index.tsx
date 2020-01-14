import React, { Component } from "react";
import { Root } from "./root/index";
export const Base: React.FC = () => {
    return (
        <div>
            <Root />
        </div>
    )
    //exporting a component make it reusable and this is the beauty of react
};