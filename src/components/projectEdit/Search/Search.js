import './search.scss'

export const Search = () => {
    // function Search() {
    //     const input = document.querySelector('.search__input');
    //     const filter = input.value.toUpperCase();
    //     const table = document.querySelector('.table');
    //     const tr = table.getElementsByTagName('tr');

    //     for (let i = 0; i < tr.length; i++) {
    //         const name = tr[i].getElementsByTagName('td')[7];
    //         const id = tr[i].getElementsByTagName('td')[8];
            
    //         if (name || id) {
    //             const nameValue = name.textContent || name.innerText;
    //             const idValue = id.textContent || id.innerText
    //             if (nameValue.toUpperCase().indexOf(filter) > -1 || idValue.toUpperCase().indexOf(filter) > -1) {
    //                 tr[i].style.display = "";
    //             } else {
    //                 tr[i].style.display = "none";
    //             }
    //         }
    //     }
    // }
    return (
        <div className="search">
            <input className="search__input" type="text" onKeyUp={Search} placeholder="Search" />
        </div>
    )
}