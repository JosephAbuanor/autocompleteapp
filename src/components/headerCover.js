import bgImage from "../assets/images/desk.jpg";
import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Particles from "react-particles-js";
import SearchComponent from "./searchComponent";


function HeaderCover() {

    return (

        <div id="headerCover" style={{ backgroundImage: `url(${bgImage})` }}>
            <Particles id="particles"
                params={{
                    particles: {
                        number: {
                            value: 80,
                        },
                        color: {
                            value: "#fff"
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 50,
                            "color": "#fff",
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 1,
                            "bounce": true,
                        }
                    },

                }}

            />
            <div className="masthead text-center text-white d-flex">
                <div className="container my-auto">
                    <div className="row">
                        <Container maxWidth="lg" >
                            <Grid container spacing={3} style={{ justifyContent: "center" }}>
                                <Grid item xs={12} md={12} lg={8}>
                                    <SearchComponent />
                                </Grid>
                            </Grid>
                            <Box pt={12}></Box>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderCover;