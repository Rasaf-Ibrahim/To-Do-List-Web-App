const Header = ({title}) => {
    return (
        <header className="w-full _p-4px text-center bg-s-t1a3 text-b-t1l1a1 font-cursive-3">
            <h3>{title}</h3>
        </header>
    )
}

Header.defaultProps = {
    title: 'Default Title'
}

export default Header
