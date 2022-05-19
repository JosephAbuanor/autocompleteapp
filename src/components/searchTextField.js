import React, { useState } from 'react';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';


function SearchTextField(props) {
    const [response, setResponse] = useState([])
    const [searchChar, setSearchChar] = useState("none")

    const queryEmail = (e) => {


        if (e.target.value.length > 2) {
            const url = "http://localhost:5000/" + e.target.value;
            fetch(url)
                .then(res => res.json())
                .then(res => setResponse(res.domain))
                .then(res => console.log(res))

            setSearchChar("block")
        } else {
            setResponse([]);
            setSearchChar("none")
        }
    }

    return (
        <div>

            <Paper elevation={3}
                component="form"
                sx={{ display: 'flex', alignItems: 'center', width: '100%', border: '2px solid #07193f' }}>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Email"
                    inputProps={{ 'aria-label': 'search email' }}
                    onChange={queryEmail}
                />
                <IconButton type="submit" sx={{ height: 50, p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
            {response.length > 0 ?
            <List className="my-list">
                {response.map((value) => (
                    <ListItem
                        className="my-list-item"
                        key={value.id}
                        disableGutters
                        secondaryAction={
                            <IconButton>
                                <MenuIcon />
                            </IconButton>
                        }
                    >
                        <ListItemText primary={value.domainName} />
                    </ListItem>
                ))}
            </List> :
                <ListItem
                    className="my-list-item" style={{display: searchChar}}
                >
                    <ListItemText secondary="No results found" />
                </ListItem>
                
            }

        </div>
    );
}

export default SearchTextField;