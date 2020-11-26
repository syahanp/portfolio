import Head from 'next/head';
import styled from 'styled-components';
import HomeHeader from 'containers/home/HomeHeader';

export default function Home() {
    return (
        <Div>
            <Head>
                <title>Aligar Syahan Putra • React Developer and UI/UX Designer</title>
                <meta property="og:title" content="Hey, I'm Aligar Syahan Putra" key="title" />
                <meta name="description" content="A React Developer and UI/UX Designer with years of experience"/>
            </Head>

            <HomeHeader />
        </Div>
    )
}

const Div = styled.div`
    background-color: ${props => props.theme.bg.primary};
    min-height: 100vh;
`