import ListItem from "../list-item/list-item"

const Card = ({ children, title, text, price, list }) => {
    return (
        <div className="group bg-slate-700 rounded-xl text-white hover:bg-violet-800 hover:scale-105 hover-skew-x-12 duration-1000 transition-transform">
            {/* upper container */}
            <div className="p-8 mt-2 mx-3 rounded-t-xl bg-slate-800">
               <div className="text-center uppercase">{ title }</div>

               <h2 className="mt-10 font-serif text-5xl text-center">{ text }</h2>
               <h3 className="mt-2 text-center">{ price }</h3>

               { children }
            </div>
            <div className="border-t border-slate-700 group-hover:bg-violet-800"></div>

            {/* Lower container */}
            <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
                 {/* List item */}
                 {                    
                    list.map((value, index) => (
                        <ListItem text={ value } key={ index } />
                    ))
                 }
                
            </div>
        </div>
    )
}

export default Card