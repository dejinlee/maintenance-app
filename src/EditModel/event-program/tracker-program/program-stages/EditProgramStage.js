import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeQuery } from '../../../../router-utils';
import fieldOrder from '../../../../config/field-config/field-order';
import { createFormFor } from '../../../formHelpers';
import { flattenRouterProps, wrapInPaper } from '../../../componentHelpers';
import eventProgramStore$ from '../../eventProgramStore';
import { get, isEqual } from 'lodash/fp';
import { changeStep } from './actions';
import { editProgramStageField } from './actions';
import mapPropsStream from 'recompose/mapPropsStream';
import { compose, lifecycle } from 'recompose';
import { Observable } from 'rxjs';
import steps from './programStageSteps';
import { createStepperFromConfig } from '../../../stepper/stepper';
import { activeStepSelector } from '../../selectors';
import { withProgramStageFromProgramStage$ } from "./utils";
import ProgramStageStepper from './ProgramStageStepper';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import { changeStepperDisabledState } from "../../actions";
import { editProgramStageReset, cancelProgramStageEdit } from "./actions";
import SaveButton from '../../../SaveButton.component';
import CancelButton from '../../../CancelButton.component';

const programStage$ = eventProgramStore$.map(get('programStages'));

const EditProgramStage = props => {
    console.log(props)
    return (
        <div>
            <ProgramStageStepper
                programStage$={props.programStage$}
                programStage={props.programStage}
            />
            <SaveButton isValid onClick={props.editProgramStageReset} />
            <CancelButton onClick={() => props.cancelProgramStageEdit(props.programStage)} />
        </div>
    );
};

export default compose(
    connect(null, (dispatch) => bindActionCreators({
        changeStepperDisabledState,
        editProgramStageReset,
        cancelProgramStageEdit
    }, dispatch)),
    lifecycle({
        componentWillMount() {
            this.props.changeStepperDisabledState(true)

        },
        componentWillUnmount() {
            this.props.changeStepperDisabledState(false)
            this.props.editProgramStageReset()
        }
    }),
    withProgramStageFromProgramStage$)(EditProgramStage)
