import './Form.css'

interface FormProps {
    onSubmit?: () => void;
    children: React.ReactNode;
}
const Form :React.FC<FormProps> = ({onSubmit, children})=>{
    return(
        <form className="form">
            {children}
        </form>
    )
}

export default Form