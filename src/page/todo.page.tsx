import classes from './todo.module.css'
import TodoList from '../../src/components/TodoList/TodoList'
import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import {Button} from '@material-ui/core'
import AddBoxIcon from '@material-ui/icons/AddBox';
import {useAppDispatch} from '../redux/hooks/hooks'
import {AddTodo} from '../../src/redux/features/todo/todoSlice'

function TodoPage() {
    const dispatch = useAppDispatch()

    const [value, setValue] = useState<string>('')

    return (
        <div className={classes.root}>
            <TodoList/>
            <div className={classes.container}>
                <div className={classes.input}>
                    <TextField
                        value={value}
                        id="outlined-basic"
                        label="Input task"
                        variant="outlined"
                        fullWidth
                        onChange={(event) => {
                            setValue(event.target.value)
                        }

                        }
                    />
                    <Button
                        onClick={() => {
                            dispatch(AddTodo({text: value, checked: false}))
                            setValue('')
                        }}
                        variant={'contained'}
                        size={'large'}
                        color={'default'}
                        className={classes.add}
                    >
                        <AddBoxIcon/>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default TodoPage