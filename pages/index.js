import useSWR from 'swr'
import {useState} from 'react'


import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Home(){
    const {data, error, pesquisa} = useSWR(`https://www.tabnews.com.br/api/v1/contents`, fetcher)


    if (error) return <div>falha na requisição...</div>
    if (!data) return <div>carregando...</div>
    return (    
        <div>  

            <form method="GET" style={{marginBottom: "20px"}}>
                <input type="text" name="pesquisa" placeholder="Procurar noticia:" defaultValue={pesquisa}></input>
                <input type="submit" value="&#128269;"></input>
            </form>

            {(data.map((m) => 
                        <Card sx={{ maxWidth: "90%", margin: "8px 2vh", display: "block"}}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {m.title}
                                    </Typography>
                                    <Typography variant="body1" color="text.primary">{m.owner_username}</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {m.title}...
                                    </Typography>
                                    <br/>
                                    <Button variant="contained" size="small" key={`${m.owner_username}/${m.slug}`} href={`/selectednews/${m.owner_username}__${m.slug}`}>Ver mais</Button>
                                </CardContent>                                
                        </Card>))
                }
        </div> 
    )
}

async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}
