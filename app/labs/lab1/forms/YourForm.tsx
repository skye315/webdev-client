export default function YourForm () {
    return (
        <>
        <label htmlFor="wd-your-text-fields-firstname">First Name: </label>
        <input placeholder="Skye" id="wd-your-text-fields-firstname" /> 
        <br />
        <label htmlFor="wd-your-text-fields-lastname">Last Name: </label>
        <input placeholder="Kaden" id="wd-your-text-fields-lastname" /> <br />
        <label htmlFor="wd-your-text-fields-studentID">Student ID: </label>
        <input
            type="number"
            defaultValue="0011111"
            id="wd-your-text-fields-studentID"
        />
        <br />
        <br />

        <label htmlFor="wd-your-textarea">Why I am taking this course: </label>
        <br />
        <textarea
            id="wd-your-textarea"
            cols={30}
            rows={10}
            defaultValue="I'm interested in taking this course because I like
             designing websites and I'd love to formally learn more about it!"
             />

        <label> Class Standing: </label>
        <br />
        <input type="radio" name="class-standing" id="wd-year-freshman" />
        <label htmlFor="wd-year-freshman">Freshman</label>
        <br />
        <input type="radio" name="class-standing" id="wd-year-sophmore" />
        <label htmlFor="wd-year-sophmore">Sophmore</label>
        <br />
        <input type="radio" name="class-standing" id="wd-year-junior" />
        <label htmlFor="wd-year-junior">Junior</label>
        <br />
        <input type="radio" name="class-standing" id="wd-year-senior" />
        <label htmlFor="wd-year-senior">Senior</label>
        
        <label> Current Status:</label>
        <br />
        <input type="radio" name="current-status" id="wd-current-status-classes" />
        <label htmlFor="wd-current-status-classes">Taking Classes</label>
        <br />
        <input type="radio" name="current-status" id="wd-current-status-coop" />
        <label htmlFor="wd-current-status-coop">On Co-Op</label>
        <br />
        <br />

        <h5 id="wd-checkboxes">Checkboxes</h5>
        <label>Interests: </label>
        <br />
        <input type="checkbox" name="check-interest" id="wd-checkbox-reading" />
        <label htmlFor="wd-checkbox-reading">Reading</label>
        <br />
        <input type="checkbox" name="check-interest" id="wd-checkbox-music" />
        <label htmlFor="wd-checkbox-music">Music</label>
        <br />
        <input type="checkbox" name="check-interest" id="wd-checkbox-movies" />
        <label htmlFor="wd-checkbox-movies">Movies</label>
        <br />
        <br />

        <h4 id="wd-your-dropdowns"> Dropdowns</h4>
        <h5> Select One:</h5>
        <label htmlFor="wd-your-select-one">Major</label>
        <br />
        <select id="wd-your-select-one" defaultValue="Computer Science">
            <option value="Computer Science">Computer Science</option>
            <option value="Data Science">Data Science</option>
            <option value="Business Administration">Business Administration</option>
            <option value="Biology">Biology</option>
            <option value="Other">Other</option>
        </select>
        <h5>Select Many: </h5>
        <label htmlFor="wd-your-select-many">Topics You Want To Learn: </label>
        <br />
        <select
            multiple
            id="wd-your-select-many"
            defaultValue={["HTML", "CSS"]}
        >
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="Javascript">Javascript</option>
            <option value="Client State">Client State</option>
            <option value="MongoDB">MongoDB</option>
        </select>
        

        <h4> Typed Fields</h4>
        <label htmlFor="wd-your-typed-field-email">Email: </label>
        <input 
            type="email"
            placeholder="placeholder@northeastern.edu"
            id="wd-your-typed-field-email"
        />
        <br />
        <label htmlFor="wd-your-text-field-number">Graduation Year: </label>
        <input
            type="number"
            defaultValue="2028"
            placeholder="2000"
            min={2026}
            max={2032}
            id="wd-your-text-field-number"
        />
        <br />
        <label htmlFor="wd-your-text-field-range">Excitment For This Course:</label>
        <input
            type="range"
            defaultValue="4"
            min="1"
            max="5"
            id="wd-your-text-field-range"
        />
        <br />
        <label htmlFor="wd-your-text-field-date">Course Start Date: </label>
        <input
            type="date"
            defaultValue="2026-09-01"
            min="2025-09-01"
            max="2028-09-01"
            id="wd-your-text-field-date"
        />
        <br />
        
        <h4>Buttons</h4>
        <button id="wd-your-html-button-save" type="submit">
            Save
        </button>
        <button id="wd-your-html-button-cancel" type="button">
            Cancel
        </button>
        </>
    );
}