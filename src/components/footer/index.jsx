import { Styled } from "./styled";
import ar_logo from "../../assets/ar_logo.png";
import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <Styled.Wrapper role="contentinfo">
            <Styled.Col>&copy; {new Date().getFullYear()}</Styled.Col>

            <Styled.Col>
                By{" "}
                <NavLink
                    to="/about"
                    end
                    aria-label="About the developer"
                    title="About the developer"
                >
                    <img src={ar_logo} alt="Ashish Ranjan logo" />
                </NavLink>
            </Styled.Col>
        </Styled.Wrapper>
    );
}
