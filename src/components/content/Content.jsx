import ItemList from "./ItemList"
import {FaMehBlank} from 'react-icons/fa'


const Content = ({items, handleCheck, handleDelete}) => {
   

    return (
        <main>
            {items.length ? ( 

                <ItemList

                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                
                 />
               
            ) : (
                <p className='_mt-32px flex _gap-8px justify-center '>
                <div>Your To Do list is empty! </div>
                <div className='w-24px h-24  text-b-t1l1a1 '> <FaMehBlank/> </div>
                </p>
            )}

            


        </main>
    )
}

export default Content