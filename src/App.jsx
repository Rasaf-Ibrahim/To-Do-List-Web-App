import { useState, useEffect } from 'react';

import Header from './components/Header'
import Content from './components/content/Content'
import Footer from './components/Footer'
import AddItem from './components/AddItem';
import SearchItem from './components/SearchItem';

function App() {

    // CSS Style
    const keepTheFooterAtTheBottom = { minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }


    // Javascript
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('toDoList')) || []);

    const [newItem, setNewItem] = useState('');

    const [search, setSearch] = useState('');


    useEffect(() => {
        localStorage.setItem('toDoList', JSON.stringify(items))
    }, [items])



    const addItem = (item) => {
        const id = items.length ? items[items.length - 1].id + 1 : 1;
        const myNewItem = { id, checked: false, item };
        const listItems = [...items, myNewItem];
        setItems(listItems);
    }


    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
        setItems(listItems);
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newItem) return;
        addItem(newItem);
        setNewItem('');
    }




    return (
        <div style={keepTheFooterAtTheBottom} className='_space-y-24px' >

        


            <div className='_space-y-24px'>  {/* Wrapper (Without footer)  */}

                <Header title="To Do List" />

            
            
                
            <div className='_space-y-16px w-[25rem] max-w-[90%] md:w-[40rem] md:max-w-[90%] m-auto'>
                    <AddItem
                        newItem={newItem}
                        setNewItem={setNewItem}
                        handleSubmit={handleSubmit}
                    />


                   {items.length ? ( 

                        <SearchItem
                            search={search}
                            setSearch={setSearch}
                        />

                    ): null}

                    <Content
                        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
                        handleCheck={handleCheck}
                        handleDelete={handleDelete}
                    />

            </div>
 
        

            </div>{/* End: Wrapper (Without footer) */}

            <Footer length={items.length} />


           
            

        </div>

    )
}

export default App


