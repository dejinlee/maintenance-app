export const PROGRAM_STAGE_ATTRIBUTES_ADD = 'PROGRAM_STAGE_ATTRIBUTES_ADD';
export const PROGRAM_STAGE_ATTRIBUTES_REMOVE = 'PROGRAM_STAGE_ATTRIBUTES_REMOVE';
export const PROGRAM_STAGE_ATTRIBUTES_ADDREMOVE_COMPLETE = 'PROGRAM_STAGE_ATTRIBUTES_ADDREMOVE_COMPLETE';
export const PROGRAM_STAGE_ATTRIBUTES_EDIT = 'PROGRAM_STAGE_ATTRIBUTES_EDIT';
export const PROGRAM_STAGE_ATTRIBUTES_EDIT_COMPLETE = 'PROGRAM_STAGE_ATTRIBUTES_EDIT_COMPLETE';

const actionCreator = type => payload => ({ type, payload });

export const addAttributesToStage = actionCreator(PROGRAM_STAGE_ATTRIBUTES_ADD);
export const removeAttributesFromStage = actionCreator(PROGRAM_STAGE_ATTRIBUTES_REMOVE);

export const editProgramStageAttributes= actionCreator(PROGRAM_STAGE_ATTRIBUTES_EDIT);
