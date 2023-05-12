import { CREAT_STU, DELETE_STU, GET_INFO, UPDATE_STU, LOADING, GET_STUDENT } from "../constant/actionType";

const initialState = {
    studentList: [],
    studentInfo: {},
    isLoading: false,
    isEdit: false
}

const StudentReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_STUDENT:
            return {
                ...state,
                studentList : action.payload,
                isEdit: false   
                // ...state, studentList: [
                //     ...state.studentList, action.payload
                // ], isLoading: false
            }
            break;

        case DELETE_STU:
            const DStu = state.studentList.filter((Stu) => Stu.id !== action.payload)
            return {
                ...state,
                studentList: DStu,
                isLoading: false,
                isEdit: false
            }
            break;

        case GET_INFO:
            // const GetInfo = state.studentList.filter((Stu) => Stu.id === action.payload)
            return {
                ...state,
                studentInfo: action.payload,
                isLoading: false,
                isEdit: true
            }
            break;

        case UPDATE_STU:    
            return {
                ...state,
                studentInfo: {},
                isLoading: false,
                isEdit: false
            }
            break;
        case LOADING: {
            return {
                ...state,
                isLoading: true,
                isEdit: false
            }
        }
            break;

        default:
            return state;
    }
}

export default StudentReducer;