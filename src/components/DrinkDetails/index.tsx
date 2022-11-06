import { BoxDetails, ImgDetails, PaperStyled, BoxFrist, BoxIngredients, TypographyStyled, Item } from './styles'
import { useEffect, useState } from "react"
import { baseUrl, urlDetails } from '../../url'
import { useParams } from "react-router-dom";
import { DrinkType } from "../Drinks/drinkType"
import { Header } from '../Header';

const ingredients = new Array<string>

export const DrinkDetails = () => {

    const [details, setDetails] = useState<DrinkType | any>()

    const params = useParams();

    const getDetails = () => {
        fetch(`${baseUrl}${urlDetails}${params.id}`)
            .then((response) => {
                response.json().then((data) => {
                    setDetails(data.drinks[0])
                })
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getDetails()
    }, [])


    getIngredient()
    function getIngredient() {
        for (let i in details) {
            if (i?.includes(`strIngredient`)) {
                if (details[i] !== null) {
                    if (ingredients.includes(details[i]) === false) {
                        ingredients.push(details[i])
                    }
                }
            }
        }
    }

    return (
        <>
            <Header />
            <PaperStyled>
                <BoxDetails>
                    <BoxFrist>
                        <TypographyStyled textalign="center">{details?.strDrink.toUpperCase()}</TypographyStyled>
                        <ImgDetails src={details?.strDrinkThumb} />
                    </BoxFrist>
                    <BoxIngredients>
                        <TypographyStyled textalign="start">Ingredients:</TypographyStyled>

                        {ingredients?.map((ingredient: string, index: number) => <Item key={index}>{ingredient}</Item>)}
                    </BoxIngredients>
                </BoxDetails>
            </PaperStyled>
        </>

    )
}