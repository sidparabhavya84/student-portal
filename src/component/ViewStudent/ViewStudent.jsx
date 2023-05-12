import React, { useEffect } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { PenFill, TrashFill } from 'react-bootstrap-icons';
import SkeletonLoader from '../Skeleton/Skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { DeleteStud, GetInfo, getStud, getStuds } from '../../service/action/StudentList.ation';
import { useNavigate } from 'react-router-dom';

function ViewStudent({ handleEdit }) {

    const dispatch = useDispatch({ handleEdit })
    const { studentList, isEdit } = useSelector(state => state.studentReducer)
    const { isLoading } = useSelector((state) => state.studentReducer)
    const navigate = useNavigate();

    const handleUpdate = (id) => {

        dispatch(getStud(id));
        handleEdit();
    }

    const handleDelete = (id) => {
        dispatch(DeleteStud(id))
    }

    const getData = () => {
        dispatch(getStuds());
    }
    useEffect(() => {
        getData();
    }, [])

    if (isEdit) {
        navigate('/editStu')
    } else {
        return (
            <>
                <Container>
                    {
                        isLoading ? <SkeletonLoader /> :
                            <>
                                <h2 style={{padding:'5px'}}>
                                    Student List :-
                                </h2>

                                <br />

                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Stu Id</th>
                                            <th>FullName</th>
                                            <th>Email</th>
                                            <th>Contact</th>
                                            <th>Address</th>
                                            <th>Gender</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            studentList.map((Stu, id) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td rowSpan='2'>
                                                                {
                                                                    Stu.id
                                                                }
                                                            </td>
                                                            <td rowSpan='2'>
                                                                {
                                                                    `${Stu.fname} ${Stu.lname}`
                                                                }
                                                            </td>
                                                            <td rowSpan='2'>
                                                                {
                                                                    Stu.email
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    Stu.mobile_no
                                                                }
                                                            </td>
                                                            <td rowSpan='2'>
                                                                {
                                                                    Stu.address
                                                                }
                                                            </td>
                                                            <td rowSpan='2'>
                                                                {
                                                                    Stu.gender
                                                                }
                                                            </td>
                                                            <td rowSpan='2'>
                                                                <div className='d-flex justify-content-around'>
                                                                    <Button variant='primary' onClick={() => handleUpdate(Stu.id)}>
                                                                        <PenFill />
                                                                    </Button>
                                                                    ||
                                                                    <Button variant='danger' onClick={() => handleDelete(Stu.id)}>
                                                                        <TrashFill  />
                                                                    </Button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                {
                                                                    Stu.parents_no
                                                                }
                                                            </td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </>
                    }
                </Container>
            </>
        )
    }

}

export default ViewStudent