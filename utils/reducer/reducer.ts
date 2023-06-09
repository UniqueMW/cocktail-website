import type { IGlobalState, IGlobalAction } from '@/types'
function reducer(state: IGlobalState, action: IGlobalAction): IGlobalState {
  switch (action.type) {
    case 'OPENAUTHBOX':
      return { ...state, openAuthBox: action.payload }
    case 'OPENSEARCHBOX':
      return { ...state, openSearchBox: action.payload }
  }
}

export default reducer
