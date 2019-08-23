import React, { Component } from "react";
import { AlertStripeSuksess } from "NavFrontendModules/nav-frontend-alertstriper";
import { Hovedknapp, Fareknapp } from "NavFrontendModules/nav-frontend-knapper";
import Chevron from "NavFrontendModules/nav-frontend-chevron";
import Internheader from "NavFrontendModules/nav-frontend-internheader";

import "./styles.less";

/*
 * Her er komponenten som benyttes til utvikling av eksisterende og nye moduler til nav-frontend.
 * Appen blir kjørt opp fra npm start-scriptet i package.json på rot, og tar utgangspunkt i
 * webpack-configen som ligger under /development/conf/webpack.config.js.
 *
 * Det er i utgangspunktet ikke ønskelig å sjekke inn endringer som gjøres her til repository, ettersom det er tenkt
 * som et rent utviklingsmiljø og ikke trenger å versjonskontrolleres. Om det er nødvendig å endre på ting her,
 * forklar hvorfor i en PR.
 *
 * Enjoy!
 */

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
    render() {
        return (
            <div>
                <Internheader
                    produkttittel={"NAV Kontantstøtte"}
                    saksbehandlerNavn={"H. Hansen"}
                    saksbehandlerEnhet={"NAV Sagene"}
                    saksbehandlerIdent={"X010101"}
                    saksbehandlerTittel={"Veileder"}
                    brukLoggUtModal={true}
                    onLoggUtClick={() => console.log("Logg ut")}
                    onProdukttittelClick={() => console.log("Produkt tittel")}
                />

                <br />
                <AlertStripeSuksess>Heisann Hoppsann!</AlertStripeSuksess>
                <Hovedknapp>Hovedknapp</Hovedknapp>
                <Fareknapp>Fareknapp</Fareknapp>
                <Chevron />
            </div>
        );
    }
}
