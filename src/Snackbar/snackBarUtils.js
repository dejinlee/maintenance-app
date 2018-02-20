import React from 'react';
import snackActions from './snack.actions';
import { branch, lifecycle } from 'recompose';

export const emptyComponent = () => null;

export const RenderSnackbarError = lifecycle({
    componentDidMount() {
        snackActions.show(this.props.snackAction);
    },
})(emptyComponent);

/**
 * Return a component that renders nothing, but fires
 * the snackbar-action
 * @param test - test to pass to recompose branch
 * @param snackAction - snackBarAction to fire if test passes
 * @returns {*} A component that renders nothing if test passes
 */
export const branchWithMessage = (test, snackAction) => {
    return branch(test, _ => _ =>
        <RenderSnackbarError snackAction={snackAction} />
    );
};
