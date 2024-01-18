import './styles.css';

function TodoTemplate({children}) {
    return (
        <> 
            <div className="template-container">
                <h1 className="template-title">TODO-APP 만들기</h1>
                <div>{children}</div>
            </div>
        </>
    );
}


export default TodoTemplate;