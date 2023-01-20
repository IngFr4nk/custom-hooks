import { useState } from "react"

export const useForm = (initialForm = {} ) => {

    const [formState, setformState] = useState(initialForm)

    const inputChange = ({target}) => {
        const {name, value} =  target
        setformState({
            ...formState,
            [name]: value
        })
    }

    const onResetForm = () => {
        setformState(initialForm)
    }

    return {
        formState,
        inputChange,
        onResetForm
    }
}
