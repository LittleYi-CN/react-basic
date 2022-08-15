import { useParams } from "react-router-dom";

function About() {
  const params = useParams()
  return (
    <>
      <div>About</div>
      <div>参数为{params.id}</div>
      {/* <div>参数为{name}</div> */}
    </>
  );
}

export default About;
