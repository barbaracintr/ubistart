import { StyledLink, ImgLogo } from './styles'
import { Categories } from '../Categories'
import { InputSearch } from '../InputSearch'
import { BoxHeader, BoxSearch } from './styles'
import Logo from "../../assets/img/logo.png"

export const Header: React.FC = () => {
    return (
        <BoxHeader>
            <BoxSearch>
                <StyledLink to={'/'}>
                    <ImgLogo src={Logo}/>
                </StyledLink>
                <InputSearch />
            </BoxSearch>

            <Categories />
        </BoxHeader>
    )
}