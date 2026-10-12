const STARSHIP =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOCQo5UQ5OgRH2ENs3iIicE8aPDh5ucqI4ZT_-AW8Xqo1-_qXp5dIr13s&s=10";
const LOREM =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.";

export default function Float() {
  return (
    <div id="wd-float-divs">
      <h2>Float</h2>
      <div>
        <img className="wd-float-right" src={STARSHIP} alt="Starship" />
        {LOREM} {LOREM}
        <img className="wd-float-left" src={STARSHIP} alt="Starship" />
        {LOREM} {LOREM}
        <img className="wd-float-right" src={STARSHIP} alt="Starship" />
        {LOREM} {LOREM}
        <img className="wd-float-left" src={STARSHIP} alt="Starship" />
        {LOREM} {LOREM}

        <div id="wd-ai-float" className="wd-float-right wd-dimension-portrait wd-bg-color-green wd-fg-color-white">
          AI float
        </div>
        <p>
          This AI sample is floated on the right so the text wraps around it while the next row is cleared.
        </p>
        <div className="wd-float-done" />
      </div>
      <div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-yellow">
          Yellow
        </div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-blue wd-fg-color-white">
          Blue
        </div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-red">
          Red
        </div>
        <img className="wd-float-right" src={STARSHIP} alt="Starship" />
        <div className="wd-float-done" />
      </div>

      <div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-yellow">
            Yellow 
            </div>
      </div>
    {LOREM}
    <div className="wd-float-done" />
    </div>
  );
}