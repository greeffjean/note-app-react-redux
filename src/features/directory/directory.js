import { useSelector, useDispatch } from 'react-redux';
import {
    add,
    noteList
} from './directorySlice';
import {
    reset,
    noteHeading,
    noteDescription
} from '../create/createSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import '../styling.css';

function Directory() {
    const notes = useSelector(noteList);
    const heading = useSelector(noteHeading);
    const description = useSelector(noteDescription);
    const dispatch = useDispatch();

    // submit new note
    function handleSubmit() {
        dispatch(add({ noteHeading: heading, noteDescription: description }));
        dispatch(reset());
    }

    // render added notes
    function fetchNotes() {
        const data = notes.map(val => {
            return <div className="note-item">
                <h3>{val.noteHeading}</h3>
                <p>{val.noteDescription}</p>
            </div>
        });

        return data.length ? data : null;
    }

    return (
        <div className="directory-wrapper">

            <FontAwesomeIcon
                icon={faPlusCircle}
                className={!heading || !description ? "add-btn btn-disable" : "add-btn btn-enable"}
                onClick={() => handleSubmit()}
            />

            <br />
            <br />

            {fetchNotes()}
        </div>
    )
}

export default Directory