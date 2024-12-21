import React from 'react'
import {Slider, SliderProps} from '@mui/material'

// type SliderPropsType={
//     value:number,

// } & SliderProps


const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ width: '300px' , margin:'0px 15px'}

                
            }

            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
