import React from "react";
import {Suspense} from "react";
import '../styles/widget.css'
import {ErrorBoundary} from "react-error-boundary";

export function Widget(props) {
    return <div className="widget" id={props.id}>
        <ErrorBoundary fallback={<div>Something went wrong :(</div>}>
            <Suspense fallback={<div>Loading...</div>}>
                {props.title && <h3>{props.title}</h3>}
                <div className="widget-content">
                    {props.children}
                </div>
            </Suspense>
        </ErrorBoundary>
    </div>
}