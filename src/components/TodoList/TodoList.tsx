import TodoItem from '../TodoItem/TodoItem'
import classes from './TodoList.module.css'
import React, {useState} from 'react'
import Modal from '../Modal/Modal'
import {selectTodo} from '../../redux/features/todo/todoSlice'
import {useAppSelector} from '../../redux/hooks/hooks'
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";
import RefreshIcon from '@material-ui/icons/Refresh';

interface TodoListProps {
}

const TodoList: React.FC<TodoListProps> = () => {
    const allTodos = useAppSelector(selectTodo)

    const [modal, setModal] = useState(false)
    const [index, setIndex] = useState(0)
    const [modalInp, setModalInp] = useState('')
    const [checked, setChecked] = useState(false)
    const [searchInp, setSearchInp] = useState('')
    const showModal = () => {
        setModal(true)
    }
    let todos = allTodos.slice()


    return (
        <div className={classes.root}>
            <div className={classes.inputContainer}>
                <div className={classes.input}>
                    <TextField
                        id="standard-full-width"
                        value={searchInp}
                        style={{margin: 8}}
                        placeholder="Search"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(event) => {
                            setSearchInp(event.target.value)
                        }}
                    />
                    <Button
                        onClick={() => setSearchInp('')}
                        variant={'contained'}
                        color={'default'}
                        className={classes.add}
                    >
                        <RefreshIcon
                        />
                    </Button>
                </div>
            </div>

            <div className={classes.todoContainer}>
                <Modal
                    inpChange={(event: any) => setModalInp(event.target.value)}
                    inpValue={modalInp}
                    open={modal}
                    index={index}
                    checked={checked}
                    handleClose={() => setModal(false)}
                />

                {todos.map((elem, index) => {

                    if (elem.text.includes(searchInp)) {
                        return (<TodoItem
                            editElem={() => {
                                showModal()
                                setModalInp(elem.text)
                                setIndex(index)
                                setChecked(elem.checked)
                            }}
                            key={elem.text + index}
                            checked={elem.checked}
                            text={elem.text}
                            index={index}
                        />)
                    }


                })}
            </div>
        </div>

    )
}

export default TodoList