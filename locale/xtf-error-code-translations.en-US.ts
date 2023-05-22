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


export const xtf_error_code_translations_en_US: I18nTranslation[] = [

    {
        key: 'EC-xfm.xtf.unspec.00',
        value: 'CSV not valid'
    },

    {
        key: 'EC-xfm.xtf.unspec.01',
        value: 'This operation is currently not supported.'
    },

    {
        key: 'EC-xfm.xtf.tproj.01',
        value: 'Test Project not found'
    },

    {
        key: 'EC-xfm.xtf.tproj.02',
        value: 'Test Project not found'
    },

    {
        key: 'EC-xfm.xtf.tproj.03',
        value: 'A test project with name \'{0}\' and version \'{1}\' already exists.'
    },

    {
        key: 'EC-xfm.xtf.tproj.04',
        value: 'The Test Project has no name.'
    },

    {
        key: 'EC-xfm.xtf.tproj.05',
        value: 'Input for test project name is invalid.'
    },

    {
        key: 'EC-xfm.xtf.tproj.06',
        value: 'Input for test project version is invalid.'
    },

    {
        key: 'EC-xfm.xtf.featobj.01',
        value: 'Test Case Object not found'
    },

    {
        key: 'EC-xfm.xtf.featobj.02',
        value: 'The feature {1} is referenced by test case {0} (Test Project {2}).'
    },

    {
        key: 'EC-xfm.xtf.featobj.03',
        value: 'The Test Object is still used by a Test Case.'
    },

    {
        key: 'EC-xfm.xtf.featobj.04',
        value: 'Test Object Type Not Found'
    },

    {
        key: 'EC-xfm.xtf.counter.01',
        value: 'The counter name \'{0}\' is not unique within the test project.'
    },

    {
        key: 'EC-xfm.xtf.counter.02',
        value: 'Counter with id {0} not found'
    },

    {
        key: 'EC-xfm.xtf.counter.03',
        value: 'The counter {0} is not configured.'
    },

    {
        key: 'EC-xfm.xtf.tcase.01',
        value: 'Test Case Name must be unique'
    },

    {
        key: 'EC-xfm.xtf.tcase.02',
        value: 'Test Case Instance not found'
    },

    {
        key: 'EC-xfm.xtf.tcase.03',
        value: 'No Test Case found for ID {0}'
    },

    {
        key: 'EC-xfm.xtf.tcase.04',
        value: 'Test Case with this name already exists'
    },

    // there is no modelled Exception type in the XTF Infrastructure app
    {
        key: 'EC-xfm.xtf.tcase.05',
        value: 'There is no Input Generator set in the Order Input Source details.'
    },

    // GUI - Fallback
    {
        key: 'Unknown error',
        value: 'Unknown error'
    },

    // GUI - Fallback according to XTF-4
    {
        key: 'Please make sure that there is an "Input Generator" set in the Order Input Source details.',
        value: 'Please make sure that there is an "Input Generator" set in the Order Input Source details.'
    },

    {
        key: 'EC-xfm.xtf.tcchain.01',
        value: 'Test Case Chain not found'
    },

    {
        key: 'EC-xfm.xtf.tcchain.02',
        value: 'Name of Test Case Chain already exists'
    },

    {
        key: 'EC-xfm.xtf.tdata.01',
        value: 'No matching test data of type \'{0}\' is available'
    },

    {
        key: 'EC-xfm.xtf.tdata.02',
        value: 'Test Data of type \'{0}\' has already been used. Please regenerate inputs.'
    },

    {
        key: 'EC-xfm.xtf.tdata.03',
        value: 'Test data for type {0} not found'
    },

    {
        key: 'EC-xfm.xtf.tdata.04',
        value: 'Please specify the underlying XMOM type before the test data export.'
    },

    {
        key: 'EC-xfm.xtf.tdata.05',
        value: 'Test Data Type Has Not Enough Columns'
    },

    {
        key: 'EC-xfm.xtf.tdata.06',
        value: 'Test Data Class not found'
    },

    {
        key: 'EC-xfm.xtf.tdata.07',
        value: 'The Test Data Meta Data Object with ID {0} does not exist in this test project.'
    },

    {
        key: 'EC-xfm.xtf.sut.01',
        value: 'System Under Test already exists'
    },

    {
        key: 'EC-xfm.xtf.sut.02',
        value: 'The feature {0} is not part of any System Under Test.'
    },

    {
        key: 'EC-xfm.xtf.sut.03',
        value: 'SUT Instance Parameter not found: {0}'
    },

    {
        key: 'EC-xfm.xtf.sut.04',
        value: 'Currently no system under test instance is configured.'
    },

    {
        key: 'EC-xfm.xtf.sut.05',
        value: 'System under test not found'
    },

    {
        key: 'EC-xfm.xtf.sut.06',
        value: 'Failed to perform system under test instance specific configuration.'
    },

    {
        key: 'EC-xfm.xtf.sut.07',
        value: 'System Under Test not found'
    },




    // XYNA ERROR CODES

    {
        key: 'XYNA-01159',
        value: 'Input couldn\'t be generated. Please review the referenced Order Input Source via "Manage Execution Details".'
    }

];
