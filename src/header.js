export default function header ({nameHeader}){
    return (
        <div style={{
            backgroundColor:"rgb(2, 75, 75)",
            height:"150px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            color:"white"
        }}>
            <h1>{nameHeader}</h1>
        </div>
    );
}