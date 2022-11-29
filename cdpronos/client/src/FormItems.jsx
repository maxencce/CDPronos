export function Field ({name, type, value, onChange, children}) {
    return <div className="form-group">
        <label htmlFor={name}>{children}</label>
        <input type={type} value={value} onChange={onChange} id={name} name={name} className="form-control"/>
    </div>
}

export function Checkbox ({name, value, onChange, children}) {
    return <div className="form-check">
        <input type="checkbox" value={value} onChange={onChange} id={name} name={name} className="form-check"/>
        <label htmlFor={name} className="form-check-label">{children}</label>
    </div>
}