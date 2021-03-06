import React from 'react';
import classnames from 'classnames';

import Panel from 'NavFrontendModules/nav-frontend-paneler';
import { Select } from 'NavFrontendModules/nav-frontend-skjema';
import { Systemtittel, Undertittel } from 'NavFrontendModules/nav-frontend-typografi';

import Code from './../code/Code';
import PropTypeTable from './../prop-type-table/PropTypeTable';

import './styles.less';

/* eslint-disable no-underscore-dangle */

class ModuleBrowser extends React.Component {
    constructor(props) {
        super(props);

        this.modules = Object.keys(this.props.data.packageModules).sort().map((key) =>
            this.props.data.packageModules[key]
        );

        this.modules = this.props.data.packageModules;

        this.state = {
            activeModule: this.getInitialActiveModule()
        };
    }

    getInitialActiveModule = () => {
        const urlComponentName = window.location.pathname.split('/')[2];
        const componentIndex = Object.keys(this.modules).findIndex((key) => key.toLowerCase() === urlComponentName);
        const defaultIndex = Object.keys(this.modules).findIndex((key) => key === 'default');

        const index = Math.max(0, defaultIndex, componentIndex);

        return Object.keys(this.modules).find((module, i) => i === index);
    }

    setActiveModule = (e, moduleName) => {
        if (e) e.preventDefault();
        this.setState({ activeModule: moduleName });
    }

    generateImportStatement = (moduleName) => {
        const module = this.modules[moduleName];
        const format = (moduleName === 'default') ? module.__docgenInfo.displayName : `{ ${moduleName} }`;
        return `import ${format} from '${this.props.package.name}';`;
    }

    render() {
        return (
            <div className="module-browser">
                <Systemtittel id="moduler">Moduler</Systemtittel>
                <Panel border className="module-browser__wrapper">
                    <nav>
                        <ul className="nav-list">
                            {
                                Object.keys(this.modules).sort().map((moduleName) => {
                                    const module = this.modules[moduleName];
                                    if (!module.__docgenInfo) return null;
                                    return (
                                        <li key={module.__docgenInfo.displayName}>
                                            <a
                                                href={`#${module.__docgenInfo.displayName}`}
                                                className={classnames({
                                                    active: this.state.activeModule === moduleName
                                                })}
                                                onClick={(e) => this.setActiveModule(e, moduleName)}
                                            >
                                                { module.__docgenInfo.displayName }
                                                { moduleName === 'default' && <span>&nbsp;{`(${moduleName})`}</span> }
                                            </a>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </nav>
                    <div className="module-browser__content">
                        <Select
                            label="Velg modul"
                            onChange={(e) => this.setActiveModule(null, e.target.value)}
                            value={this.state.activeModule}
                        >
                            {
                                Object.keys(this.modules).sort().map((moduleName) => {
                                    const module = this.modules[moduleName];
                                    if (!module.__docgenInfo) return null;
                                    return (
                                        <option key={module.__docgenInfo.displayName} value={moduleName}>
                                            { module.__docgenInfo.displayName }
                                            { moduleName === 'default' && ` (${moduleName})` }
                                        </option>
                                    );
                                })
                            }
                        </Select>
                        <Undertittel className="first">Import</Undertittel>
                        <Code>{this.generateImportStatement(this.state.activeModule)}</Code>
                        <Undertittel>React props</Undertittel>
                        <PropTypeTable docgenInfo={this.modules[this.state.activeModule].__docgenInfo} />
                    </div>
                </Panel>
            </div>
        );
    }
}

export default ModuleBrowser;
