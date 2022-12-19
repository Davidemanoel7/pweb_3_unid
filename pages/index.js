import useSWR from 'swr'
import {useState} from 'react'



import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiMarkdown from 'mui-markdown';


import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


//Skeleton
import Skeleton from '@mui/material/Skeleton';



export default function NewHome(){
    const [state, setState] = useState({url:'https://www.tabnews.com.br/api/v1/contents', category:''})
    const {data, error} = useSWR(state, async (u) => {
        if (u.url === '') return {Search:''}
        const res = await fetch(`${u.url}${u.category}`)
        const json = await res.json();
        return json;
    })

    const onClickHandler = (e) => {
        let s = e.target.value
        setState({url:'https://www.tabnews.com.br/api/v1/contents?&per_page=30&strategy=', category:s})
        /*
        if (state === '') {
            setState({url:'https://www.tabnews.com.br/api/v1/contents?&per_page=30&strategy=', category:s})
        }*/
    }

    return (
        <div>
            <div>
            <Box sx={{ minWidth: 120, margin:'16px auto', display: 'inline'}}>
                <FormControl sx={{ minWidth: '40%'  }}>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={state.category}
                    label="Category"
                    onChange={onClickHandler}>
                    <MenuItem value='old'>Old</MenuItem>
                    <MenuItem value='new'>New</MenuItem>
                    <MenuItem value='relevant'>Relevant</MenuItem>
                </Select>
                </FormControl>
            </Box>
            </div>            
            <TheNews data={data ? data: {Search:''} } show={state.url !== ''} />       
        </div>
    )

}

export function TheNews({data,show}){
    if (!show) return (<div>Não mostrou</div>)
    if (!data) return (
        <div>
            vazio
        </div>
    )
    if (data.error) return (<div>Falha na pesquisa</div>)
    if (data.Search === '' ) return(
    <div>
        <Stack spacing={1}>
              <Skeleton variant="text" sx={{ fontSize: '2.5rem', height:"120" }} />
              <Skeleton variant="rectangular" width={'100%'} height={100} />
              <Skeleton variant="rectangular" width={'100%'} height={100} />
              <Skeleton variant="rectangular" width={'100%'} height={100} />
              <Skeleton variant="rectangular" width={'100%'} height={100} />
              <Skeleton variant="rectangular" width={'100%'} height={100} />
          </Stack>
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
                    </Typography>
                    <br/>
                    <Typography variant="body5" color="text.secondary">
                        <strong>{Publi(data.title)}</strong>
                    </Typography>
                    <br/>
                    <Typography variant="body5" color="text.secondary">
                        Data de publicação: {data.updated_at.slice(0,10)}
                    </Typography> 
                    <br/><br/>
                    <Stack direction="row" spacing={1}>
                        <Button variant="contained" size="small" key={`${data.owner_username}/${data.slug}`} href={`/selectednews/${data.owner_username}__${data.slug}`}>Ver mais</Button>
                    </Stack>
                    </CardContent>                              
                </Card>
                )
            }
        </div>
    )
}

export function disabledButton(url){
    if (url == null) return (<Button variant="contained" disabled>Noticia completa</Button> )
    return(
      <Button variant="contained" href={url} target='_blank'>Noticia completa</Button> 
    )
}

export function Publi (data) {
    if(data == null) return (
        <strong>Comentário</strong>
    ) 
    return (<Typography variant="body5" color="text.    secondary">
        <strong>{data}...</strong>
        </Typography>)
}