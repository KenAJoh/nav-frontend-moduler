import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import { Undertittel } from 'NavFrontendModules/nav-frontend-typografi';
import { LenkepanelBase } from 'NavFrontendModules/nav-frontend-lenkepanel';

import SubRoutesWrapper from '../../../../utils/routing/subroutesWrapper.component';
import LeftNavigation from '../../../components/left-navigation/LeftNavigation';

class ComponentMainPage extends React.Component {

    renderComponentMainContent = () => (
        <main className="mainContent mainContent--grey" id="hovedinnhold">
            <nav className="catalog" aria-labelledby="left-navigation-title">
                {
                        this.props.routes.map((route) => (
                            <LenkepanelBase
                                key={route.title}
                                linkCreator={(props) => (
                                    <NavLink
                                        className="lenkepanel lenkepanel--border"
                                        to={props.href}
                                    >
                                        {props.children}
                                    </NavLink>
                                )}
                                href={route.path}
                            >
                                <Undertittel className="lenkepanel__heading">{route.title}</Undertittel>
                            </LenkepanelBase>
                        ))
                    }
            </nav>
        </main>
    );

    renderComponentSubRouteContent = () => (
        <main className="mainContent" id="hovedinnhold">
            <article>
                <SubRoutesWrapper routes={this.props.routes} />
            </article>
        </main>
    );

    render() {
        return (
            <React.Fragment>
                <LeftNavigation routes={this.props.routes} />
                {
                    (this.props.history.location.pathname !== '/components') ?
                    this.renderComponentSubRouteContent() :
                    this.renderComponentMainContent()
                }
            </React.Fragment>
        );
    }
}

export default withRouter(ComponentMainPage);
