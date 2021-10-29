import { createFeatureSelector, createReducer, on } from '@ngrx/store'
import { increment, decrement, reset } from './counter.actions'

export const featureKey = 'feature'

export interface FeatureState {
  counter: number
}

export interface AppState {
  feature: FeatureState
}

export const initialState = 0

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
)

export const counterReducer = (state: any, action: any) => {
  return _counterReducer(state, action)
}

export const selectFeature = createFeatureSelector<AppState, FeatureState>(
  featureKey
)
