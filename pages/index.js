import useSWR from 'swr'
import {useState} from 'react'



import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiMarkdown from 'mui-markdown';


//Skeleton
import Skeleton from '@mui/material/Skeleton';



export default function NewHome(){

    const [state, setState] = useState({url:'', strategy:''})
    const {data, error} = useSWR(state.url, async (u) => {
        if (!state.url || !state.strategy) return {Search:''}
        if (state.url === '' || state.strategy ==='') return {Search:''}
        const res = await fetch(`${state.url}${state.strategy}`)
        const json = await res.json();
        return json;
    })

    const onClickHandler = e => {
        e.preventDefault()
        let s = document.getElementById('strategy').value
        if (state.url === '') {
            setState({url:'https://www.tabnews.com.br/api/v1/contents?&per_page=30&strategy=', strategy:s})
            console.log(state.url)
        }
        else setState({url:'',strategy: state.strategy})
    }



    return (
        <div>
            <TheForm/>
            <TheLink url={state.url} handler={onClickHandler} />
            <TheNews data={data ? data: {Search:''} } show={state.url !== ''} />       
        </div>
    )

}

export function TheForm(){
    return (        
        <form>
            <input id="strategy" name="strategy" type="text" autoComplete="true" placeholder='Busque aqui'/>
        </form>
        
    )
}


export function TheNews({data,show}){
    if (!show) return (<div>Não mostrou </div>)
    if (!data) return (<div>
        Teste vazio
    </div>)
    if (data.error) return (<div>falha na pesquisa</div>)
    if (data.Search === '' ) return (<div>
        nothing
    </div>)

    return (
        <div>
            {data.map((data) => 
                <Card sx={{ maxWidth: "100%", margin: "8px 2vh", display: "block"}}>
                    <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        {data.title}
                    </Typography>

                    <Typography variant="body1" color="text.secundary">
                        Autor: <Link href={`https://www.tabnews.com.br/${data.owner_username}`} target="_blank" underline="hover">{data.owner_username}</Link>
                        <br/>
                        <Link href="#" underline="hover">Ver mais desse autor</Link>
                    </Typography>
                    
                    <Typography variant="body1" color="text.secondary">
                        <strong>Prelúdio:</strong> <MuiMarkdown>{data.body}</MuiMarkdown>
                    </Typography>
                    <br/>
                    <Typography variant="body5" color="text.secondary">
                        <strong>Data de publicação:</strong> {data.updated_at}
                    </Typography> 
                    <br/><br/>
                    <Stack direction="row" spacing={1}>
                        {disabledButton(data.source_url)}
                        <Button variant="contained" href='../'>Página inicial</Button>

                        <Button variant="contained" size="small" key={`${data.owner_username}/${data.slug}`} href={`/selectednews/${data.owner_username}__${data.slug}`}>Ver mais</Button>
                    </Stack>
                    </CardContent>                              
                </Card>
                )
            }           

        </div>
    )
}

export function TheLink({url, handler}){
    return (
        <div>
            <Button href="./" onClick={handler} variant='contained'> {url === '' ? 'Mostrar' : 'Ocultar'}</Button>
        </div>
    )
}

export function disabledButton(url){
    if (url == null) return (<Button variant="contained" disabled>Noticia completa</Button> )
    return(
      <Button variant="contained" href={url} target='_blank'>Noticia completa</Button> 
    )
}