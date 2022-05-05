import StyledDisplay from "./style"
import ProductCard from "../Card/index"
import { useCatalogue } from "../../providers/catalogue"

const Display = () =>{
    const { catalogue } = useCatalogue()
    return (
        <StyledDisplay>
            {catalogue.map(product => <ProductCard product={product} />)}

        </StyledDisplay>
        
    )
}
export default Display