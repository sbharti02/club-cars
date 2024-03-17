import React from 'react'
import Section from './Section'
import styled from 'styled-components'
function Home() {
    return (
        <Container>
            <Section
                title="CLUB MOTORS"
                description="Rev Up Your LifeStyle With Club Motors"
                backgroundImg="model-s.jpg"
                leftBtnText="Place Order"
                rightBtnText="More"
            />
            <Section
                title="WASH CAR"
                description="Rev Up Your LifeStyle With Club Motors"
                backgroundImg="model-x.jpg"
                leftBtnText="Place Order"
                rightBtnText="More"

            />
            <Section
                title="CAR SERVICE"
                description="Rev Up Your LifeStyle With Club Motors"
                backgroundImg="model-y.jpg"
                leftBtnText="Place Order"
                rightBtnText="More"

            />
            <Section

                title="DAINT & PAINT"
                description="Rev Up Your LifeStyle With Club Motors"
                backgroundImg="model-x.jpg"
                leftBtnText="Place Order"
                rightBtnText="More"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
  height:100vh;
`