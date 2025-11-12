import AlertButton from "./AlertButton";
import AlertButton2 from "./AlertButton2";

export default function Toolbar() {
  return (
    <div>
      <AlertButton message="Playing!">
        <div>Play <strong>music</strong></div>
      </AlertButton>
      
      <AlertButton message="Uploading!">
        Upload Image
      </AlertButton>
      
      <AlertButton2 handleClick={ () => alert("Hello!!!") }>
        Say Hello
      </AlertButton2>
    </div>
  );
}
