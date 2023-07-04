import { render } from "@testing-library/react"
import Home from "./page"

describe(("First test"), () => {
    it(("Jest is working"), () => {
        expect(true).toBeTruthy()
    })
    it(("Rendering is working in jest"), () => {
        const {getByText} = render(<Home/>)
        expect(getByText("Get started by editing")).toBeDefined()
    })
})