export default function Post({title,pargraphe,children}){
    return(
        <div style={{
            border: "3px solid black",
            margin:"10px",
            padding:"6px",
        }}>
            <>{children}</>
            <h2>{title}</h2>
            <hr/>
            <p>{pargraphe}</p>
        </div>
    );
}