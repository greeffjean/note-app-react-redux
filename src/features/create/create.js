import { useSelector, useDispatch } from 'react-redux';
import {
    changeHeading,
    changeDescription,
    noteHeading,
    noteDescription
  } from './createSlice';
import '../styling.css';

function Create() {
    const heading = useSelector(noteHeading);
    const description = useSelector(noteDescription);
    const dispatch = useDispatch();

    return (
        <div className="create-wrapper">

            <br/>

            <div>
                <textarea
                    placeholder="Heading"
                    className="input-heading"
                    value={heading}
                    onChange={(e) => dispatch(changeHeading( e.target.value ))}
                />
            </div>
            <div>
                <textarea
                    placeholder="Description"
                    className="input-description"
                    value={description}
                    onChange={(e) => dispatch(changeDescription( e.target.value ))}
                />
            </div>  
      </div>
  )
};

export default Create