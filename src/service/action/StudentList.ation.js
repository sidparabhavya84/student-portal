import { CREAT_STU, DELETE_STU, GET_INFO, UPDATE_STU, LOADING, GET_STUDENT } from "../constant/actionType";
import { db } from '../../Firebase/Firebase';
import { doc, setDoc, collection, addDoc, getDocs, getDoc, updateDoc, deleteDoc } from "firebase/firestore";

export const creatStudent = (data) => {
    return {
        type: CREAT_STU,
        payload: data
    }
}

export const creatStudentAsync = (data) => {
    return dispatch => {

        dispatch(loading())
        setTimeout(() => {
            dispatch(creatStudent(data))
        }, 2000)
    }
}

export const DeleteStudent = () => {
    return {
        type: DELETE_STU
    }
}

export const DeleteStudentAsync = () => {
    return dispatch => {

        dispatch(loading())
        setTimeout(() => {
            dispatch(DeleteStudent())
        }, 2000)
    }
}

export const GetInfo = (data) => {
    return {
        type: GET_INFO,
        payload: data
    }
}


export const GetInfoAsync = () => {
    return dispatch => {

        dispatch(loading())
        setTimeout(() => {
            dispatch(GetInfo())
        }, 2000)
    }
}

export const getStudent = (data) => {
    return {
        type: GET_STUDENT,
        payload: data
    }
}

export const UpdateStu = () => {
    return {
        type: UPDATE_STU
    }
}

export const UpdateStuAsync = () => {
    return dispatch => {

        dispatch(loading())
        setTimeout(() => {
            dispatch(UpdateStu())
        }, 2000)
    }
}

export const loading = () => {
    return {
        type: LOADING
    }
}
export const createStu = (data) => {

    return async dispatch => {
        await setDoc(doc(db, "students", `${data.id}`), data).then((res) => {
            console.log("doneee", res);
            dispatch(getStuds())
        }).catch((err) => {
            console.log("error", err);
        })
    }

    // return async dispatch => {
    //     console.log(data);
    //     await addDoc(collection(db,"students"),data).then((res) => {
    //         console.log("doneee",res.id);
    //         dispatch(creatStudent(data));
    //     }).catch((err) => {
    //         console.log("err",err);
    //     })
    // }
}

export const getStuds = () => {
    return async dispatch => {
        await getDocs(collection(db, "students")).then((res) => {
            let newArr = [];
            res.forEach((doc) => {
                newArr = [...newArr, doc.data()];
            });
            dispatch(getStudent(newArr));
        }).catch((err) => {
            console.log(err, "err");
        })
    }
}

export const getStud = (id) => {
    return dispatch => {
        getDoc(doc(db, "students", `${id}`)).then((res) => {
            console.log(res.data());
            dispatch(GetInfo(res.data()))
        }).catch((err) => {
            console.log("error", err);
        })
    }
}

export const UpdateStuinitiate = (data) => {

    return dispatch => {
        updateDoc(doc(db, "students", `${data.id}`), data).then((res) => {
            console.log("update", res);
            dispatch(UpdateStu())
        }).catch((err) => {
            console.log("error", err);
        })
    }
}

export const DeleteStud = (id) => {
    return dispatch => {
        deleteDoc(doc(db, "students", `${id}`)).then(() => {
            console.log("delete Success");
            dispatch(getStuds())
        }).catch((err) => {
            console.log("error", err);
        })
    }
}