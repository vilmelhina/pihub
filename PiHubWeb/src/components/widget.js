import React from "react";
import '../styles/widget.css'

export function Widget(props) {
    return <div className="widget" id={props.id}>
        {props.title && <h3>{props.title}</h3>}
        <div className="widget-content">
            {props.children}
        </div>
    </div>
}