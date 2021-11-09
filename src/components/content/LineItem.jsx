import { FaTrash } from 'react-icons/fa';


const LineItem = ({item, handleCheck, handleDelete}) => {
    return (
        <div>

            <li className="grid grid-cols-12 items-center gap-x-16px bg-s-t1a3 -shadow-xs" >

                <div className='col-span-8 _p-8px flex items-center _gap-8px'>

                   
                
                    <input
                        type="checkbox"
                        onChange={() => handleCheck(item.id)}
                        checked={item.checked}
                        className='w-24px h-24px block'
                    />

                    <label
                        onDoubleClick={() => handleCheck(item.id)}
                        className={` block ${item.checked ? "text-l1-a2" : ""} ${item.checked ? "line-through" : ""}`}  >

                        {item.item}

                    </label>

                </div>



                    <button onClick={() => handleDelete(item.id)} className='block col-span-4 justify-self-center text-b-t1l1a1 hover:text-red-l1a1'><FaTrash/></button>
                
            </li>

        
        </div>
    )
}

export default LineItem


