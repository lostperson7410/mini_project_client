export const NumberAction = {
    INCREMENT: (number) => ({type:'INCREMENT', payload:number}),
    DECREMENT: (number) => ({type:'DECREMENT',payload:number}),
    OVERFLOW: (number) => ({type:'OVERFLOW',payload:number}),

}