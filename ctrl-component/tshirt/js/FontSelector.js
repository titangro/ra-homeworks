const FontSelector = ({fonts, selectedFont, onSelect}) => {
    return (
        <div style={{height:"250px",overflow:"scroll"}}>
            {fonts.map((font, fontIndex) =>         
                <div className="grid center font-item" key={fontIndex}>
                    <input type="radio" name="font" defaultValue={selectedFont} value={font.name} id={font.name} onChange={() => onSelect(font)} />
                    <label htmlFor={font.name} className={"grid-1"} key={fontIndex} >
                        <div className="picture-font grid">
                            {["a","b","c"].map((char, charIndex) => 
                                <Char key={charIndex} font={font} char={char} />
                                    )}                            
                            </div>
                    </label>                        
                </div>
            )}
        </div>
    )
};


const Char = ({font,char}) =>
{
    let src = `${font.path}/${char}.jpg`;
    return (
        <div className="char">
            <img className="font-img" src={src} alt={char} />
        </div>
    )
}