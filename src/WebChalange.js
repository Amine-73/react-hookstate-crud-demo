import Header from "./header.js";
import Post from "./Post.js";
import TagBtn from "./Tagbtn.js";
const showCategories = true;
export default function WebSite() {
    const infoPost=[
        {id:1,num:"20",title:"ACademy Tarmeez", paragraphe:"The Academy dedicated learning programming  with deffirent language and technique"},
        {id:2,title:"Hello World" ,paragraphe:"THis is the Hello World article"},
        {id:3,title:"Post 3", paragraphe:"This is the body of post 3"}
    ];
    const listMap=infoPost.map((postX)=>{
        return (
            <div key={postX.id}>
                <Post  title={postX.title} pargraphe={postX.paragraphe} ><h2>{postX.num}</h2></Post>
            </div>
            
        ); 
    })
  return(
    <>
      <Header nameHeader="Academy Tarmiz"></Header>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: "60%",
            margin: "10px",
          }}
        >
            {listMap}
        </div>

        <div
          style={{
            width: "20%",
          }}
        >
          <AppSideMenu />
        </div>
      </div>
    </>
  );
}
function AppSideMenu() {
  if (showCategories == true) return <TagBtn />;
  else return null;
}


function sideMenu(){

}