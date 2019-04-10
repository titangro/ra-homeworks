const TextRenderLine = ({value, onChange}) => {
	function handleChange(event) {
		event.target.value = event.target.value.replace(/[^A-Za-z ]+/g, '');
		onChange(event.target.value);
		console.log(value)
	}
	
	return (
		<div class="type-text">
			<textarea name="text" onChange={handleChange} id="font-text" cols="30" rows="2" placeholder="Введите текст для футболки"></textarea>			
		</div>
	);
};
