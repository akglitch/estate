import { Container, Grid,Text } from "@nextui-org/react"


export const Hero = () => {
    return (
        <div>
            <Container >
                <Grid.Container>
                    <Grid lg={6} xs={6} md={6}>
                        <Text
                            h1
                            size={25}
                            css={{
                                textGradient: "45deg, $blue600 -20%, $pink600 50%", paddingTop: "$12", paddingBottom: "$12"
                            }}
                            weight="bold"
                        >
                            “A photograph is like a recipe — the memory is the finished dish.” — Carrie Latet
                        </Text>
                    </Grid>
                    <Grid lg={6} xs={6} md={6}>
                        <div className="wrapper">
                            <div className="imag">
                              
                            </div>
                        </div>
                    </Grid>

                </Grid.Container>


            </Container>

        </div>
    )
}