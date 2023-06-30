import Form from 'react-bootstrap/Form';

function ColorPicker() {
    return (
        <>
            <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
            <Form.Control
                type="color"
                id="exampleColorInput"
                defaultValue="#563d7c"
                title="Choose your color"
            />
        </>
    );
}

export default ColorPicker;