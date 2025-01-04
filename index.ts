import * as name from './actions/name';
// other action imports ...

export interface Action {
  name: string;
  canPerform(): boolean;
  perform(): void;
}

const ACTIONS: Action[] = [
  name,
  // other actions...
];

export function calculateActions(): Action[] {
  return ACTIONS.filter((action) => action.canPerform());
}