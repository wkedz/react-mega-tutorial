import Container from "react-bootstrap/esm/Container";
import Stack from "react-bootstrap/esm/Stack";
import Sidebar from "./Sidebar";

export default function Body({ sidebar, children }) {
    return (
        <Container>
            <Stack direction="horizontal">
                {sidebar && <Sidebar />}
                <Container>
                    {children}
                </Container>
            </Stack>
        </Container>
    );
}