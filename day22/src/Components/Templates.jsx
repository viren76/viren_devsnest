const Template = ({ templates,setMeme }) => {
    return (
        <div className="templates">
            {
                templates.map((template) =>
                (
                    <div className="temp" key={template.id} onClick={()=>{
                        setMeme(template);
                    }}>
                        <div className="imgs" style={{ backgroundImage: `url(${template.url})` }}>
                        </div>
                    </div>
                
                ))
            }
        </div>
    );
};

export default Template;