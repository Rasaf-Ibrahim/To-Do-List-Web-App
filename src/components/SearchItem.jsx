const SearchItem = ({search, setSearch}) => {
    return (
        <form onSubmit={(e) => e.preventDefault()} className='grid grid-cols-12 items-center   _gap-12px bg-s-t1a3 -shadow-xs'>

            {/*Label*/}
            <div className='col-span-12 justify-self-center'>

                <label htmlFor="search"> <p className='font-semibold text-b-t1l1a1'>Search</p></label>

            </div>

           <input  
                id='search'
                type='text'
                role='searchbox'
                placeholder='Search  Items'
                value = {search}
                onChange = {(e) => setSearch(e.target.value)}
                className='col-span-8 py-2 px-4 rounded-2 -h5 bg-s-t1a4 _shadow-xs border border-s-t1a1  placeholder-l1-a3  focus:outline-none focus:ring-2 focus:ring-b-t1l1a1 focus:border-0'/>

            
        </form>
    )
}

export default SearchItem
