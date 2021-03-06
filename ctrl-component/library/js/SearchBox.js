const SearchBox = ({ value, filterBooks }) => {
    let search;
    const handleChange = () => {
        filterBooks(search.value);
    }

    return (
        <input type="text" placeholder="Поиск по названию или автору" ref={elem => search = elem} 
            defaultValue={value} onChange={handleChange} />
    );
};