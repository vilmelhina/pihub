import React from "react";
import {Suspense} from "react";
import '../styles/widget.css'

export function Widget(props) {
    return <div className="widget" id={props.id}>
        <Suspense fallback={<div>Loading...</div>}>
            {props.title && <h3>{props.title}</h3>}
            <div className="widget-content">
                {props.children}
            </div>
        </Suspense>
    </div>
}