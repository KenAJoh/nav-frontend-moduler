import React from 'react';
import { SuccessIcon, ErrorIcon } from '../../../assets/images/svg';

import './styles.less';

export const DoDont = (props) => (
    <div className="dodont">
        {props.children}
    </div>
);

export const Do = (props) => (
    <div className="dodont__do">
        {props.children}
        <div className="dodont__label">
            <SuccessIcon /> Gjør dette
        </div>
    </div>
);

export const Dont = (props) => (
    <div className="dodont__dont">
        {props.children}
        <div className="dodont__label">
            <ErrorIcon /> Ikke gjør dette
        </div>
    </div>
);
