import { FC } from "react";
import { Container, Link } from "@material-ui/core/";

const Footer: FC = () => (
    <footer>
        <Container>
            <Link href="https://github.com/NaginoMiya" color="inherit">
                made by @NagiNoMiya
            </Link>
        </Container>
    </footer>
);

export default Footer;
