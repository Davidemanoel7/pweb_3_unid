import useSWR from 'swr'
import {useState} from 'react'

export default function Movies33(){
    const [state, setState] = useState({url:'', userSearch:''})
    const {data, error} = useSWR(state.url, async (u) => {

        if (error) return <div>falha na requisição...</div>
        if (!data) return <div>carregando...</div>

        if (!state.url || !state.userSearch) return {Search:''}
        if (state.url === '' || state.userSearch ==='') return {Search:''}

        const res = await fetch(`${state.url}/${state.userSearch}?page=1&per_page=10&strategy=new`)
        const json = await res.json();
        return json;
    })

    const onClickHandler = e => {
        e.preventDefault()
        let s = document.getElementById('titleSearchString').value
        if (state.url === '') {
            setState({url:'https://www.tabnews.com.br/api/v1',userSearch:s})
        }
        else setState({url:'',userSearch: state.userSearch})
    }

    return (
        <div>
            <TheForm/>
            <TheLink url={state.url} handler={onClickHandler} />
            <TheMovies data={data ? data: {Search:''} } show={state.url !== ''} />       
        </div>
    )
}

export function TheMovies({data,show}){
    if (!show) return (<div>Ooopss...</div>)
    if (!data) return (<div>vazio</div>)
    if (data.error) return (<div>falha na pesquisa</div>)
    if (data.Search === '' ) return (<div>carregando...</div>)
    return (
        <div>
            {data.map((m) => <div key={m.title}>{m.owner_username}</div>) }           
        </div>
    )
}


export function TheLink({url, handler}){
    return (
        <div>
            <a href="#" onClick={handler}>
                {url === '' ? 'Mostrar' : 'Ocultar'}
            </a>
        </div>
    )
}

export function TheForm(){
    return (
        <div>
            <form>
                <input id="userSearch" name="userSearch" type="text" autoComplete="true" placeholder='Pesquise por usuário'/>
            </form>
        </div>
    )
}