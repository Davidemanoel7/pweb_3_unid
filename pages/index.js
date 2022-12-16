import useSWR from 'swr'

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function News(){
    //console.log(data)

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
                                        {m.slug}
                                    </Typography>
                                </CardContent>
                                <Button variant="contained" size="small" key={`${m.owner_username}/${m.slug}`} href={`${m.owner_username}/${m.slug}`}>Ver mais</Button>
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



/*
export async function getServerSideProps(context){
    const {pesquisa} = context.query;
    const res = await fetch(`https://www.tabnews.com.br/api/v1/contents`)
  
    const data = await res.json()  
        return {
            props: {  
                data
            }
        }  
}
*/
