export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />

      <div id="wd-your-image>">
        <img
        id="wd-css"
        width="400px"
        alt="CSS"
        src="https://upload.wikimedia.org/wikipedia/commons/3/3e/USA_09562_Boston_Luca_Galuzzi_2007.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"
        />
      </div>
    </div>
  );
}