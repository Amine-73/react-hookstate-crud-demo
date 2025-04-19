import "./styleApForm.css"
export default function ApplicationForm(){
    return(
        <section>
            <form>
                <h2 style={{
                    textTransform:"uppercase"
                }}>Requesting a Loan</h2>
                <hr style={{
                    height:"2px",
                    backgroundColor:"black",
                    border:"none"
                }}/>
                <div className="Name">
                    <label>Your Name :</label>
                    <input type="text"/>
                </div>
                <div className="Phone">
                    <label>Phone Number :</label>
                    <input type="Phone"/>
                </div>
                <div className="Age">
                    <label>Age :</label>
                    <input type="number"/>
                </div>
                <div className="checkbox">
                    <label>Are you an Employee ?</label>
                    <input style={{
                        height:"18px"
                    }} type="checkbox"/>
                </div>
                <select>
                    <option>les than 500$</option>
                    <option>Between 500$ and 2000$</option>
                    <option>Above 2000$</option>
                </select>
                <div>
                    <button style={{
                        padding:"8px 25px",
                        marginTop:"15px",
                        fontWeight:"bold",
                        color:"white"
                    }} disabled>Submit</button>
                </div>
                
            </form>
        </section>
    )
}