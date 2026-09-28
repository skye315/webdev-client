export default function Tables() {
  return (
    <div id="wd-tables">
      <h4>Table Tag</h4>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>Quiz</th>
            <th align="center">Topic</th>
            <th align="center">Date</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Q1</td>
            <td align="center">HTML</td>
            <td align="center">2/3/21</td>
            <td align="center">85</td>
          </tr>
          <tr>
            <td>Q2</td>
            <td align="center">CSS</td>
            <td align="center">2/10/21</td>
            <td align="center">90</td>
          </tr>
          <tr>
            <td>Q3</td>
            <td align="center">JavaScript</td>
            <td align="center">2/17/21</td>
            <td align="center">95</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Average</td>
            <td align="right">90</td>
          </tr>
        </tfoot>
      </table>

      <div id="wd-your-table">
      <table border={1} width="100%">
        <thead>
            <tr>
                <th>Day</th>
                <th align="center"> Class </th>
                <th align="center"> Time </th>
            </tr>
        </thead>
        <tbody>
            <td align="center"> Monday </td>
            <td align="center"> - </td>
            <td align="center"> - </td>
        </tbody>
        <tbody>
            <td align="center"> Tuesday</td>
            <td align="center"> CS 4530</td>
            <td align="center"> 9:50am - 11:30am</td>
        </tbody>
        <tbody>
            <td align="center"> Tuesday</td>
            <td align="center"> Social Networks</td>
            <td align="center"> 11:45am - 1:30pm</td>
        </tbody>
      </table>
      </div>
    </div>
  );
}