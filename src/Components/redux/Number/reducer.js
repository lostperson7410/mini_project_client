const initialNum = 1;
export const numberReducer = (numbers = initialNum,action) => {
    switch(action.type){
        case 'INCREMENT':
          return action.payload + 1;
        case 'DECREMENT':
           return action.payload - 1      
        case 'OVERFLOW':
          return action.payload = 0;
         default: return numbers;

    }
}