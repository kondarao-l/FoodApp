/*
import '../ShoppingApp/Shopping.css'
import { useState } from 'react'

const AppStore = () => {

    const tabList = [
        {
            id: 'SOCIAL',
            display: 'Social',
            // imgUrl : 'data:image/jpeg;base64,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'
        },
        {
            id: 'GAME',
            display: 'game'
        },
        {
            id: 'FOOD',
            display: 'food'
        },
        {
            id: 'NEWS',
            display: 'news'
        }

    ]

    const appList = [
        {
            id: 1,
            category: 'SOCIAL',
            name: 'Face Book',
            imgUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAe1BMVEX///8Zd/P///4Ab/KYu/IKc/QLdPNsm+9mmuxgle5ekvAadvRWj+kAbPLi7vf///yCruyuyfH3/f14pukAaPCbvO/P3vSdvuwbdu2pye0AZOUte+oOcOeIsOikv++70PDE2fPY6Pc+g+fv8/kAaedwnus5gu5JiOiOru4G+RpsAAADIUlEQVRoge2aa3fiIBCGyWAwLuYiai6lNrZ1d/v/f+GSdbWkDWaigN0e3i89pwEeh9vMJENIUFBQUFBQ0JcTXN0Rru+rjZLn17Fv+OXHIUh+HGZaJyVRNrNbtSqFNiIODSQrJKNpSm8Uk0WmbEdbr1rmVU1ZZEGc07rKAbvoympYp9wG+S+cb9YT4Pk6tUQ+KlVwrN3Vxio6ijYV0myS1VaWWhOvM5TVQApqGR1FtMCcspwIyW1ttLO4FKjtVjL76IiVmEknjf0pj6K4IeN2A5m5YNMtasHdsGcIdu7I7hlitV3N+bdjcxZT5WyPoibvZ5/No3jzuNg9rdr9vtzv96unbRJ7YseHZC/657YZdoG22Zwmz6Tzjl1Y8i80gZUPNueHasAt+7H7oR0KQr3YvWkhvxM73Q1fku7ZNXsR92Jz2hpSJg/sF/GpX5cCgYczptzxx35qHtSR88B+eB7sLMD9+ebytddJBZirRB4elAyd7bHZUvQ3WlvTWGU/5iDTHjtO+rdKm55cp4lu0e5Ec14Ar4+jUbVF9lxnk2o8dXRkNyE/h+MFH2yYe2Zrey2wA/s7sXl8EtXvlhzm6flJ7CQv4ZFcnLXT7nOA3fuDxa/h6/VGu9my10yzW/crhZOciC0Rbw5gOTzpN845iv0qh3+4D/azwaX5YLeG16E+2Dsn8RqObXLlHtjityF68sDO6vuxy8Mw2sbdAu/N3nuc7jX115ARWWCfb0/os7trtfvAA2B89X6rL6l/nPWmwYG8nf69kK5yA85OoknP7jk9PTDmCP9z7BDYgR3YgR3Ygf3V2WrI+9ntjj0eabqa808v3AfhiO/+V7AbzLd3QNQ7TGfHmHoHIEKOlrdMZjMpEGUeaszx+pbJ7LRAlFp0MiZVV7ORdT2oeqapbHw903gd10Q2vo5LJRr5enNxv+HZavV4usaXXXbJXVXTC4s+wW7W1e2hKyaP3/CzQpqrENNFbxIX5rLGWO6yozmTJMpma6y/1N8rkpWp2bYpP343xSm/sEi6HXBhI8GlhxcExLhF4GPyP9zqisrYoKCgoKCgoK+tP71gPZuyE7A6AAAAAElFTkSuQmCC'
        },
        {
            id: 2,
            category: 'GAME',
            name: 'Ludo',
            imgUrl: 'data:image/jpeg;base64,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'
        },
        {
            id: 3,
            category: 'FOOD',
            name: 'Swiggy',
            imgUrl: 'data:image/png;base64,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'
        },
        {
            id: 4,
            category: 'NEWS',
            name: 'Way 2 News',
            imgUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX9sSj////9sCT+uEH98dn+/fn+uUf9/PL9tzH9rAX969T9rhv99OP8///+1ZT8rgD8sRb7+/j8rRL+tjr958791JD87NL8tCv+qwn84q7889/8z4H8ukj94rr8/ff6sR/858M6WgYWAAABYklEQVR4nO3czU7CQBSA0TIIihWpxV9E6/s/pdEECagkFSd3Ss5Ju+Duvg3T0jJVBQAAAAAAAAAAAAAAAOxLeURnbaXlOIfpMjrsy+L29TyDyV0dXbYxux/lML8upnBxqVChwmgKFSqMp1ChwngKFSqMp1ChwngKFSqMp1ChwngKFSqMp1ChwngKFSqMp1ChwngKFSqMp3D4he3JvwVdXeTxEN21lT6PKm0+7Jw/TNL+9LcJAAD0UD/OMngs59aifTrLYfVcTKJ/ySpUGE+hwvIL2/tJDvNydo1I4/U0g3U5O3+c/u4tQAFS9/HFUO+edf1t9Pu8Kfs5RftydazVWRtdcch/XNPczKIrDlGoUGE8hcMvbP+h8LXo9TB19bGaLjoCIFhqFr0VvTh8096Oev8Yuir6jnffX65prhQWRaHC8ikcfmH71v/h4LDWw6prehtWIAAAAAAAAAAAAAAAwEl5B254Sn67jTIcAAAAAElFTkSuQmCC'
        },
        {
            id: 5,
            category: 'FOOD',
            name: 'Swiggy',
            imgUrl: 'data:image/png;base64,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'
        },
        {
            id: 6,
            category: 'NEWS',
            name: 'Way 2 News',
            imgUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX9sSj////9sCT+uEH98dn+/fn+uUf9/PL9tzH9rAX969T9rhv99OP8///+1ZT8rgD8sRb7+/j8rRL+tjr958791JD87NL8tCv+qwn84q7889/8z4H8ukj94rr8/ff6sR/858M6WgYWAAABYklEQVR4nO3czU7CQBSA0TIIihWpxV9E6/s/pdEECagkFSd3Ss5Ju+Duvg3T0jJVBQAAAAAAAAAAAAAAAOxLeURnbaXlOIfpMjrsy+L29TyDyV0dXbYxux/lML8upnBxqVChwmgKFSqMp1ChwngKFSqMp1ChwngKFSqMp1ChwngKFSqMp1ChwngKFSqMp1ChwngKFSqMp3D4he3JvwVdXeTxEN21lT6PKm0+7Jw/TNL+9LcJAAD0UD/OMngs59aifTrLYfVcTKJ/ySpUGE+hwvIL2/tJDvNydo1I4/U0g3U5O3+c/u4tQAFS9/HFUO+edf1t9Pu8Kfs5RftydazVWRtdcch/XNPczKIrDlGoUGE8hcMvbP+h8LXo9TB19bGaLjoCIFhqFr0VvTh8096Oev8Yuir6jnffX65prhQWRaHC8ikcfmH71v/h4LDWw6prehtWIAAAAAAAAAAAAAAAwEl5B254Sn67jTIcAAAAAElFTkSuQmCC'
        }
    ]

    //const [url, setUrl] = useState()
    // const [name,setName] = useState()
    const [filteredArr, setFilteredArr] = useState([...appList])
    const [search, setSearch] = useState('')
    const [searchResult, setSearchResult] = useState()

    const appButton = (id) => {
        const filteredApps = appList.filter(eachapp =>
            eachapp.category === id)
        console.log(filteredApps, "DSFSDFSD")
        setFilteredArr([...filteredApps])

        // setName(filteredApps[0].name) // setUrl(filteredApps[0].imgUrl)

    }


    const onChangeSearchInput = (event) => {
        // const searchInput = ''
        const searchInput = event.target.value
        setSearch(searchInput)

        const results = filteredArr.filter(eachApp =>
            (eachApp.name.toLowerCase().includes(searchInput.toLowerCase())))
        // setSearchResult(results)
        console.log("okoko : ", results)
        setFilteredArr([...results])
        if (event.target.value === "") {
            setFilteredArr([...appList])
        }

    }



    return (
        <div className='app-container'>
            <div className='app-store'>
                <h1>App store </h1>


                <div className='search-input-container'>
                    <input type="text"
                        placeholder='search'
                        className='search-input'
                        onChange={onChangeSearchInput}

                    />
                    <img className='search-icon' src='https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png' alt='search Icon' />

                </div>

                <div className='tab-container'>


                    {tabList.map(item => (
                        <button className='tab-button' key={item.id} onClick={() => { appButton(item.id) }}>
                            {item.display}

                        </button>
                    ))}
                </div>


                <div className='apps-container'>
                    {filteredArr.map(eachItem => (
                        <div key={eachItem.id}>
                            <div className='logo-container'>
                                <img style={{ height: '40px', width: '40px' }} src={eachItem.imgUrl} />
                                {eachItem.name}
                            </div>

                        </div>
                    ))}
                </div>








            </div>
        </div>
    )
}
export default AppStore

*/





import React, { useEffect, useState } from 'react'
import '../ShoppingApp/Shopping.css'

function DisplayPage() {
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    let cloths = [
        {
            id:1,
            name:'white-shirt',
            price:'$10',
            category:'Men'
        },
        
       { id:2,
        name:'Black-shirt',
        price:'$11',
        category:'Men'
    },
    { id:3,
        name:'Pink-dress',
        price:'$12',
        category:'Women'
    },
    { id:4,
        name:'yellow-dress',
        price:'$15',
        category:'Women'
    },
    { id:5,
        name:'jeans',
        price:'$9',
        category:'kid'
    },
    { id:6,
        name:'tea shirt',
        price:'$11',
        category:'kid'
    },

    ]

   useEffect(() => {
        fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
            .then(response => response.json())
            .then(json => {
                setData(json);
                setLoading(false);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            DisplayPage
             {Array.isArray(data) && data.map((val) => (
                <div style={{display:'flex',flexDirection:"row",justifyContent:'center'}} >
                <button>{val.id}</button>
                </div>
            ))}
        </div>
    );
}






export default DisplayPage

// Task 1 Api : https://mocki.io/v1/0934df88-6bf7-41fd-9e59-4fb7b8758093
// Task2 Api : https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json