/*
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Copyright 2023 Xyna GmbH, Germany
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 */
import { I18nTranslation } from '@zeta/i18n';


export const xtf_error_code_translations_de_DE: I18nTranslation[] = [

    {
        key: 'EC-xfm.xtf.unspec.00',
        value: 'CSV ungültig'
    },

    {
        key: 'EC-xfm.xtf.unspec.01',
        value: 'Diese Operation wird aktuell nicht unterstützt.'
    },

    {
        key: 'EC-xfm.xtf.tproj.01',
        value: 'Testprojekt nicht gefunden.'
    },

    {
        key: 'EC-xfm.xtf.tproj.02',
        value: 'Testprojekt nicht gefunden.'
    },

    {
        key: 'EC-xfm.xtf.tproj.03',
        value: 'Ein Testprojekt mit dem Namen \'{0}\' und der Version \'{1}\' existiert bereits.'
    },

    {
        key: 'EC-xfm.xtf.tproj.04',
        value: 'Das Testprojekt hat keinen Namen.'
    },

    {
        key: 'EC-xfm.xtf.tproj.05',
        value: 'Die Eingabe als Name des Testprojekts ist nicht gültig.'
    },

    {
        key: 'EC-xfm.xtf.tproj.06',
        value: 'Die Eingabe als Version des Testprojekts ist nicht gültig.'
    },

    {
        key: 'EC-xfm.xtf.featobj.01',
        value: 'Test Case Objekt nicht gefunden'
    },

    {
        key: 'EC-xfm.xtf.featobj.02',
        value: 'Das Feature {1} wird von Testfall {0} referenziert (Test-Projekt {2}).'
    },

    {
        key: 'EC-xfm.xtf.featobj.03',
        value: 'Bitte löschen Sie zunächst alle Testfälle, in denen das Test Objekt verwendet wird!'
    },

    {
        key: 'EC-xfm.xtf.featobj.04',
        value: 'Test Objekt Typ nicht gefunden'
    },

    {
        key: 'EC-xfm.xtf.counter.01',
        value: 'Der Counter-Name \'{0}\' ist innerhalb des Testprojekts nicht eindeutig.'
    },

    {
        key: 'EC-xfm.xtf.counter.02',
        value: 'Counter mit Id {0} nicht gefunden'
    },

    {
        key: 'EC-xfm.xtf.counter.03',
        value: 'Der Counter {0} ist nicht konfiguriert.'
    },

    {
        key: 'EC-xfm.xtf.tcase.01',
        value: 'Test Case Name muss eindeutig sein.'
    },

    {
        key: 'EC-xfm.xtf.tcase.02',
        value: 'Test Case Instanz nicht gefunden'
    },

    {
        key: 'EC-xfm.xtf.tcase.03',
        value: 'Es wurde kein Testfall mit der ID {0} gefunden'
    },

    {
        key: 'EC-xfm.xtf.tcase.04',
        value: 'Testfallname existiert bereits.'
    },

    // there is no modelled Exception type in the XTF Infrastructure app
    {
        key: 'EC-xfm.xtf.tcase.05',
        // value: 'There is no Input Generator set in the Order Input Source details.'
        value: 'Kein Input Generator in den Order Input Source-Details gesetzt.'
    },

    // GUI - Fallback
    {
        key: 'Unknown error',
        // value: 'Unknown error'
        value: 'Unerwarteter Fehler'
    },

    // GUI - Fallback according to XTF-4
    {
        key: 'Please make sure that there is an "Input Generator" set in the Order Input Source details.',
        // value: 'Please make sure that there is an "Input Generator" set in the Order Input Source details.'
        value: 'Bitte überprüfen Sie ob ein "Input Generator" in den Order Input Source-Details gesetzt ist.'
    },

    {
        key: 'EC-xfm.xtf.tcchain.01',
        value: 'Test Case Chain nicht gefunden.'
    },

    {
        key: 'EC-xfm.xtf.tcchain.02',
        value: 'Name der Testfallkette existiert bereits.'
    },

    {
        key: 'EC-xfm.xtf.tdata.01',
        value: 'Es sind keine passenden Test-Daten vom Typ \'{0}\' verfügbar.'
    },

    {
        key: 'EC-xfm.xtf.tdata.02',
        value: 'Die Test-Daten vom Typ \'{0}\' wurden bereits verwendet. Bitte generieren Sie neue Inputs.'
    },

    {
        key: 'EC-xfm.xtf.tdata.03',
        value: 'Testdaten fuer den Typen {0} nicht gefunden'
    },

    {
        key: 'EC-xfm.xtf.tdata.04',
        value: 'Bitte spezifizieren Sie den XMOM-Typen, bevor Sie den Export durchführen.'
    },

    {
        key: 'EC-xfm.xtf.tdata.05',
        value: 'Test Data Type hat nicht genügend Spalten.'
    },

    {
        key: 'EC-xfm.xtf.tdata.06',
        value: 'Data Type-Klasse nicht gefunden'
    },

    {
        key: 'EC-xfm.xtf.tdata.07',
        value: 'Das Test-Daten-Objekt mit ID {0} ist in diesem Test-Projekt nicht vorhanden.'
    },

    {
        key: 'EC-xfm.xtf.sut.01',
        value: 'System Under Test existiert bereits'
    },

    {
        key: 'EC-xfm.xtf.sut.02',
        value: 'Das Feature {0} ist nicht Teil eines System Under Test.'
    },

    {
        key: 'EC-xfm.xtf.sut.03',
        value: 'SUT Instance Parameter nicht gefunden: {0}'
    },

    {
        key: 'EC-xfm.xtf.sut.04',
        value: 'Es ist keine Zielsystem-Instanz konfiguriert.'
    },

    {
        key: 'EC-xfm.xtf.sut.05',
        value: 'System Under Test nicht gefunden'
    },

    {
        key: 'EC-xfm.xtf.sut.06',
        value: 'Fehler beim Durchführen von Zielsystem-Instanz spezifischen Parametern.'
    },

    {
        key: 'EC-xfm.xtf.sut.07',
        value: 'System Under Test nicht gefunden'
    },




    // XYNA ERROR CODES

    {
        key: 'XYNA-01159',
        value: 'Input konnte nicht generiert werden. In den Ausführungsdetails sollte die Auftragseingabequelle angepasst werden.'
    }

];
