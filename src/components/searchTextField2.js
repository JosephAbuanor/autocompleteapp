import React, { useState } from 'react';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import api from "../configs/http-common";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



function SearchTextField2(props) {
    const [response, setResponse] = useState([])
    const [searchTerm, setSearchTerm] = useState(null)
    const [page, setPage] = React.useState(1);
    const handleChange = () => {
        setPage();
    };
    async function fetchData(element) {
        element.target.value !== null ? setSearchTerm(element.target.value)
            : setSearchTerm(null)

        const dataObject = await api.get("/auto/" + searchTerm);
        setResponse(dataObject.data.found.rows);
        console.log(dataObject.data.found.rows);

    }


    return (
        <div>
            <Paper elevation={3}
                component="form"
                sx={{ display: 'flex', alignItems: 'center', width: '100%', border: '2px solid green' }}>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Email"
                    inputProps={{ 'aria-label': 'search email' }}
                    onChange={fetchData}
                />
                <IconButton type="submit" sx={{ height: 50, p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>

            </Paper>
            {response.length > 0 ? <List className="my-list">
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
                        <ListItemText primary={value.email} />
                    </ListItem>
                ))}
            </List> :
                <ListItem
                    className="my-list-item"
                >
                    <ListItemText secondary="No results found" />
                </ListItem>
            }
            <div style={{ background: "white" }}>
                <Stack spacing={2} >
                    <Pagination
                        color="primary"
                        count={10}
                        page={page} onChange={handleChange}
                    />
                </Stack>
            </div>
        </div>
    );
}

export default SearchTextField2;