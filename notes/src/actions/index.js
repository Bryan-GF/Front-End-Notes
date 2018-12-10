import axios from 'axios';

export const FETCHING_NOTES = "FETCHING_NOTES";
export const FETCHING_NOTES_SUCCESS = "FETCHING_NOTES_SUCCESS"
export const FETCHING_NOTES_FAILURE = "FETCHING_NOTES_FAILURE"

export const POSTING_NOTE = "POSTING_NOTE";
export const POSTING_NOTE_SUCCESS = "POSTING_NOTE_SUCCESS"
export const POSTING_NOTE_FAILURE = "POSTING_NOTE_FAILURE"

export const EDITING_NOTE = "EDITING_NOTE";
export const EDITING_NOTE_SUCCESS = "EDITING_NOTE_SUCCESS"
export const EDITING_NOTE_FAILURE = "EDITING_NOTE_FAILURE"

export const OVERLAY_TOGGLE = 'OVERLAY_TOGGLE';

export const DELETING_NOTE = 'DELETING_NOTE';
export const DELETING_NOTE_SUCCESS = 'DELETING_NOTE_SUCCESS';
export const DELETING_NOTE_FAILURE = 'DELETING_NOTE_FAILURE';

export const SETTING_NOTE = 'SETTING_NOTE';
export const SETTING_NOTE_SUCCESS = 'SETTING_NOTE_SUCCESS';
export const SETTING_NOTE_FAILURE = 'SETTING_NOTE_FAILURE';

export const fetchNotes = () => dispatch => {
    dispatch({type: FETCHING_NOTES});
    return axios
    .get('http://localhost:6300/api/notes')
    .then(response => {
        dispatch({type: FETCHING_NOTES_SUCCESS, payload: response.data})
    }) 
    .catch(error => {
        dispatch({type: FETCHING_NOTES_FAILURE, payload: error})
    })
}

export const postNote = (note) => dispatch => {
    dispatch({type: POSTING_NOTE});
    return axios
    .post('https://fe-notes.herokuapp.com/note/create', note)
    .then(response => {
        console.log(response)
        dispatch({type: POSTING_NOTE_SUCCESS})
    }) 
    .catch(error => {
        dispatch({type: POSTING_NOTE_FAILURE, payload: error})
        this.setState({});
    })
}

export const editNote = (id, note) => dispatch => {
    dispatch({type: EDITING_NOTE});
    return axios
    .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, note)
    .then(response => {
        dispatch({type: EDITING_NOTE_SUCCESS, payload: response.data})
    })
    .catch(error => {
        dispatch({type: EDITING_NOTE_FAILURE, payload: error})
        this.setState({})
    })
}

export const overlayToggle = () => dispatch => {
    dispatch({type: OVERLAY_TOGGLE});
}

export const deleteNote = (id) => dispatch => {
    dispatch({type: DELETING_NOTE});
    return axios
    .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
    .then(response => {
        dispatch({type: DELETING_NOTE_SUCCESS, payload: response.data})
    })
    .catch(error => {
        dispatch({type: DELETING_NOTE_FAILURE, payload: error})
        this.setState({})
    })
}

export const setNote = (id) => dispatch => {
    dispatch({type: SETTING_NOTE});
    axios
    .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
    .then(response => {
        dispatch({type: SETTING_NOTE_SUCCESS, payload: response.data})
    }) 
    .catch(error => {
        dispatch({type: SETTING_NOTE_FAILURE, payload: error})
        this.setState({})
    })
}