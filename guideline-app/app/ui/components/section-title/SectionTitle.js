import React from 'react';
import PropTypes from 'prop-types';

import { Innholdstittel } from './../../../../../packages/node_modules/nav-frontend-typografi';
import './styles.less';

const SectionTitle = (props) => (
    <div className="sectionTitle">
        <Innholdstittel>{ props.title }</Innholdstittel>
    </div>
);

export default SectionTitle;
