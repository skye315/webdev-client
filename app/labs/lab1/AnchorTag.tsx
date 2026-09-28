export default function AnchorTag() {
  return (
    <>
      <h4>Anchor tag</h4>
      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text
      <br />
      <a href="https://github.com/jannunzi" id="wd-github">
        GitHub
      </a>

      <a href="https://www.yahoo.com/news/" id="wd-yahoo-news">
        Yahoo News
      </a>

      <a
        href="https://github.com/skye315"
        target="_blank"
        rel="noreferrer"
        id="wd-your-github"
        >
            Github (new tab)
        </a>
    </>
  );
}