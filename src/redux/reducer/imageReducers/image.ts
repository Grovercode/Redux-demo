import {IMAGES} from '../../actionTypes'

const imageReducer = (state = [], action : any) => {
    switch (action?.type)
    {
        case IMAGES.LOAD_SUCCESS : {
            return [...state, ...action.images]
        }
        default : return state;
    }
}

export default imageReducer;