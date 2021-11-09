import ItemList from "./ItemList"
import {FaSadTear} from 'react-icons/fa'


const Content = ({items, handleCheck, handleDelete}) => {
   

    return (
        <main>

        <div className='bg-gray-l1a3 text-l2-a1 -shadow-xs _p-4px text-center'>{items.length}  {items.length===1 ? 'item' : "items"} to do</div>


            {items.length ? ( 

                <ItemList

                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                
                 />
               
            ) : (
                <p className='_mt-32px  flex flex-col _gap-16px items-center'>
                <div>Your to do list is empty! </div>
                <div className='text-red-l1a1'> <FaSadTear size={50}/> </div>
                </p>
            )}

            


        </main>
    )
}

export default Content