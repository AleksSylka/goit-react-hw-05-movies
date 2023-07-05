import { Outlet } from "react-router-dom";
import { Container, Header, Link } from './Layout.styled';
import { Suspense } from "react";

export const Layout = () => {
    return (
        <Container>
            <Header>
                
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/movies'>Movies</Link>
                    </li>
                </ul>
            </Header>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet/>
            </Suspense>
            
        </Container>
    )
}