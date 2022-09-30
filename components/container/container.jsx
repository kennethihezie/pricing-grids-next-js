const Container = ({children }) => {
    return (
        <div className="flex flex-col space-y-2 my-6 md:flex-row md:space-y-0 md:space-x-6 md:my-0">
           { children }
        </div>
    )
}


export default Container