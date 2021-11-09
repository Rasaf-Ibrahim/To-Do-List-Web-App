import {FaPlusSquare} from 'react-icons/fa'

import { useRef } from 'react';

const AddItem = ({newItem, setNewItem, handleSubmit}) => {

    const inputRef = useRef();

    return (

        <form onSubmit={handleSubmit}  className='grid grid-cols-12 items-center    _gap-12px bg-s-t1a3 -shadow-xs '>



        {/*Label*/}
            <div className='col-span-12 justify-self-center'>

                <label htmlFor="addItem"> <p className='font-semibold text-b-t1l1a1'>Add Item</p></label>

            </div>


       
        {/*Input*/}
            
           
                <input 
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                    ref={inputRef}
                    type="text" 
                    id='addItem' 
                    placeholder='Add Item' 
                    required 
                    className='col-span-8 py-2 px-4 rounded-2 -h5 bg-s-t1a4 _shadow-xs border border-s-t1a1  placeholder-l1-a3  focus:outline-none focus:ring-2 focus:ring-b-t1l1a1 focus:border-0 ' />
        


        



            {/*Button*/}

            <div className='col-span-2 justify-self-center'>
            
                <button className='-btn-scale-down text-b-t1l1a1 hover:text-green-l1a1'
                        onClick={() => inputRef.current.focus()}> 
                        <FaPlusSquare size={25}/>
                </button>

            </div>

           
            
        </form>
        
    )
}

export default AddItem
