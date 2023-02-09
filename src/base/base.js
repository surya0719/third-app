import React from "react";


function Base({title,description,children}){
    return(
        <div className="main-division">
            <header>
                <h1 className="heading">{title}</h1>
            </header>
             <main className="main-component">
                <h2>{description}</h2>
                <div className="children-segment">
                     {children}
                 </div>
            </main>
        </div>
    )
}
export default Base;